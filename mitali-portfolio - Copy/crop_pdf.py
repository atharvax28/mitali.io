#!/usr/bin/env python3
"""
PDF to Image Extractor and Cropper
Extracts pages from PDF and crops to uniform dimensions while maintaining quality.
"""

import os
import sys
import fitz  # PyMuPDF
from PIL import Image
from pathlib import Path

TARGET_WIDTH = 3007
TARGET_HEIGHT = 1920
TARGET_RATIO = TARGET_WIDTH / TARGET_HEIGHT  # ~1.565


def get_optimal_crop_box(img_width, img_height):
    """Calculate optimal crop box to match target aspect ratio."""
    current_ratio = img_width / img_height
    
    if current_ratio > TARGET_RATIO:
        # Image is wider - crop width
        new_width = int(img_height * TARGET_RATIO)
        left = (img_width - new_width) // 2
        return (left, 0, left + new_width, img_height)
    else:
        # Image is taller - crop height
        new_height = int(img_width / TARGET_RATIO)
        top = (img_height - new_height) // 2
        return (0, top, img_width, top + new_height)


def extract_and_crop_pdf(pdf_path, output_dir, dpi=150):
    """Extract PDF pages as images and crop to target dimensions."""
    pdf_path = Path(pdf_path)
    output_dir = Path(output_dir)
    output_dir.mkdir(parents=True, exist_ok=True)
    
    doc = fitz.open(pdf_path)
    total_pages = len(doc)
    
    print(f"Processing: {pdf_path.name}")
    print(f"Total pages: {total_pages}")
    print(f"Target size: {TARGET_WIDTH}x{TARGET_HEIGHT}")
    print()
    
    for page_num in range(total_pages):
        page = doc[page_num]
        
        # Render page to image
        zoom = dpi / 72
        mat = fitz.Matrix(zoom, zoom)
        pix = page.get_pixmap(matrix=mat)
        
        # Convert to PIL Image
        img = Image.frombytes("RGB", [pix.width, pix.height], pix.samples)
        
        # Calculate crop box
        crop_box = get_optimal_crop_box(img.width, img.height)
        
        # Crop image
        cropped = img.crop(crop_box)
        
        # Resize to target dimensions
        final = cropped.resize((TARGET_WIDTH, TARGET_HEIGHT), Image.Resampling.LANCZOS)
        
        # Save
        output_name = f"page-{page_num + 1:03d}.png"
        output_path = output_dir / output_name
        final.save(output_path, "PNG", quality=95)
        
        print(f"  Page {page_num + 1}/{total_pages}: {output_name} ({img.width}x{img.height} -> cropped -> {TARGET_WIDTH}x{TARGET_HEIGHT})")
    
    doc.close()
    print(f"\nDone! Images saved to: {output_dir}")


def main():
    if len(sys.argv) < 3:
        print("Usage: python crop_pdf.py <pdf_path> <output_dir> [dpi]")
        print("  dpi: optional (default: 150)")
        sys.exit(1)
    
    pdf_path = sys.argv[1]
    output_dir = sys.argv[2]
    dpi = int(sys.argv[3]) if len(sys.argv) > 3 else 150
    
    if not os.path.exists(pdf_path):
        print(f"Error: PDF not found: {pdf_path}")
        sys.exit(1)
    
    extract_and_crop_pdf(pdf_path, output_dir, dpi)


if __name__ == "__main__":
    main()

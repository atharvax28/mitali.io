#!/usr/bin/env python3
"""
PDF to Image Extractor - extracts full pages without cropping
"""

import os
import sys
import fitz
from PIL import Image
from pathlib import Path

TARGET_MAX_width = 1920


def extract_full_pages(pdf_path, output_dir, max_width=1920):
    """Extract PDF pages as full images, resize to fit max width."""
    pdf_path = Path(pdf_path)
    output_dir = Path(output_dir)
    output_dir.mkdir(parents=True, exist_ok=True)

    doc = fitz.open(pdf_path)
    total_pages = len(doc)

    print(f"Processing: {pdf_path.name}")
    print(f"Total pages: {total_pages}")

    for page_num in range(total_pages):
        page = doc[page_num]

        # Render at high DPI for quality
        dpi = 150
        zoom = dpi / 72
        mat = fitz.Matrix(zoom, zoom)
        pix = page.get_pixmap(matrix=mat)

        # Convert to PIL Image
        img = Image.frombytes("RGB", [pix.width, pix.height], pix.samples)

        # Resize if needed to max width
        if img.width > TARGET_MAX_width:
            ratio = TARGET_MAX_width / img.width
            new_height = int(img.height * ratio)
            img = img.resize((TARGET_MAX_width, new_height), Image.Resampling.LANCZOS)

        # Save
        output_name = f"page-{page_num + 1:03d}.png"
        output_path = output_dir / output_name
        img.save(output_path, "PNG", quality=95)

        print(f"  Page {page_num + 1}/{total_pages}: {output_name} ({img.width}x{img.height})")

    doc.close()
    print(f"\nDone! Images saved to: {output_dir}")


if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Usage: python extract_pdf.py <pdf_path> <output_dir>")
        sys.exit(1)

    extract_full_pages(sys.argv[1], sys.argv[2])
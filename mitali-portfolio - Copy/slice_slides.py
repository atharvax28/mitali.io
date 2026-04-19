#!/usr/bin/env python3
"""
Slice tall image into individual slides
"""

import os
from PIL import Image
from pathlib import Path

TARGET_WIDTH = 1920
TARGET_HEIGHT = 1080


def slice_image(input_path, output_dir):
    """Slice a tall image into individual slides."""
    input_path = Path(input_path)
    output_dir = Path(output_dir)
    output_dir.mkdir(parents=True, exist_ok=True)

    img = Image.open(input_path)
    print(f"Input: {img.width}x{img.height}")

    # Calculate slides
    num_slides = img.height // TARGET_HEIGHT
    remainder = img.height % TARGET_HEIGHT

    print(f"Target slide size: {TARGET_WIDTH}x{TARGET_HEIGHT}")
    print(f"Number of slides: {num_slides}")
    print(f"Remainder: {remainder}")

    # If there's a large remainder, add one more slide
    if remainder > 100:
        num_slides += 1
        print(f"Adjusted to: {num_slides}")

    slide_num = 1
    for i in range(num_slides):
        top = i * TARGET_HEIGHT
        bottom = min(top + TARGET_HEIGHT, img.height)

        # Crop slide
        slide = img.crop((0, top, img.width, bottom))

        # Resize to target width keeping aspect
        if slide.width != TARGET_WIDTH:
            ratio = TARGET_WIDTH / slide.width
            new_height = int(slide.height * ratio)
            slide = slide.resize((TARGET_WIDTH, new_height), Image.Resampling.LANCZOS)

        # Save
        output_name = f"page-{slide_num:03d}.png"
        output_path = output_dir / output_name
        slide.save(output_path, "PNG", quality=95)

        print(f"  Slide {slide_num}: {slide.width}x{slide.height} -> {output_name}")
        slide_num += 1

    print(f"\nDone! {slide_num - 1} slides saved to: {output_dir}")


if __name__ == "__main__":
    import sys
    if len(sys.argv) < 3:
        print("Usage: python slice_slides.py <input_image> <output_dir>")
        sys.exit(1)

    slice_image(sys.argv[1], sys.argv[2])
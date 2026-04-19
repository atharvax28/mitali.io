import pdfplumber
import os
import sys

# Fix for Windows encoding
sys.stdout.reconfigure(encoding="utf-8", errors="replace")


def extract_all_text(pdf_path):
    """Extract all text from PDF safely"""
    try:
        with pdfplumber.open(pdf_path) as pdf:
            print(f"=== {os.path.basename(pdf_path)} ({len(pdf.pages)} pages) ===")
            for i, page in enumerate(pdf.pages):
                text = page.extract_text()
                if text:
                    print(f"\n--- Page {i + 1} ---")
                    print(text)
    except Exception as e:
        print(f"Error: {e}")


# Test with portfolio
print("\n" + "=" * 50)
extract_all_text("resources personal/Mitali portfolio 2024 (1).pdf")

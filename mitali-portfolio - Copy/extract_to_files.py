import pdfplumber
import os


def save_pdf_text(pdf_path, output_folder):
    """Extract all text from PDF and save to file"""
    os.makedirs(output_folder, exist_ok=True)
    base_name = os.path.splitext(os.path.basename(pdf_path))[0]
    output_file = os.path.join(output_folder, f"{base_name}.txt")

    full_text = []
    try:
        with pdfplumber.open(pdf_path) as pdf:
            print(f"Processing {pdf_path}: {len(pdf.pages)} pages")
            for i, page in enumerate(pdf.pages):
                text = page.extract_text()
                if text:
                    full_text.append(f"=== Page {i + 1} ===\n")
                    full_text.append(text)
                    full_text.append("\n\n")
    except Exception as e:
        print(f"Error: {e}")
        return

    with open(output_file, "w", encoding="utf-8") as f:
        f.write("".join(full_text))
    print(f"Saved to {output_file}")
    return output_file


# Create output directory
os.makedirs("extracted_content", exist_ok=True)

# Extract resume (most important)
print("Extracting resume...")
save_pdf_text("resources personal/Mitali Borkar 2026 resume.pdf", "extracted_content")

print("\nDone!")

import os
from pdf2image import convert_from_path

def extract_pdf_images(pdf_path, output_folder, project_name):
    """Extract all pages from a PDF as images"""
    os.makedirs(output_folder, exist_ok=True)
    
    images = convert_from_path(pdf_path, dpi=150)
    
    image_paths = []
    for i, image in enumerate(images):
        image_path = os.path.join(output_folder, f"{project_name}-page-{i+1}.png")
        image.save(image_path, "PNG")
        image_paths.append(image_path)
        print(f"Saved: {image_path}")
    
    return image_paths

# Extract images for each project
projects = [
    ("project-b2b-banking.pdf", "b2b-banking"),
    ("project-return-management.pdf", "return-management"),
    ("project-innovation-portal.pdf", "innovation-portal"),
]

public_folder = r"C:\Users\athar\Downloads\mitali-portfolio - Copy\client\public"

for pdf_file, project_name in projects:
    pdf_path = os.path.join(public_folder, pdf_file)
    if os.path.exists(pdf_path):
        output_folder = os.path.join(public_folder, "case-study-images", project_name)
        print(f"\nExtracting {project_name}...")
        extract_pdf_images(pdf_path, output_folder, project_name)
    else:
        print(f"PDF not found: {pdf_path}")
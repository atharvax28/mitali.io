from PIL import Image
import os

def crop_to_dimensions(image_path, target_width=3007, target_height=1920):
    """Crop image to exact dimensions, centering the crop"""
    img = Image.open(image_path)
    
    current_width, current_height = img.size
    
    # Calculate the scaling factor to fit within target dimensions while maintaining aspect ratio
    scale = max(target_width / current_width, target_height / current_height)
    
    # Resize image to fill the target dimensions
    new_width = int(current_width * scale)
    new_height = int(current_height * scale)
    img = img.resize((new_width, new_height), Image.LANCZOS)
    
    # Calculate crop box (center crop)
    left = (new_width - target_width) // 2
    top = (new_height - target_height) // 2
    right = left + target_width
    bottom = top + target_height
    
    img = img.crop((left, top, right, bottom))
    
    img.save(image_path, "PNG", optimize=True)
    print(f"Cropped: {image_path} -> {target_width}x{target_height}")

def process_folder(folder_path, target_width=3007, target_height=1920):
    """Process all PNG images in a folder"""
    for filename in os.listdir(folder_path):
        if filename.lower().endswith('.png'):
            image_path = os.path.join(folder_path, filename)
            try:
                crop_to_dimensions(image_path, target_width, target_height)
            except Exception as e:
                print(f"Error processing {filename}: {e}")

# Process each case study folder
base_path = r"C:\Users\athar\Downloads\mitali-portfolio - Copy\client\public\case-study-images"

projects = ["b2b-banking", "return-management", "innovation-portal"]

for project in projects:
    folder = os.path.join(base_path, project)
    if os.path.exists(folder):
        print(f"\nProcessing {project}...")
        process_folder(folder)
    else:
        print(f"Folder not found: {folder}")
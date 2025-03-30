import os

# Directory where Markdown files are stored
MD_FOLDER = "."
VERSION_HEADER ='''At Zoho, we do not use third-party software to track'''

def clean_markdown_files():
    """Removes the first 413 lines from Markdown files only if they start with a specific version header."""
    files = [f for f in os.listdir(MD_FOLDER) if f.endswith(".md")]

    if not files:
        print("No Markdown files found.")
        return

    for file in files:
        file_path = os.path.join(MD_FOLDER, file)

        with open(file_path, "r", encoding="utf-8") as f:
            lines = f.readlines()

        # Check if file starts with the version header
        if lines and lines[0].replace(" ", "").startswith(VERSION_HEADER.replace(" ", "")):  
            # Remove first 413 lines
            cleaned_content = "".join(lines[489:]) if len(lines) > 413 else ""

            # Overwrite file with cleaned content
            with open(file_path, "w", encoding="utf-8") as f:
                f.write(cleaned_content)

            print(f"✅ Processed: {file} (First 413 lines removed)")
        else:
            print(f"❌ Skipped: {file} (No matching version header)")

# Run the function
clean_markdown_files()

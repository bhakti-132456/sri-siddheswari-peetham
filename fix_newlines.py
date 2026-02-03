
import os

files = [
    r"d:\misc'\sri-siddheswari-peetham-website\lib\translations\te.ts",
    r"d:\misc'\sri-siddheswari-peetham-website\lib\translations\ta.ts",
    r"d:\misc'\sri-siddheswari-peetham-website\lib\translations\hi.ts"
]

for file_path in files:
    if os.path.exists(file_path):
        print(f"Processing {file_path}...")
        with open(file_path, "r", encoding="utf-8") as f:
            content = f.read()
        
        # Replace literal \\n (which appears as \ then \ then n in file) 
        # with \n (which appears as \ then n in file).
        # We use raw strings to be safe.
        
        # r"\\n" matches \ followed by \ followed by n.
        # r"\n" matches \ followed by n.
        
        new_content = content.replace(r"\\n", r"\n")
        
        if content != new_content:
            print(f"Found and replaced backslashed newlines in {file_path}")
            # Write back
            with open(file_path, "w", encoding="utf-8") as f:
                f.write(new_content)
        else:
            print(f"No changes needed for {file_path}")

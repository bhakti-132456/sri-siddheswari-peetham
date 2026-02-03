import re
import os

# Read the translations file
with open('lib/translations.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Extract the content for each language
# Assuming structure: en: { ... }, te: { ... }
# We'll use a regex to capture the content between the start of the language object and its closing brace.
# Since it's nested braces, simple regex might fail if not careful. 
# But the file structure seems consistent.

languages = ['en', 'te', 'hi', 'ta']

for lang in languages:
    # Pattern to find 'lang: {' and match until the next '  },' or end of object
    # This is a simple parser, assuming indentation is consistent (2 spaces)
    
    # Find start index
    start_marker = f'{lang}: {{'
    start_idx = content.find(start_marker)
    
    if start_idx == -1:
        print(f"Could not find start for {lang}")
        continue
        
    # Find the closing brace for this language block
    # We count braces to find the matching closer
    brace_count = 0
    i = start_idx + len(lang) + 2 # skip "lang: {"
    # Initial state is 1 brace open (the one we skipped)
    brace_count = 1
    
    end_idx = -1
    
    while i < len(content):
        if content[i] == '{':
            brace_count += 1
        elif content[i] == '}':
            brace_count -= 1
            if brace_count == 0:
                end_idx = i + 1
                break
        i += 1
        
    if end_idx == -1:
        print(f"Could not find end for {lang}")
        continue
        
    lang_content = content[start_idx:end_idx]
    
    # Strip the key "en: " and the outer braces to get just the inner object content
    # Actually, we want to write "export const en = { ... }"
    
    # Extract just the inner content
    inner_content = lang_content[len(lang)+2 : -1] # strip 'en: {' and '}'
    
    # Create the new file content
    new_file_content = f"""import {{ type Translations }} from "../translations-types"

export const {lang}: Translations = {{{inner_content}}}
"""
    
    with open(f'lib/translations/{lang}.ts', 'w', encoding='utf-8') as out_f:
        out_f.write(new_file_content)
    
    print(f"Created lib/translations/{lang}.ts")


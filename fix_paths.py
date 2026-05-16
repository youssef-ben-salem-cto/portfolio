import os, re

def replace_in_file(filepath):
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()
    
    new_content = re.sub(r'src="/(images/[^"]*)"', r'src="{{< relurl "\1" >}}"', content)
    new_content = re.sub(r'src="/(projects/[^"]*)"', r'src="{{< relurl "\1" >}}"', new_content)
    
    if new_content != content:
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(new_content)
        print(f"Updated {filepath}")

for root, _, files in os.walk("content"):
    for file in files:
        if file.endswith(".md"):
            replace_in_file(os.path.join(root, file))

import base64

with open('/Users/admin/Downloads/portfolio/portfolio-site/content/en/projects/carrefour-tunisie/images/car-tunisie-removebg-preview.png', 'rb') as f:
    b64 = base64.b64encode(f.read()).decode('utf-8')

svg = f"""<svg width="800" height="400" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
  <!-- Dark background to match card -->
  <rect width="800" height="400" fill="#18181b"/>
  <!-- Embed PNG -->
  <image href="data:image/png;base64,{b64}" x="150" y="50" width="500" height="300" preserveAspectRatio="xMidYMid meet" />
</svg>"""

with open('/Users/admin/Downloads/portfolio/portfolio-site/content/en/projects/carrefour-tunisie/images/converted.svg', 'w') as f:
    f.write(svg)

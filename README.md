# Youssef Ben Salem - Executive Portfolio

This is the source code for the professional technology and executive portfolio of Youssef Ben Salem. The site is built utilizing the high-performance Hugo static site generator, beautifully styled with Tailwind CSS, and deeply customized to handle complex enterprise B2B case studies.

## Acknowledgments & Theme Source
This portfolio is built upon the foundation of the excellent **[CareerCanvas Hugo Theme](https://github.com/felipecordero/careercanvas)** originally created by **Felipe Cordero**. Huge thanks to Felipe for providing such a fantastic, clean, and responsive starting template. 

## Customizations & Upgrades
While the core layout relies on the CareerCanvas theme, I have significantly extended and customized the architecture to support deep, interactive technical documentation and a premium UI. Key upgrades include:

* **Interactive Video Galleries:** Built a dedicated, responsive video gallery framework (utilizing Hugo layouts) to demonstrate end-to-end user journeys and system administration flows.
* **Advanced Image Galleries & Modals:** Upgraded the image handling to support responsive masonry grids and lightbox modals for intricate architectural diagrams.
* **Smart SVG & Logo Handling:** Added dynamic theming support for SVGs, allowing company logos on project cards to gracefully transition and remain legible across Light and Dark modes.
* **Responsive Mermaid.js Integration:** Engineered a custom JavaScript wrapper to dynamically render and scale complex Mermaid flowchart diagrams directly within Markdown, preventing text-clipping and mobile overflow issues.
* **B2B Project Architecture Layouts:** Introduced specialized sub-page layouts (e.g., the `tahut-kms` and `we-work-better` layouts) featuring side-by-side bento box grids, allowing for deep-dives into enterprise governance, system scale, and backend architecture.
* **Pill-Badge Tech Stacks:** Added dynamic, color-coded tech stack badges using Hugo slices.

## Local Development & Installation

If you would like to clone this repository to use or explore my customized version of the theme, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/youssef-ben-salem-cto/portfolio.git
   cd portfolio
   ```

2. **Install Node dependencies (for Tailwind CSS & PostCSS):**
   ```bash
   npm install
   ```

3. **Run the local Hugo development server:**
   ```bash
   hugo server -D
   ```
   The site will be available at `http://localhost:1313/` (or the port specified by Hugo in your terminal).

## Automated Deployment (GitHub Actions)

This repository is pre-configured to automatically build and deploy to **GitHub Pages** via GitHub Actions.

To deploy your own version:
1. Ensure your repository is public (or you have a GitHub Pro/Enterprise plan for private Pages).
2. Go to your repository's **Settings** -> **Pages**.
3. Under the **Build and deployment** section, change the **Source** dropdown to **GitHub Actions**.
4. Every time you run `git push` to the `main` branch, the included `.github/workflows/hugo.yaml` workflow will automatically trigger, build the site securely using Hugo, and publish it to your live GitHub Pages URL!

## License
Original theme framework licensed under MIT (Felipe Cordero). Customizations, text content, and project assets are copyright Youssef Ben Salem.

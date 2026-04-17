<!-- Available Scripts
In the project directory, you can run:

npm run start: Runs the app in development mode with live reloading.

npm run compile:sass: Compiles SCSS to CSS once.

npm run watch:sass: Watches SCSS files and compiles them on every change.

npm run build: Compiles and compresses the styles for production.

npm run deploy: Deploys the src folder to GitHub Pages.

Author: Maxim Tsyrulnyk

GitHub: @maximtsyrulnyk


---

### 2. package.json

```json
{
  "name": "layout-museum",
  "version": "1.0.0",
  "description": "Professional Museum landing page layout",
  "main": "index.html",
  "scripts": {
    "start": "browser-sync start --server 'src' --files 'src/**/*.html, src/**/*.scss' --watch",
    "compile:sass": "sass src/styles/main.scss src/styles/main.css",
    "watch:sass": "sass src/styles/main.scss src/styles/main.css --watch",
    "build": "sass src/styles/main.scss dist/css/main.css --style compressed",
    "deploy": "gh-pages -d src"
  },
  "author": "Maxim Tsyrulnyk",
  "license": "MIT",
  "devDependencies": {
    "browser-sync": "^3.0.0",
    "sass": "^1.70.0",
    "gh-pages": "^6.1.1"
  }
} -->

# Museum Landing Page

A professional landing page layout for a museum project, built with a focus on modern web standards and clean architecture.

## Getting Started

Follow these steps to get the project running locally:

### 1. Clone the repository

```bash
git clone [https://github.com/maximtsyrulnyk/landing_page_final_review.git](https://github.com/maximtsyrulnyk/landing_page_final_review.git)

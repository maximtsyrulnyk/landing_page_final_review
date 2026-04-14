# Landing Page - Final Review

This is an adaptive landing page (Landing Page), developed as part of the final stage of training. The project demonstrates mock-up layout skills, the use of BEM methodology, and assembly automation using Gulp.

[**REWIEW DEMO**](https://maximtsyrulnyk.github.io/landing_page_final_review/)

## 🚀 Main characteristics
- **Pixel Perfect**: Maximum design compliance.
- **Adaptability**: Correct display on mobile devices, tablets and desktops (Mobile First).
- **BEM Methodology**: Clear and scalable class structure.
- **Optimization**: Minimized styles and scripts, optimized images (WebP).

## 🛠 Technological stack
- **HTML5**: Semantic markup.
- **SCSS (SASS)**: Using variables, mixins and nesting.
- **BEM**: To organize CSS architecture.
- **Gulp**: Build automation (SCSS compilation, minification, Browsersync).
- **GitHub Pages**: For hosting the demo version.

## 📦 How to run locally
1. Clone the repository:
   ```bash
   git clone [https://github.com/maximtsyrulnyk/landing_page_final_review.git](https://github.com/maximtsyrulnyk/landing_page_final_review.git)

👨‍💻 Author
Maxim Tsyrulnyk — https://github.com/maximtsyrulnyk

---

### 2. `index.html`
(An example structure that matches your stack)

```html
<!DOCTYPE html>
<html lang="uk">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Landing Page | Portfolio</title>
  <link rel="stylesheet" href="css/main.min.css">
</head>
<body class="page">
  <header class="header">
    <div class="container">
      <nav class="nav">
        <a href="#" class="nav__logo">MyLogo</a>
        <ul class="nav__list">
          <li class="nav__item"><a href="#about" class="nav__link">Про нас</a></li>
          <li class="nav__item"><a href="#features" class="nav__link">Переваги</a></li>
          <li class="nav__item"><a href="#contact" class="nav__link">Контакти</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <main class="main">
    <section class="hero">
      <div class="container">
        <h1 class="hero__title">Інноваційні рішення для вашого бізнесу</h1>
        <button class="button button--primary">Дізнатися більше</button>
      </div>
    </section>
  </main>

  <footer class="footer">
    <div class="container">
      <p class="footer__copy">&copy; 2026 Maxim Tsyrulnyk. All rights reserved.</p>
    </div>
  </footer>

  <script src="js/main.min.js"></script>
</body>
</html>

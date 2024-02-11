---
layout: home

title: VitePress
titleTemplate: Vite & Vue Powered Static Site Generator

hero:
  name: VitePress
  text: Vite & Vue Powered Static Site Generator
  tagline: Simple, powerful, and fast. Meet the modern SSG framework you've always wanted.
  actions:
    - theme: brand
      text: Get Started
      link: /guide/getting-started
    - theme: alt
      text: View on GitHub
      link: https://github.com/vuejs/vitepress
  image:
    src: /vitepress-logo-large.webp
    alt: VitePress

features:
  - icon: 📝
    title: Focus on Your Content
    details: Effortlessly create beautiful documentation sites with just markdown.
  - icon: 🚀
    title: Enjoy the Vite DX
    details: Instant server start, lightning fast hot updates, and leverage Vite ecosystem plugins.
  - icon: 🚀
    title: Customize with Vue
    details: Use Vue syntax and components directly in markdown, or build custom themes with Vue.
  - icon: 🚀
    title: Ship Fast Sites
    details: Fast initial load with static HTML, fast post-load navigation with client-side routing.
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
  --vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>

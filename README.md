# Lawrence Olivier N. Tilde — Portfolio Website

A professional portfolio website with a red-tech aesthetic, animations, and a clean organized folder structure.

## 📁 Folder Structure

```
portfolio/
├── index.html              ← Main entry point (open this in browser)
│
├── css/                    ← All stylesheets
│   ├── variables.css       ← CSS custom properties (colors, fonts, spacing)
│   ├── reset.css           ← Global reset, base styles, custom cursor
│   ├── animations.css      ← All keyframes and animation classes
│   ├── buttons.css         ← Button component styles
│   ├── navbar.css          ← Navigation bar styles
│   ├── hero.css            ← Hero/landing section styles
│   └── sections.css        ← About, Skills, Projects, Contact, Footer
│
├── js/
│   └── main.js             ← All JavaScript (cursor, navbar, scroll, animations)
│
├── images/
│   └── profile.jpg         ← ADD YOUR PHOTO HERE (optional)
│
├── components/             ← Standalone HTML component files (reference/reusable)
│   ├── navbar.html
│   ├── hero.html
│   ├── about.html
│   ├── skills.html
│   ├── projects.html
│   └── contact.html
│
└── fonts/                  ← Reserved for local font files if needed
    └── (fonts loaded via Google Fonts CDN in variables.css)
```

## 🚀 How to Use

1. **Open `index.html`** in any browser — no build tools required
2. To add your photo: place `profile.jpg` inside the `images/` folder
3. Update GitHub/LinkedIn links in `index.html` and `components/contact.html`
4. Deploy to GitHub Pages, Netlify, or Vercel

## ✨ Features

- Custom red cursor with follower animation
- Matrix rain canvas background (hero)
- Page loader with progress bar
- Glitch effect on name
- Scroll reveal animations (IntersectionObserver)
- Animated skill progress bars
- Count-up number animation
- Click particle burst effect
- Responsive mobile navigation with hamburger menu
- Smooth scroll navigation
- Contact form with submission feedback
- Periodic glitch trigger on hero text

## 🎨 Theme

- **Primary:** `#E8000D` (Red)
- **Background:** `#080808` (Near Black)
- **Fonts:** Bebas Neue (display), Rajdhani (body), Space Mono (mono)
- **Style:** Tech / Cyberpunk / Developer aesthetic

## 👤 Developer

**Lawrence Olivier N. Tilde**  
Full Stack Developer @ MITSU BYTES  
Zamboanga City, Philippines  
lawrencetilde@gmail.com

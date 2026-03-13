# Lawrence Olivier N. Tilde — Portfolio Website

A professional portfolio website with a red-tech / cyberpunk aesthetic, smooth animations, and a clean component-based folder structure.

---

## 📁 Folder Structure

```
portfolio/
├── index.html                  ← Main entry point — open this in your browser
│
├── components/                 ← One HTML file per section (loaded via fetch)
│   ├── loader.html             ← Page loading screen
│   ├── navbar.html             ← Navigation bar
│   ├── hero.html               ← Landing / hero section
│   ├── about.html              ← About me section
│   ├── education.html          ← Education & OJT timeline
│   ├── skills.html             ← Tech stack + skill bars
│   ├── projects.html           ← Featured projects
│   ├── contact.html            ← Contact info, socials & Gmail CTA
│   └── footer.html             ← Footer
│
├── css/                        ← Stylesheets (link all in index.html <head>)
│   ├── variables.css           ← CSS custom properties (colors, fonts, spacing)
│   ├── reset.css               ← Global reset, base styles, custom cursor
│   ├── animations.css          ← All @keyframes and animation classes
│   ├── buttons.css             ← Button component styles
│   ├── navbar.css              ← Navigation bar styles
│   ├── hero.css                ← Hero section styles
│   ├── sections.css            ← About, Education, Skills, Projects, Contact, Footer
│   └── others.css              ← Profile photo, OJT badge, edu timeline, project cards
│
├── js/                         ← JS split into focused modules (all run via index.html)
│   ├── reveal.js               ← Scroll reveal (IntersectionObserver)
│   ├── loader.js               ← Page loader hide logic
│   ├── cursor.js               ← Custom cursor + follower
│   ├── navbar.js               ← Scroll behavior + hamburger menu
│   ├── matrix.js               ← Matrix rain canvas (hero background)
│   ├── animations.js           ← Skill bars, count-up, glitch, click particles
│   ├── smooth-scroll.js        ← Anchor smooth scrolling
│   └── contact.js              ← (Reference only — logic moved to index.html)
│
└── images/                     ← Place your images here
    ├── profile.jpg             ← Your profile photo
    ├── vintazk-logo.jpg        ← Vintazk Outsourcing logo
    ├── wmsu-logo-final.jpg     ← WMSU logo
    ├── project-facerec.png     ← Screenshot of Face Recognition project
    └── project-clinic.png      ← Screenshot of Clinic Management project
```

---

## ⚠️ Important — How Components Load

This project uses **JavaScript `fetch()`** to load each component into the page.  
This means you **must run it through a local server** — opening `index.html` directly by double-clicking will NOT work.

### Recommended: VS Code Live Server
1. Install the **Live Server** extension in VS Code
2. Right-click `index.html` → **Open with Live Server**
3. Browser opens at `http://127.0.0.1:5500`

### Alternative: Python
```bash
python -m http.server 8000
# Then open http://localhost:8000
```

### Alternative: Node.js
```bash
npx serve .
# Then open the URL shown in terminal
```

---

## 🚀 How to Customize

| What to change | Where |
|---|---|
| Your name, bio, description | `components/about.html` |
| Education & OJT details | `components/education.html` |
| Skills & tech stack | `components/skills.html` |
| Projects | `components/projects.html` |
| Contact info & social links | `components/contact.html` |
| Nav links | `components/navbar.html` |
| Colors, fonts, spacing | `css/variables.css` |
| Profile photo | `images/profile.jpg` |
| EmailJS keys (if re-adding form) | `index.html` `<head>` section |

---

## ✨ Features

- **Custom red cursor** with smooth follower animation
- **Matrix rain canvas** background on hero
- **Page loader** with animated progress bar
- **Glitch effect** on hero name (periodic trigger)
- **Scroll reveal** animations via IntersectionObserver
- **Animated skill progress bars**
- **Count-up number animation** on stats
- **Click particle burst** effect on every click
- **Responsive mobile nav** with hamburger menu
- **Smooth scroll** on all anchor links
- **Gmail CTA button** with rotating message animation — opens Gmail compose directly
- **Social cards** — GitHub, LinkedIn, Facebook, Instagram

---

## 🎨 Theme

| Property | Value |
|---|---|
| Primary color | `#E8000D` (Red) |
| Background | `#080808` (Near Black) |
| Surface | `#0f0f0f` |
| Card | `#141414` |
| Display font | Bebas Neue |
| Body font | Rajdhani |
| Mono font | Space Mono |
| Style | Tech / Cyberpunk / Developer |

---

## 📬 Contact

**Lawrence Olivier N. Tilde** — AKA MITSU  
4th Year BSIT · Western Mindanao State University · CCS  
OJT @ Vintazk Outsourcing · Zamboanga City, Philippines

| Platform | Link |
|---|---|
| Email | lawrencetilde@gmail.com |
| GitHub | github.com/Mitsu5610 |
| LinkedIn | linkedin.com/in/lawrence-olivier-tilde-9a3aa93b0 |
| Facebook | facebook.com/rence8 |
| Instagram | instagram.com/_mitsyyyy |

---

> Built with pure HTML, CSS, and JavaScript — no frameworks, no build tools.
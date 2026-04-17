# 🌐 Monish Shekh — Developer Portfolio (v3)

> A modern, animated developer portfolio built with **React 18**, **Vite 5**, and **Framer Motion**.  
> Live: [monish-dev003.netlify.app](https://monish-dev003.netlify.app)

![React](https://img.shields.io/badge/React-18-61DAFB?style=flat&logo=react) 
![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=flat&logo=vite) 
![Framer Motion](https://img.shields.io/badge/Framer_Motion-10-FF0055?style=flat&logo=framer)
![React Router](https://img.shields.io/badge/React_Router-v6-CA4245?style=flat&logo=reactrouter)

---

## 📸 Preview

| Home | Projects | Certificates |
|------|----------|--------------|
| Animated hero with cycling typewriter | SVG project cards with Coming Soon | 8 real certificates with lightbox |

---

## 🛠️ Tech Stack

| Category | Technologies |
|----------|-------------|
| **Frontend** | React 18, Vite 5, Framer Motion 10 |
| **Routing** | React Router v6 |
| **UI** | Lucide React, React Icons |
| **Fonts** | Syne (headings), DM Sans (body) |
| **Contact** | EmailJS |
| **Deployment** | Netlify |

---

## 📁 Project Structure

```
src/
├── components/
│   └── Navbar.jsx        # Sticky nav with mobile hamburger drawer
├── pages/
│   ├── Home.jsx          # Hero with cycling typewriter animation
│   ├── Projects.jsx      # Project cards with Coming Soon states
│   ├── Skills.jsx        # Floating orb skill network + table
│   ├── Certificates.jsx  # 8 real certificates with lightbox
│   ├── Gallery.jsx       # Tabbed gallery — IndiaSkills, Personal, Achievements
│   ├── Blog.jsx          # Blog posts with read-more toggle + voting
│   ├── Resume.jsx        # Full resume with embedded PDF viewer
│   ├── About.jsx         # About page with education & achievements
│   ├── Contact.jsx       # EmailJS contact form with loading state
│   └── NotFound.jsx      # Animated 404 page with home navigation
└── App.jsx               # Lazy-loaded routes + ScrollToTop
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### 1. Clone the repo
```bash
git clone https://github.com/monish-dev003/monish-portfolio.git
cd monish-portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure environment variables
Create a `.env` file in the root:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```
Get your credentials at [emailjs.com](https://emailjs.com).

### 4. Run development server
```bash
npm run dev
```

### 5. Build for production
```bash
npm run build
```

---

## 🌍 Deployment (Netlify)

This project includes `public/_redirects` for React Router on Netlify:
```
/*  /index.html  200
```

Set the environment variables (`VITE_EMAILJS_*`) in Netlify → Site Settings → Environment Variables.

---

## ✨ Key Features

- 🎨 **Violet/Blue deep-space theme** — consistent across all 10 pages
- 📱 **Mobile-first** — hamburger slide-in drawer for small screens
- ⚡ **Code splitting** — React.lazy + Suspense for all page routes
- 🏅 **Real credentials** — 8 actual certificates, IndiaSkills 2025 gallery
- 📧 **Working contact form** — EmailJS integration with loading state
- 🖼️ **Lightbox gallery** — keyboard navigable with backdrop blur
- 🔤 **Cycling typewriter** — animates through 5 profession titles
- 📜 **Embedded resume** — PDF viewer + download button

---

## 📬 Contact

**Monish Ilyashbhai Shekh**  
📍 Anand, Gujarat, India  
✉️ monishshekh03@gmail.com  
💻 [github.com/monish-dev003](https://github.com/monish-dev003)  
💼 [linkedin.com/in/monish-dev003](https://linkedin.com/in/monish-dev003)

---

*Built with ❤️ using React + Framer Motion*

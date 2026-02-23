# Ketan Vardekar – Portfolio Website

A modern, responsive portfolio built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**.

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# 1. Extract / clone the portfolio folder
cd ketan-portfolio

# 2. Install dependencies
npm install

# 3. Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Folder Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout (Navbar, Footer, theme)
│   ├── page.tsx            # Home / Landing page
│   ├── globals.css         # Global styles + CSS variables
│   ├── about/
│   │   └── page.tsx        # About page
│   ├── experience/
│   │   └── page.tsx        # Work experience timeline
│   ├── projects/
│   │   └── page.tsx        # Projects showcase
│   ├── skills/
│   │   └── page.tsx        # Skills with animated bars
│   ├── education/
│   │   └── page.tsx        # Education & certifications
│   └── contact/
│       └── page.tsx        # Contact form + info
└── lib/
    └── data.ts             # ✅ All resume data lives here
```

---

## 🎨 Tech Stack

| Tool | Purpose |
|------|---------|
| Next.js 15 (App Router) | Framework |
| TypeScript | Type safety |
| Tailwind CSS | Utility styling |
| CSS Custom Properties | Theming |
| Lucide React | Icons |
| Syne + DM Sans fonts | Typography |

---

## ✏️ Customization

### Update your data
All personal information is in one file:
```
src/lib/data.ts
```
Edit the `portfolioData` object to update your info, experience, projects, skills, etc.

### Add your resume PDF
Place your `resume.pdf` in the `public/` folder.
The download button on the homepage will automatically point to it.

### Change the color theme
Edit the CSS variables in `src/app/globals.css`:
```css
:root {
  --accent: #00D4FF;   /* Change this to any color */
}
```

### Dark / Light mode
The theme toggle is in the Navbar (top right). It persists via `localStorage`.

---

## 📦 Build for Production

```bash
npm run build
npm start
```

---

## 🌐 Deploy

**Vercel (recommended)**
```bash
npx vercel
```

**Other platforms**: Works with any Node.js host (Railway, Render, Netlify, etc.)

---

## 📄 Pages

| Route | Description |
|-------|-------------|
| `/` | Landing page with hero, stats, highlights |
| `/about` | Profile, summary, soft skills, certifications |
| `/experience` | Timeline of work history |
| `/projects` | Project cards with tech stack |
| `/skills` | Animated skill bars by category |
| `/education` | Degree, CGPA, certifications |
| `/contact` | Contact form + social links |

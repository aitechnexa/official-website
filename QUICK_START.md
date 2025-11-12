# 🚀 Quick Start Guide - AiTech Nexa Landing Page

## ⚡ Get Started in 3 Steps

### 1️⃣ Install Dependencies
```bash
npm install
```

### 2️⃣ Start Development Server
```bash
npm run dev
```

### 3️⃣ Open in Browser
Navigate to: `http://localhost:5173` (or the port shown in terminal)

---

## 📝 First Customizations

### Update Company Information
**File**: `src/data/content.js`

```javascript
export const companyInfo = {
  name: "Your Company Name",
  tagline: "Your Tagline",
  email: "your@email.com",
  phone: "+1 (555) 123-4567",
  address: "Your Address",
  // ... update social links
};
```

### Change Brand Colors
**File**: `tailwind.config.js`

```javascript
colors: {
  brand: {
    orange: '#YOUR_COLOR',
    yellow: '#YOUR_COLOR',
    purple: '#YOUR_COLOR',
  },
}
```

### Update Services
**File**: `src/data/content.js`

```javascript
export const services = [
  {
    id: 1,
    title: "Your Service",
    description: "Service description",
    icon: "Brain" // Choose from: Brain, Cloud, Code, Zap, Smartphone, BarChart
  },
  // Add more services...
];
```

---

## 🎯 Common Tasks

### Add a New Project
**File**: `src/data/content.js`

```javascript
export const projects = [
  // ... existing projects
  {
    id: 5,
    title: "New Project",
    description: "Project description",
    category: "Category",
    image: "https://your-image-url.com/image.jpg"
  }
];
```

### Add a Testimonial
**File**: `src/data/content.js`

```javascript
export const testimonials = [
  // ... existing testimonials
  {
    id: 4,
    name: "Client Name",
    position: "Job Title",
    company: "Company",
    feedback: "Testimonial text",
    rating: 5
  }
];
```

### Add a Technology
**File**: `src/data/content.js`

```javascript
export const technologies = [
  // ... existing technologies
  { name: "New Tech", icon: "🚀" }
];
```

---

## 🎨 Styling Tips

### Use Brand Colors in Components
```javascript
// Orange
className="text-brand-orange bg-brand-orange border-brand-orange"

// Yellow
className="text-brand-yellow bg-brand-yellow border-brand-yellow"

// Purple
className="text-brand-purple bg-brand-purple border-brand-purple"
```

### Gradient Text (Pre-defined)
```javascript
className="gradient-text"
```

### Gradient Background (Pre-defined)
```javascript
className="gradient-bg"
```

---

## 📦 Build for Production

### Create Production Build
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Output Location
Built files will be in: `dist/`

---

## 🔍 Project Structure Overview

```
src/
├── components/       # All React components
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Services.jsx
│   ├── Portfolio.jsx
│   ├── Technologies.jsx
│   ├── Testimonials.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── data/
│   └── content.js   # All content and data
├── App.jsx          # Main app component
├── main.jsx         # Entry point
└── index.css        # Global styles
```

---

## 🛠️ Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

---

## 🎭 Animation Examples

### Fade In on Scroll
```javascript
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const ref = useRef(null);
const isInView = useInView(ref, { once: true });

<motion.div
  ref={ref}
  initial={{ opacity: 0, y: 30 }}
  animate={isInView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.6 }}
>
  Content
</motion.div>
```

### Hover Animation
```javascript
<motion.div
  whileHover={{ scale: 1.05, y: -10 }}
  whileTap={{ scale: 0.95 }}
>
  Hover me
</motion.div>
```

---

## 🌐 Deployment Options

### Vercel (Recommended)
1. Push to GitHub
2. Import project in Vercel
3. Deploy automatically

### Netlify
1. Run `npm run build`
2. Drag `dist/` folder to Netlify
3. Done!

### GitHub Pages
```bash
npm run build
# Deploy dist/ folder to gh-pages branch
```

---

## 📞 Need Help?

### Check Documentation
- `README_PROJECT.md` - Full project documentation
- `COMPONENT_GUIDE.md` - Detailed component guide

### Common Issues

**Port already in use?**
- Vite will automatically use next available port
- Or specify port: `npm run dev -- --port 3000`

**Styles not updating?**
- Restart dev server: `Ctrl+C` then `npm run dev`
- Clear browser cache

**Build errors?**
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again

---

## ✅ Checklist for Going Live

- [ ] Update all content in `content.js`
- [ ] Replace placeholder images
- [ ] Update company information
- [ ] Test all links
- [ ] Test contact form
- [ ] Check mobile responsiveness
- [ ] Update meta tags in `index.html`
- [ ] Add favicon
- [ ] Test in different browsers
- [ ] Run `npm run build`
- [ ] Deploy to hosting service

---

## 🎉 You're All Set!

Your modern company profile landing page is ready to go. Start customizing and make it your own!

**Happy Coding! 🚀**

---

**Project**: AiTech Nexa Landing Page  
**Version**: 1.0.0  
**Last Updated**: 2025

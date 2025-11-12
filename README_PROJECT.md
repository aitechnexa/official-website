# AiTech Nexa - Company Profile Landing Page

A modern, professional company profile landing page built with React, Vite, and Tailwind CSS. Features smooth animations, responsive design, and a futuristic tech-oriented aesthetic.

## 🚀 Features

- **Modern Tech Stack**: React 19 + Vite + Tailwind CSS
- **Smooth Animations**: Framer Motion for elegant transitions and scroll animations
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **Dark Mode Design**: Sleek black background with orange, yellow, and purple accents
- **Component-Based Architecture**: Modular, reusable React components
- **Sticky Navigation**: Smooth scrolling navigation bar
- **Interactive Sections**: Hover effects, transitions, and micro-interactions
- **SEO Optimized**: Proper meta tags and semantic HTML

## 📦 Project Structure

```
companyProfile/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Sticky navigation with mobile menu
│   │   ├── Hero.jsx             # Hero section with animated background
│   │   ├── About.jsx            # About section with mission/vision cards
│   │   ├── Services.jsx         # Services grid with icons
│   │   ├── Portfolio.jsx        # Project showcase with images
│   │   ├── Technologies.jsx     # Technology stack display
│   │   ├── Testimonials.jsx     # Client testimonials carousel
│   │   ├── Contact.jsx          # Contact form and information
│   │   └── Footer.jsx           # Footer with links and social media
│   ├── data/
│   │   └── content.js           # All content and data
│   ├── App.jsx                  # Main app component
│   ├── main.jsx                 # Entry point
│   └── index.css                # Global styles and Tailwind config
├── index.html
├── tailwind.config.js           # Tailwind configuration with brand colors
├── package.json
└── README_PROJECT.md

```

## 🎨 Brand Colors

- **Black**: `#000000` - Base background
- **Orange**: `#ff7a00` - Primary accent
- **Yellow**: `#ffd700` - Secondary accent
- **Purple**: `#7e22ce` - Tertiary accent

## 🛠️ Installation & Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

4. **Preview Production Build**
   ```bash
   npm run preview
   ```

## 📄 Page Sections

### 1. Navigation Bar
- Sticky header with smooth scroll
- Mobile-responsive hamburger menu
- Animated logo and links
- CTA button

### 2. Hero Section
- Animated particle background
- Compelling headline and subtext
- Dual CTA buttons
- Company statistics

### 3. About Us
- Company introduction
- Mission, Vision, and Approach cards
- Key statistics and achievements

### 4. Services
- 6 service cards with icons
- Hover animations
- Service descriptions
- CTA to discuss projects

### 5. Portfolio
- Project showcase with images
- Category badges
- Project descriptions
- View case study links

### 6. Technologies
- Technology stack grid
- Icon-based display
- Hover effects
- "Always Evolving" message

### 7. Testimonials
- Carousel with client feedback
- Star ratings
- Client information
- Navigation controls
- Grid view of all testimonials

### 8. Contact
- Contact form (name, email, message)
- Company contact information
- Interactive contact cards
- Map placeholder

### 9. Footer
- Company information
- Quick links (Company, Resources, Legal)
- Social media icons
- Back to top button
- Copyright notice

## 🎯 Customization

### Update Content
Edit `src/data/content.js` to modify:
- Company information
- Services
- Projects
- Technologies
- Testimonials

### Modify Colors
Edit `tailwind.config.js` to change brand colors:
```javascript
colors: {
  brand: {
    black: '#000000',
    orange: '#ff7a00',
    yellow: '#ffd700',
    purple: '#7e22ce',
  },
}
```

### Add New Sections
1. Create a new component in `src/components/`
2. Import and add to `src/App.jsx`
3. Update navigation links in `Navbar.jsx`

## 🔧 Technologies Used

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 Best Practices Implemented

- ✅ Component-based architecture
- ✅ Semantic HTML
- ✅ Accessible navigation
- ✅ Optimized images
- ✅ Smooth animations
- ✅ Mobile-first design
- ✅ Clean code structure
- ✅ Reusable components
- ✅ SEO optimization

## 🚀 Deployment

This project can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Any static hosting service

## 📞 Support

For questions or support, contact:
- Email: contact@aitechnexxa.com
- Phone: +1 (555) 123-4567

## 📄 License

© 2025 AiTech Nexa — All Rights Reserved

---

**Built with ❤️ by AiTech Nexa**

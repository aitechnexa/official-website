# Component Guide - AiTech Nexa Landing Page

## 📋 Quick Reference

### Component Overview

| Component | File | Purpose | Key Features |
|-----------|------|---------|--------------|
| **Navbar** | `Navbar.jsx` | Navigation | Sticky header, mobile menu, smooth scroll |
| **Hero** | `Hero.jsx` | Landing section | Animated background, CTAs, stats |
| **About** | `About.jsx` | Company info | Mission/vision cards, stats |
| **Services** | `Services.jsx` | Service offerings | 6 service cards with icons |
| **Portfolio** | `Portfolio.jsx` | Project showcase | Image cards, categories |
| **Technologies** | `Technologies.jsx` | Tech stack | Icon grid, hover effects |
| **Testimonials** | `Testimonials.jsx` | Client feedback | Carousel, ratings |
| **Contact** | `Contact.jsx` | Contact form | Form, contact info, map |
| **Footer** | `Footer.jsx` | Site footer | Links, social media |

---

## 🎨 Component Details

### 1. Navbar Component
**Location**: `src/components/Navbar.jsx`

**Features**:
- Sticky positioning on scroll
- Background blur effect when scrolled
- Mobile hamburger menu with animations
- Smooth scroll to sections
- Gradient CTA button

**Props**: None (self-contained)

**State**:
- `isScrolled` - Tracks scroll position
- `isMobileMenuOpen` - Controls mobile menu visibility

**Customization**:
```javascript
// Update navigation links
const navLinks = [
  { name: 'Home', href: '#home' },
  // Add more links here
];
```

---

### 2. Hero Component
**Location**: `src/components/Hero.jsx`

**Features**:
- Animated particle background (50 floating dots)
- Gradient text effects
- Dual CTA buttons
- Company statistics grid
- Scroll indicator animation

**Animations**:
- Fade in on load
- Staggered element appearance
- Floating particles
- Bouncing scroll indicator

**Customization**:
```javascript
// Update headline
<h1>Your Custom Headline</h1>

// Update stats
const stats = [
  { number: '500+', label: 'Projects' },
  // Modify as needed
];
```

---

### 3. About Component
**Location**: `src/components/About.jsx`

**Features**:
- Company introduction text
- 3 feature cards (Mission, Vision, Approach)
- Icon-based design
- Statistics section
- Scroll-triggered animations

**Data Source**: `src/data/content.js` → `aboutData`

**Card Structure**:
```javascript
{
  icon: <IconComponent />,
  title: "Card Title",
  description: "Card description",
  color: "brand-orange" // or brand-purple, brand-yellow
}
```

---

### 4. Services Component
**Location**: `src/components/Services.jsx`

**Features**:
- 6 service cards in responsive grid
- Icon mapping system
- Hover animations (lift effect)
- Background glow on hover
- CTA button at bottom

**Data Source**: `src/data/content.js` → `services`

**Icon Mapping**:
```javascript
const iconMap = {
  Brain: Brain,
  Cloud: Cloud,
  Code: Code,
  Zap: Zap,
  Smartphone: Smartphone,
  BarChart: BarChart,
};
```

**Adding New Service**:
1. Add to `content.js`:
```javascript
{
  id: 7,
  title: "New Service",
  description: "Service description",
  icon: "IconName" // Must match iconMap
}
```
2. Import icon in Services.jsx
3. Add to iconMap

---

### 5. Portfolio Component
**Location**: `src/components/Portfolio.jsx`

**Features**:
- Project cards with images
- Category badges
- Image zoom on hover
- Gradient overlay
- External link buttons

**Data Source**: `src/data/content.js` → `projects`

**Image Requirements**:
- Recommended size: 800x600px
- Format: JPG, PNG, WebP
- Currently using Unsplash placeholder images

**Project Structure**:
```javascript
{
  id: 1,
  title: "Project Name",
  description: "Project description",
  category: "Category Name",
  image: "https://image-url.com/image.jpg"
}
```

---

### 6. Technologies Component
**Location**: `src/components/Technologies.jsx`

**Features**:
- Responsive grid layout (2-6 columns)
- Emoji/icon display
- Hover scale and rotate effects
- "Always Evolving" info section

**Data Source**: `src/data/content.js` → `technologies`

**Adding Technology**:
```javascript
{ name: "Technology Name", icon: "🔧" }
```

**Grid Breakpoints**:
- Mobile: 2 columns
- Small: 3 columns
- Medium: 4 columns
- Large: 6 columns

---

### 7. Testimonials Component
**Location**: `src/components/Testimonials.jsx`

**Features**:
- Carousel with navigation
- Star ratings
- Client avatars (initials)
- Dot indicators
- Grid view of all testimonials

**Data Source**: `src/data/content.js` → `testimonials`

**State**:
- `currentIndex` - Current testimonial in carousel

**Functions**:
- `nextTestimonial()` - Navigate to next
- `prevTestimonial()` - Navigate to previous

**Testimonial Structure**:
```javascript
{
  id: 1,
  name: "Client Name",
  position: "Job Title",
  company: "Company Name",
  feedback: "Testimonial text",
  rating: 5 // 1-5 stars
}
```

---

### 8. Contact Component
**Location**: `src/components/Contact.jsx`

**Features**:
- Contact form (name, email, message)
- Form validation (HTML5)
- Contact information cards
- Map placeholder
- Hover animations on cards

**Data Source**: `src/data/content.js` → `companyInfo`

**Form State**:
```javascript
{
  name: '',
  email: '',
  message: ''
}
```

**Form Submission**:
Currently logs to console. To integrate with backend:
```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  // Add your API call here
  await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(formData)
  });
};
```

---

### 9. Footer Component
**Location**: `src/components/Footer.jsx`

**Features**:
- Company information
- Link columns (Company, Resources, Legal)
- Social media icons
- Back to top button
- Gradient bottom bar

**Data Source**: `src/data/content.js` → `companyInfo`

**Link Structure**:
```javascript
const footerLinks = {
  company: [
    { name: 'Link Name', href: '#section' }
  ]
};
```

**Social Links**:
```javascript
const socialLinks = [
  { icon: IconComponent, href: 'url', label: 'Platform' }
];
```

---

## 🎭 Animation Patterns

### Framer Motion Usage

**Fade In on Scroll**:
```javascript
const ref = useRef(null);
const isInView = useInView(ref, { once: true, margin: "-100px" });

<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={isInView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.6 }}
>
```

**Hover Effects**:
```javascript
<motion.div
  whileHover={{ y: -10, scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
```

**Staggered Children**:
```javascript
{items.map((item, index) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.6, delay: index * 0.1 }}
  >
))}
```

---

## 🎨 Styling Patterns

### Tailwind Classes

**Gradient Text**:
```javascript
className="gradient-text" // Defined in index.css
// or
className="bg-gradient-to-r from-brand-orange via-brand-yellow to-brand-purple bg-clip-text text-transparent"
```

**Gradient Background**:
```javascript
className="gradient-bg" // Defined in index.css
// or
className="bg-gradient-to-br from-brand-orange/20 via-brand-purple/20 to-brand-yellow/20"
```

**Card Style**:
```javascript
className="bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-brand-orange/50 transition-all duration-300"
```

**Button Style**:
```javascript
className="bg-gradient-to-r from-brand-orange to-brand-yellow px-8 py-4 rounded-full text-black font-bold hover:shadow-2xl hover:shadow-brand-orange/50 transition-all duration-300"
```

---

## 📊 Data Management

### Content File Structure
**Location**: `src/data/content.js`

**Exports**:
- `companyInfo` - Company details and contact
- `aboutData` - About section content
- `services` - Service offerings array
- `projects` - Portfolio items array
- `technologies` - Tech stack array
- `testimonials` - Client testimonials array

**Updating Content**:
1. Open `src/data/content.js`
2. Modify the relevant export
3. Save - changes will hot-reload

---

## 🔧 Common Customizations

### Change Brand Colors
**File**: `tailwind.config.js`
```javascript
colors: {
  brand: {
    black: '#000000',
    orange: '#ff7a00',    // Change these
    yellow: '#ffd700',
    purple: '#7e22ce',
  },
}
```

### Add New Section
1. Create component: `src/components/NewSection.jsx`
2. Import in `App.jsx`
3. Add to render: `<NewSection />`
4. Add nav link in `Navbar.jsx`

### Modify Animations
**Speed**: Change `duration` in transition
**Delay**: Change `delay` in transition
**Distance**: Change `y` or `x` values in initial/animate

### Update Images
Replace Unsplash URLs in `content.js` with your own images:
```javascript
image: "/path/to/your/image.jpg"
```

---

## 🐛 Troubleshooting

### Component Not Rendering
- Check import path in App.jsx
- Verify component export (default vs named)
- Check console for errors

### Animations Not Working
- Ensure Framer Motion is installed
- Check `isInView` hook setup
- Verify `ref` is attached to parent element

### Styles Not Applying
- Run `npm run dev` to restart server
- Check Tailwind class names
- Verify custom classes in index.css

### Images Not Loading
- Check image URLs
- Verify public folder structure
- Check network tab in DevTools

---

## 📚 Additional Resources

- [Framer Motion Docs](https://www.framer.com/motion/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Lucide Icons](https://lucide.dev/)
- [React Docs](https://react.dev/)

---

**Last Updated**: 2025
**Version**: 1.0.0

# FIND - Quick Start Guide

## 🚀 Get Started in 5 Minutes

### 1. Start Development Server
```bash
npm run dev
```
Opens at `http://localhost:5174`

### 2. Add Building Image
Place your building image at:
```
public/models/building.png
```

Then update `src/components/BuildingScene/BuildingScene.jsx`:
```jsx
<img 
  src="/models/building.png" 
  alt="Hero Building"
  className="w-full h-full object-cover rounded-lg"
/>
```

### 3. Customize Content

**Hero Section** - `src/pages/Home.jsx`
```jsx
<h1 className="text-hero">Your Custom Headline</h1>
```

**Why Find Features** - `src/components/WhyFind/WhyFind.jsx`
```javascript
const features = [
  {
    title: 'Your Feature',
    description: 'Your description',
    icon: '🎯',
  },
];
```

**Navigation Menu** - `src/components/Navbar/Navbar.jsx`
```javascript
const menuItems = [
  { label: 'Your Link', href: '#your-section' },
];
```

### 4. Build for Production
```bash
npm run build
```
Output: `dist/` folder

---

## 📋 File Structure Reference

```
src/
├── animations/
│   ├── heroTimeline.js       # Hero scroll animations
│   ├── revealTimeline.js     # Reveal & fog effects
│   └── gsapUtils.js          # Reusable animation utilities
├── components/
│   ├── Navbar/               # Navigation
│   ├── Hero/                 # Hero section
│   ├── BuildingScene/        # Building image
│   ├── CloudLayer/           # Cloud parallax
│   ├── FindReveal/           # Typography reveal
│   ├── FogTransition/        # Transition effect
│   ├── WhyFind/              # Features section
│   └── CTASection/           # Call-to-action
├── hooks/
│   ├── useLenis.js           # Smooth scroll
│   ├── useMouseParallax.js   # Mouse parallax
│   └── useGSAPContext.js     # Animation cleanup
├── pages/
│   └── Home.jsx              # Main page
├── App.jsx
├── main.jsx
└── index.css                 # Global styles

Configuration Files:
├── tailwind.config.js        # Tailwind CSS config
├── postcss.config.js         # PostCSS config
├── vite.config.js            # Vite build config
└── package.json              # Dependencies

Documentation:
├── IMPLEMENTATION_GUIDE.md   # Complete guide
├── ASSET_SETUP.md            # Asset integration
├── PERFORMANCE_GUIDE.md      # Performance tips
└── COMPONENT_API.md          # Component reference
```

---

## 🎨 Customization Quick Links

### Colors
Edit color palette in `tailwind.config.js`:
```javascript
colors: {
  dark: {
    950: '#0a0e27', // Change background color
    // ... more colors
  }
}
```

### Fonts
Edit in `index.html` and `tailwind.config.js`:
```javascript
fontFamily: {
  display: ['Your Font', 'fallback'],
  sans: ['Your Font', 'fallback'],
}
```

### Animation Speed
Edit in component animation files:
```javascript
duration: 0.8,     // Faster
scrub: 0.5,        // Tighter connection
```

### Section Content
- Hero: `src/pages/Home.jsx`
- Features: `src/components/WhyFind/WhyFind.jsx`
- CTA: `src/components/CTASection/CTASection.jsx`

---

## 🔧 Common Tasks

### Add New Section
1. Create component in `src/components/NewSection/`
2. Import and add to `src/pages/Home.jsx`
3. Add animation in `src/animations/` if needed

### Change Colors
1. Update CSS custom properties in `src/index.css`
2. Update Tailwind config `tailwind.config.js`
3. Edit component classes

### Optimize Images
```bash
# Compress image
npx imagemin building.png --out-dir=public/models/

# Or use online tool: tinypng.com
```

### Debug Animations
Add `markers: true` to ScrollTrigger:
```javascript
scrollTrigger: {
  // ...
  markers: true,
}
```

---

## 📱 Responsive Testing

**Mobile:** `640px` and below
**Tablet:** `641px - 1024px`
**Desktop:** `1025px` and up

All components are mobile-first responsive using Tailwind breakpoints.

---

## ⚡ Performance Checklist

- ✅ GPU-accelerated animations
- ✅ Lazy loading setup
- ✅ Smooth scroll with Lenis
- ✅ Code splitting with Vite
- ✅ Minified production build
- ✅ Responsive images

---

## 🚢 Deployment

### Build
```bash
npm run build
```

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm install -g netlify-cli
netlify deploy
```

### General Hosting
Upload `dist/` folder to any static hosting.

---

## 📚 Need Help?

- **IMPLEMENTATION_GUIDE.md** - Full feature reference
- **COMPONENT_API.md** - Component prop documentation
- **PERFORMANCE_GUIDE.md** - Optimization techniques
- **ASSET_SETUP.md** - Image and asset integration

---

## 🎯 Next Steps

1. ✅ Start dev server: `npm run dev`
2. ✅ Add building image to `public/models/building.png`
3. ✅ Update building image path in `BuildingScene.jsx`
4. ✅ Customize text and colors
5. ✅ Test on mobile and desktop
6. ✅ Build for production: `npm run build`
7. ✅ Deploy!

---

## 💡 Pro Tips

- Use Chrome DevTools to inspect animations
- Test on throttled network (DevTools) for real-world performance
- Use Lighthouse to check performance score
- Monitor Core Web Vitals in Production
- Optimize images before deployment

---

**Ready to launch? Happy coding! 🚀**

For detailed documentation, see [IMPLEMENTATION_GUIDE.md](./IMPLEMENTATION_GUIDE.md)

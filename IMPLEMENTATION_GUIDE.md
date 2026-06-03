# FIND - Premium Cinematic Real Estate Landing Page

A world-class, production-ready landing page built with React, Vite, Tailwind CSS, and GSAP. Featuring smooth scroll animations, parallax effects, and immersive design.

## ✨ Features

- **Cinematic Hero Section** - Fullscreen hero with dynamic parallax clouds and building scene
- **Scroll-Triggered Animations** - GSAP ScrollTrigger for smooth, GPU-accelerated animations
- **Smooth Scroll** - Lenis integration for buttery-smooth scrolling (Apple-level smoothness)
- **Responsive Design** - Mobile-first, fully responsive across all devices
- **Performance Optimized** - Lazy loading, GPU acceleration, requestAnimationFrame optimization
- **Enterprise Architecture** - Scalable, reusable components with clean separation of concerns
- **Accessibility** - WCAG compliance, reduced motion support, semantic HTML

## 🏗️ Project Structure

```
src/
├── animations/
│   ├── heroTimeline.js       # Hero scroll timeline
│   ├── revealTimeline.js     # Find reveal & fog transition
│   └── gsapUtils.js          # GSAP utility functions
├── components/
│   ├── Navbar/               # Navigation component
│   ├── Hero/                 # Hero section & sky background
│   ├── BuildingScene/        # Building image with parallax
│   ├── CloudLayer/           # Cloud parallax layers
│   ├── FindReveal/           # Giant typography reveal
│   ├── FogTransition/        # Atmospheric transition
│   ├── WhyFind/              # Features section
│   └── CTASection/           # Call-to-action
├── hooks/
│   ├── useLenis.js           # Smooth scroll integration
│   ├── useMouseParallax.js   # Mouse parallax effects
│   └── useGSAPContext.js     # GSAP cleanup & preferences
├── pages/
│   └── Home.jsx              # Main landing page
├── App.jsx
├── main.jsx
└── index.css                 # Global styles & Tailwind
```

## 🚀 Quick Start

### Installation

```bash
# Install dependencies
npm install

# Install additional peer dependencies if needed
npm install @gsap/react

# Start development server
npm run dev

# Build for production
npm run build
```

### Development Server

```bash
npm run dev
```

Opens at `http://localhost:5173`

## 📦 Dependencies

### Core

- **react** - UI library
- **react-dom** - DOM rendering
- **vite** - Build tool

### Animations

- **gsap** - Animation library
- **gsap/ScrollTrigger** - Scroll-based animations
- **@gsap/react** - React integration

### Scroll

- **@studio-freight/lenis** - Smooth scroll

### Styling

- **tailwindcss** - Utility-first CSS
- **postcss** - CSS processing
- **autoprefixer** - Vendor prefixes

### Utilities

- **lucide-react** - Icon library (optional)

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to customize the dark color palette:

```javascript
colors: {
  dark: {
    50: '#f9fafb',
    // ... customize colors
    950: '#0a0e27',
  }
}
```

### Typography

Modify font sizes and families in Tailwind config:

```javascript
fontSize: {
  hero: 'clamp(2.5rem, 8vw, 6rem)',
  heading: 'clamp(1.875rem, 5vw, 3.75rem)',
}
```

### Animation Timing

Update animation durations in component files:

- `heroTimeline.js` - Hero scroll animations
- `revealTimeline.js` - Reveal animations
- Individual component files - Stagger timing

### Building Image

Replace the placeholder in `BuildingScene.jsx`:

```jsx
<img
  src="/models/building.png"
  alt="Hero Building"
  className="w-full h-full object-cover"
/>
```

Add your building image to `/public/models/building.png`

## 🎬 Animation Architecture

### Hero Timeline (Section 1-2)

- Building scales: 1 → 1.35
- Building moves upward: 0 → -100px
- Clouds move at different parallax speeds
- Text fades out progressively

### Find Reveal (Section 3)

- Outline text transforms to filled
- Building image clip-path reveals
- Text scales and repositions

### Fog Transition (Section 4)

- Smooth atmospheric wipe
- Gradient overlay animation
- Soft, organic reveal

### Why Find Section (Section 5)

- Staggered card animations
- Heading fade-in and slide
- Hover effects on features

## 🔧 Advanced Usage

### Creating New Animated Sections

```jsx
import { useGSAPContext } from "../hooks/useGSAPContext";
import gsap from "gsap";

const MySection = () => {
  const containerRef = useRef(null);
  useGSAPContext(); // Ensures cleanup

  useEffect(() => {
    gsap.to(containerRef.current, {
      // Animation config
    });
  }, []);

  return <section ref={containerRef}>...</section>;
};
```

### Adding Mouse Parallax

```jsx
import { useMouseParallax } from "../hooks/useMouseParallax";

const MyComponent = () => {
  const { elementRef } = useMouseParallax(0.15); // intensity
  return <div ref={elementRef}>Content</div>;
};
```

### Smooth Scroll Navigation

```jsx
import { scrollToElement, scrollToPosition } from "../hooks/useLenis";

// Scroll to element
scrollToElement(document.getElementById("section"), offset);

// Scroll to position
scrollToPosition(1000, duration);
```

## 🎯 Performance Optimizations

1. **GPU Acceleration** - `transform` and `opacity` only
2. **RequestAnimationFrame** - Smooth 60fps updates
3. **Lazy Loading** - Images load on demand
4. **Code Splitting** - Vite handles automatic splitting
5. **ScrollTrigger Cleanup** - Prevents memory leaks
6. **Reduced Motion** - Respects user preferences
7. **CSS Containment** - Modern browser optimization
8. **Will-change Classes** - Strategic GPU promotion

## 📱 Responsive Breakpoints

```
- sm: 640px
- md: 768px
- lg: 1024px
- xl: 1280px
- 2xl: 1536px
```

## ♿ Accessibility

- ✅ Semantic HTML
- ✅ ARIA labels
- ✅ Keyboard navigation
- ✅ Reduced motion support
- ✅ Color contrast compliance
- ✅ Focus visible states

## 🔍 SEO Best Practices

- Meta tags in `index.html`
- Semantic structure
- Open Graph support
- Image optimization
- Mobile-friendly

## 🚢 Production Deployment

```bash
# Build optimized production bundle
npm run build

# Preview production build locally
npm run preview
```

Deploy the `dist/` folder to your hosting platform.

## 🐛 Debugging

### GSAP Timeline Debugging

Set `markers: true` in ScrollTrigger config:

```javascript
scrollTrigger: {
  trigger: element,
  markers: true, // Shows debug markers
}
```

### Performance Profiling

Use Chrome DevTools:

1. Performance tab → Record
2. Scroll through page
3. Analyze FPS and animations

## 📚 Resources

- [GSAP Documentation](https://greensock.com/docs/)
- [ScrollTrigger Docs](https://greensock.com/docs/v3/Plugins/ScrollTrigger)
- [Lenis Smooth Scroll](https://github.com/studio-freight/lenis)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Documentation](https://react.dev/)

## 📄 License

Premium - Commercial Use Included

## 🤝 Support

For issues, questions, or feature requests, please contact support.

---

**Built with ❤️ by Frontend Engineering Team**

_Enterprise-grade. Production-ready. Awwwards-worthy._

# Performance & Configuration Guide

## GSAP Configuration

### ScrollTrigger Setup

All ScrollTrigger instances are configured with:

```javascript
const scrollTrigger = {
  trigger: element, // Trigger element
  start: "top top", // Start position
  end: "400% top", // End position for scrub
  scrub: 1, // Smooth scrubbing (1 second lag)
  markers: false, // Debug markers (set true for debugging)
  id: "unique-id", // Identifier for cleanup
};
```

**Performance Tips:**

- Keep `scrub` between 0.5-1.5 for smoothness
- Use `scrub: true` for tighter connection
- Increase for smoother but heavier animations

### Context Cleanup

All components use `useGSAPContext()` hook which automatically:

1. Kills all GSAP tweens on unmount
2. Kills all ScrollTrigger instances
3. Prevents memory leaks
4. Ensures clean component lifecycle

```javascript
useGSAPContext(); // Add to any animated component
```

## Lenis Smooth Scroll Configuration

### Default Settings

```javascript
new Lenis({
  duration: 1.2, // Scroll duration (seconds)
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function
  direction: "vertical",
  gestureDirection: "vertical",
  smoothWheel: true, // Smooth scroll on wheel
  smoothTouch: false, // Smooth scroll on touch
  touchMultiplier: 2, // Touch scroll speed
  wheelMultiplier: 1, // Wheel scroll speed
  infinite: false,
});
```

### Customization

Edit in `src/hooks/useLenis.js`:

```javascript
// Faster scroll
duration: 0.8,

// Smoother easing (more ease-out)
easing: (t) => Math.min(1, 1.001 - Math.pow(2, -12 * t)),

// Disable on mobile
smoothWheel: !isMobile,
```

## Performance Optimization Checklist

### ✅ Animations

- [x] GPU-accelerated transforms (transform, opacity only)
- [x] RequestAnimationFrame optimization
- [x] ScrollTrigger cleanup on unmount
- [x] Lazy animation initialization
- [x] Reduced motion support

### ✅ Layout

- [x] No inline styles (all Tailwind)
- [x] Fixed positioning for hero sky
- [x] Z-index layering strategy
- [x] Will-change GPU promotion

### ✅ Images

- [ ] Image optimization (< 500KB)
- [ ] Responsive srcset
- [ ] Lazy loading where appropriate
- [ ] WebP format support
- [ ] CDN delivery (production)

### ✅ Code

- [x] Component code splitting
- [x] Tree-shakeable exports
- [x] Minimal dependencies
- [x] No hardcoded values in components
- [x] Reusable utility functions

## Web Vitals Optimization

### Core Web Vitals Targets

```
LCP (Largest Contentful Paint)  < 2.5s  ✅
FID (First Input Delay)          < 100ms ✅
CLS (Cumulative Layout Shift)     < 0.1  ✅
```

### Optimization Strategies

**Reduce LCP:**

```javascript
// 1. Lazy load non-critical images
<img loading="lazy" src="..." />

// 2. Optimize critical images
// - Compress, optimize, use WebP

// 3. Inline critical CSS
// - Tailwind handles this

// 4. Defer non-critical JS
// - Dynamic imports for sections
```

**Reduce CLS:**

```javascript
// 1. Fixed dimensions for images
<img width="1600" height="900" src="..." />

// 2. Reserved space for dynamic content
<div className="min-h-[100px]">
  {/* Content loads here */}
</div>

// 3. Avoid layout shifts in animations
// - Use transform, not width/height
```

## Bundle Size

### Current Bundle Analysis

```bash
# Analyze bundle
npm run build

# Install bundle analyzer (optional)
npm install --save-dev vite-plugin-visualizer
```

### Expected Sizes

- **React + DOM**: ~40KB (gzip)
- **GSAP + ScrollTrigger**: ~50KB (gzip)
- **Tailwind CSS**: ~15KB (gzip, with PurgeCSS)
- **Lenis**: ~8KB (gzip)
- **App code**: ~20KB (gzip)

**Total: ~133KB (gzip)**

## Vite Configuration Optimization

Current `vite.config.js`:

```javascript
export default defineConfig({
  plugins: [react()],
  // Add build optimizations:
  build: {
    rollupOptions: {
      output: {
        // Code splitting strategy
        manualChunks: {
          gsap: ["gsap", "gsap/ScrollTrigger"],
          lenis: ["@studio-freight/lenis"],
        },
      },
    },
    minify: "terser", // Default, but fastest
    terserOptions: {
      compress: {
        drop_console: true, // Remove console logs
      },
    },
  },
});
```

## Lighthouse Performance Tips

### Enable Gzip Compression

```bash
# In nginx or deployment config
gzip on;
gzip_vary on;
gzip_types text/plain text/css text/javascript
           application/json application/x-javascript application/xml+rss;
```

### Enable Browser Caching

```bash
# In .htaccess or nginx config
# Cache for 1 year
max-age=31536000

# Cache CSS/JS for 1 year
# Cache HTML for 1 day (can change)
```

## Network Optimization

### Resource Hints

Add to `index.html`:

```html
<!-- DNS prefetch -->
<link rel="dns-prefetch" href="https://fonts.googleapis.com" />

<!-- Preconnect -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

<!-- Preload critical resources -->
<link rel="preload" as="image" href="/models/building.png" />
<link rel="preload" as="script" href="/assets/gsap.js" />
```

## Mobile Optimization

### Touch Performance

1. Disable hover on touch devices
2. Reduce animation complexity on mobile
3. Optimize for slower networks

```javascript
const isMobile = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent,
  );
};

// Reduce animations on mobile
if (isMobile()) {
  scrub: 2; // Less responsive, smoother
}
```

### Responsive Images

All images are responsive with Tailwind:

```jsx
{/* Mobile: 100vw, Tablet: 90vw, Desktop: 1600px */}
<img className="w-full h-auto max-w-6xl mx-auto" ... />
```

## Accessibility Performance

### Reduced Motion

Respects user's motion preferences:

```javascript
const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Automatically pauses animations if enabled
```

## Deployment Optimization

### Production Build

```bash
# Build optimized bundle
npm run build

# Output: dist/
```

### Deployment Checklist

- [ ] Enable Gzip compression
- [ ] Set cache headers
- [ ] Enable HTTPS/HTTP2
- [ ] Use CDN for static assets
- [ ] Optimize images further
- [ ] Minify CSS/JS (Vite default)
- [ ] Remove source maps
- [ ] Monitor Core Web Vitals

### Environment Variables

Create `.env.production`:

```
VITE_API_URL=https://api.production.com
VITE_ANALYTICS_ID=your-analytics-id
```

## Monitoring & Analytics

### Performance Monitoring

Use Web Vitals library:

```javascript
import { onCLS, onFID, onFCP, onLCP, onTTFB } from "web-vitals";

onCLS((metric) => console.log("CLS:", metric));
onFID((metric) => console.log("FID:", metric));
onFCP((metric) => console.log("FCP:", metric));
onLCP((metric) => console.log("LCP:", metric));
onTTFB((metric) => console.log("TTFB:", metric));
```

### Error Tracking

Consider adding Sentry for production:

```bash
npm install @sentry/react @sentry/tracing
```

## Cache Busting

Vite handles cache busting automatically with content hash:

```
dist/
├── index-a5f9f6d2.js
├── index-c7e3b4a1.css
└── models-d3f2e9c4.png
```

Files change hash when content changes.

---

**Performance Target: 90+ Lighthouse Score**

Monitor with:

- [PageSpeed Insights](https://pagespeed.web.dev/)
- [WebPageTest](https://www.webpagetest.org/)
- [GTmetrix](https://gtmetrix.com/)

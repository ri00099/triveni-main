# Component API Reference

## Core Components

### Navbar

Navigation bar component with mobile responsiveness.

**Props:** None (self-contained)

**Usage:**

```jsx
import Navbar from "../components/Navbar/Navbar";

<Navbar />;
```

**Customization:**

```jsx
// Edit menuItems array in component
const menuItems = [
  { label: "Discover", href: "#hero" },
  { label: "Properties", href: "#why-find" },
  // Add more items
];
```

**Features:**

- Responsive mobile menu
- Smooth transitions
- Fixed positioning with backdrop blur
- CTA button included

---

### Hero

Main hero section with scroll-triggered animations.

**Props:**

```javascript
buildingRef; // React ref to building element
cloudsRef; // React ref to clouds container
contentRef; // React ref to content for fade-out
```

**Usage:**

```jsx
import Hero from "../components/Hero/Hero";

const buildingRef = useRef(null);
const cloudsRef = useRef(null);
const contentRef = useRef(null);

<Hero
  buildingRef={buildingRef}
  cloudsRef={cloudsRef}
  contentRef={contentRef}
/>;
```

**Features:**

- Full-screen hero with gradient text
- Scroll indicator with animation
- CTA button with hover effect
- Automatic cleanup on unmount

---

### Sky

Fixed background component for parallax effect.

**Props:** None

**Usage:**

```jsx
import { Sky } from "../components/Hero/Sky";

<Sky />;
```

**Customization:**
Edit gradient colors in component:

```jsx
<div className="bg-gradient-to-b from-slate-900 via-slate-800 to-dark-950" />
```

---

### CloudLayer

Animated cloud parallax with depth layers.

**Props:**

```javascript
index; // number (0, 1, 2) - determines cloud position
speed; // number (0-1) - parallax speed
opacity; // number (0-1) - layer opacity
```

**Usage:**

```jsx
import CloudLayer from '../components/CloudLayer/CloudLayer';

<CloudLayer index={0} speed={0.3} opacity={0.8} />
<CloudLayer index={1} speed={0.5} opacity={0.6} />
<CloudLayer index={2} speed={0.7} opacity={0.4} />
```

**Features:**

- SVG-based clouds for performance
- Configurable parallax speeds
- Scroll-based movement
- Smooth transitions

---

### BuildingScene

Building image with mouse parallax effect.

**Props:**

```javascript
className; // Additional CSS classes (optional)
```

**Usage:**

```jsx
import { BuildingScene } from "../components/BuildingScene/BuildingScene";

const buildingRef = useRef(null);

<div ref={buildingRef}>
  <BuildingScene className="custom-class" />
</div>;
```

**Features:**

- Mouse parallax (0.15 intensity)
- GPU acceleration
- Smooth transitions
- Easy image replacement

---

### FindReveal

Giant FIND typography reveal with building fill.

**Props:** None

**Usage:**

```jsx
import FindReveal from "../components/FindReveal/FindReveal";

<FindReveal />;
```

**Features:**

- Scroll-triggered reveal animation
- Text fill effect
- Building image clip-path reveal
- Responsive sizing

**Customization:**
Change text color:

```jsx
<div style={{
  backgroundImage: 'linear-gradient(135deg, #1e40af, #0369a1)',
}}>
```

---

### FogTransition

Atmospheric fog/cloud transition effect.

**Props:** None

**Usage:**

```jsx
import FogTransition from "../components/FogTransition/FogTransition";

<FogTransition />;
```

**Features:**

- SVG-based fog effect
- Smooth clip-path animation
- Radial gradient overlay
- Optional content area

---

### WhyFind

Features section with staggered animations.

**Props:** None

**Usage:**

```jsx
import WhyFind from "../components/WhyFind/WhyFind";

<WhyFind />;
```

**Customization:**
Edit features array in component:

```javascript
const features = [
  {
    title: "Feature Title",
    description: "Feature description",
    icon: "🎯",
  },
  // Add more features
];
```

**Features:**

- Staggered card animations
- Hover effects with gradients
- Responsive grid layout
- CTA button integration

---

### CTASection

Call-to-action with newsletter signup.

**Props:** None

**Usage:**

```jsx
import CTASection from "../components/CTASection/CTASection";

<CTASection />;
```

**Features:**

- Email input validation
- Success message feedback
- Trust indicators
- Responsive form layout

---

## Custom Hooks

### useLenis

Initialize smooth scroll with Lenis.

**Usage:**

```javascript
import { useLenis, scrollToElement } from "../hooks/useLenis";

const MyComponent = () => {
  useLenis(); // Initializes on mount

  const handleClick = () => {
    scrollToElement(document.getElementById("section"));
  };

  return <button onClick={handleClick}>Scroll</button>;
};
```

**API:**

```javascript
useLenis(); // Initialize smooth scroll
getLenisInstance(); // Get singleton instance
scrollToElement(el, offset); // Scroll to element
scrollToPosition(px, duration); // Scroll to position
```

---

### useMouseParallax

Create mouse-based parallax effect.

**Usage:**

```javascript
import { useMouseParallax } from "../hooks/useMouseParallax";

const MyComponent = () => {
  const { elementRef, isEnabled, setIsEnabled } = useMouseParallax(0.5);

  return <div ref={elementRef}>Content</div>;
};
```

**Parameters:**

```javascript
intensity; // 0-1, default 0.5
dampening; // 0-1, default 0.1 (smoothing)
```

**API:**

```javascript
elementRef; // Ref to attach to element
isEnabled; // Boolean to toggle effect
setIsEnabled(); // Function to toggle
```

---

### useScrollParallax

Create scroll-based parallax effect.

**Usage:**

```javascript
import { useScrollParallax } from "../hooks/useMouseParallax";

const MyComponent = () => {
  const elementRef = useScrollParallax(0.5); // speed

  return <div ref={elementRef}>Content</div>;
};
```

**Parameters:**

```javascript
speed; // Parallax speed multiplier, default 0.5
```

---

### useGSAPContext

Automatic GSAP cleanup and animation preferences.

**Usage:**

```javascript
import {
  useGSAPContext,
  useAnimationPreference,
} from "../hooks/useGSAPContext";

const MyAnimatedComponent = () => {
  useGSAPContext(); // Automatic cleanup
  const prefersReduced = useAnimationPreference();

  if (prefersReduced) {
    // Simplify animations
  }

  return <div>Content</div>;
};
```

**Features:**

- Auto cleanup on unmount
- Respects reduced motion preference
- Kills all active animations

---

## Animation Utilities

### heroTimeline.js

**Functions:**

```javascript
createHeroTimeline(buildingRef, cloudsRef, contentRef, trigger);
cleanupHeroTimeline();
```

**Configuration:**

```javascript
const tl = createHeroTimeline(
  buildingRef, // Element to scale
  cloudsRef, // Container with [data-cloud] children
  contentRef, // Content to fade
  triggerElement, // ScrollTrigger element
);
```

---

### revealTimeline.js

**Functions:**

```javascript
createFindRevealTimeline(textRef, buildingImageRef, trigger);
createFogTransitionTimeline(fogRef, trigger, direction);
cleanupRevealTimelines();
```

---

### gsapUtils.js

**Utilities:**

```javascript
refreshScrollTrigger(); // Refresh on resize
killAllScrollTriggers(); // Kill all triggers
createStaggerAnimation(targets, duration, stagger, fromValues);
createParallaxOnMouseMove(element, intensity);
debounceScroll(callback, delay);
```

**Example:**

```javascript
import { createStaggerAnimation } from "../animations/gsapUtils";

const elements = document.querySelectorAll(".card");
createStaggerAnimation(elements, 0.6, 0.1, { opacity: 0, y: 20 });
```

---

## Tailwind Classes

### Typography

```javascript
.text-hero       // Hero headline
.text-heading    // Section heading
.text-subheading // Subheading
.text-body       // Body text
```

### Buttons

```javascript
.btn-primary     // Primary CTA button
.btn-outline     // Outline style button
```

### Colors

```javascript
.dark-50   // Lightest
.dark-950  // Darkest
```

### Spacing

```javascript
.gutter    // Responsive padding
.container // Max width
```

### Effects

```javascript
.will-change-gpu    // GPU acceleration
.no-pointer         // pointer-events: none
```

---

## Responsive Design

### Breakpoints

```javascript
// Tailwind breakpoints
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1536px
```

**Usage:**

```jsx
<div className="text-xl md:text-2xl lg:text-3xl">Responsive text</div>
```

---

## Configuration Objects

### Animation Config Pattern

```javascript
// All animations follow this pattern
const animConfig = {
  duration: 0.6, // Seconds
  delay: 0, // Seconds
  ease: "power2.out", // GSAP easing
  stagger: 0.1, // Stagger delay
  scrollTrigger: {
    trigger: element,
    start: "top center",
    end: "bottom center",
    scrub: 1,
    markers: false, // Debug
  },
};
```

---

## Best Practices

### ✅ DO

- Use Tailwind classes for styling
- Keep component logic in hooks
- Separate animations into `animations/` folder
- Use refs for DOM manipulation
- Cleanup animations on unmount

### ❌ DON'T

- Use inline styles
- Hardcode animation values in components
- Create multiple Lenis instances
- Forget to cleanup ScrollTriggers
- Use px/em for animation values (use transforms)

---

**For issues or questions, refer to IMPLEMENTATION_GUIDE.md**

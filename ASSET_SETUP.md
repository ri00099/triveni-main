# Asset Integration Guide

## Building Image Setup

### 1. Prepare Your Building Image

**Requirements:**

- Format: PNG (with transparency) or JPG
- Dimensions: 1600x900px or 1920x1080px (16:9 aspect ratio)
- File size: < 500KB (optimize before adding)
- Quality: High resolution, professional photograph

**Recommended Tools for Optimization:**

- TinyPNG (https://tinypng.com/)
- ImageOptim (macOS)
- Adobe Compress (https://www.adobe.com/express/tools/compress-image)

### 2. Add Building Image

**Step 1: Place file**

```
public/
└── models/
    └── building.png
```

**Step 2: Update BuildingScene component**

In `src/components/BuildingScene/BuildingScene.jsx`, replace the placeholder:

```jsx
// From:
<div className="w-full h-full bg-gradient-to-t from-dark-800 to-dark-700 rounded-lg flex items-center justify-center overflow-hidden">
  <div className="text-center">
    <p className="text-dark-300 text-sm font-medium">Building Image Placeholder</p>
    <p className="text-dark-500 text-xs mt-1">Replace with /public/models/building.png</p>
  </div>
</div>

// To:
<img
  src="/models/building.png"
  alt="Premium Real Estate Building"
  className="w-full h-full object-cover rounded-lg"
  loading="eager"
  decoding="async"
/>
```

### 3. Cloud Assets (Optional)

For custom cloud assets:

```
public/
├── assets/
│   ├── clouds/
│   ├── building/
│   └── sky/
```

Currently using SVG clouds (no external assets needed).

## Logo & Brand Assets

### Navbar Logo

Edit `src/components/Navbar/Navbar.jsx`:

```jsx
// Replace the circular logo
<div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
  <span className="text-dark-950 font-bold text-sm">F</span>
</div>

// With your logo
<img
  src="/assets/logo.png"
  alt="FIND Logo"
  className="w-8 h-8"
/>
```

## Icons & SVG Assets

Using inline SVGs for:

- Navbar hamburger menu
- Hero scroll indicator
- Feature icons
- Arrows

To customize, edit the SVG `viewBox` and `path` attributes in component files.

## Performance Optimization

### Image Optimization Checklist

- [ ] Images are next-gen format (WebP for modern browsers)
- [ ] Images have correct aspect ratio
- [ ] Images are responsive (srcset for different screens)
- [ ] Images use lazy loading where appropriate
- [ ] File sizes are optimized (< 500KB each)

### Responsive Images Example

```jsx
<img
  src="/models/building.png"
  srcSet="
    /models/building-sm.png 640w,
    /models/building-md.png 1024w,
    /models/building.png 1920w
  "
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1600px"
  alt="Premium Real Estate Building"
/>
```

## Favicon Setup

Edit `index.html`:

```html
<link rel="icon" type="image/svg+xml" href="/vite.svg" />
<link rel="icon" type="image/png" href="/favicon.png" />
```

Add favicons to `public/` folder:

- `favicon.png` (32x32px)
- `favicon-16x16.png` (16x16px)
- `favicon-32x32.png` (32x32px)

## Font Assets

### Google Fonts Setup

Currently using Tailwind's default fonts. To add custom fonts:

1. Edit `index.html`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap"
  rel="stylesheet"
/>
```

2. Update `tailwind.config.js`:

```javascript
fontFamily: {
  display: ['Space Grotesk', 'system-ui', 'sans-serif'],
  sans: ['Inter', 'system-ui', 'sans-serif'],
}
```

## 3D Models (Advanced)

For future Three.js integration:

```
public/
└── models/
    ├── building.gltf
    ├── building.bin
    └── textures/
```

## Troubleshooting

### Image Not Loading

1. Check file path is correct:

   ```
   public/models/building.png ✅
   src/assets/building.png ❌ (won't work)
   ```

2. Check file exists: `ls -la public/models/`

3. Check file permissions: `chmod 644 public/models/building.png`

4. Clear browser cache and rebuild:
   ```bash
   npm run dev
   # Hard refresh: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)
   ```

### Slow Load Times

1. Optimize image size:

   ```bash
   # Using ImageOptim
   open -a ImageOptim public/models/building.png
   ```

2. Use WebP format:

   ```bash
   # Convert PNG to WebP
   cwebp building.png -o building.webp
   ```

3. Use CDN for images in production

## Asset Attribution

Include credits for any third-party assets:

```jsx
{
  /* Add to footer or credits page */
}
<p className="text-xs text-dark-500">Building photography by [Credit]</p>;
```

---

**Next Steps:**

1. Place building.png in `public/models/`
2. Update BuildingScene component
3. Test on all devices
4. Deploy to production

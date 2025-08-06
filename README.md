# 🦐💰 Ultra Performant Static Page

A super compressed, ultra-performant static web page featuring shrimp and money emojis with beautiful CSS gradient effects and animations.

## Features

- 🚀 **Ultra fast**: Single HTML file under 1KB
- 🎨 **Beautiful gradients**: Animated multi-layer gradient background
- ✨ **Shader-like effects**: Pure CSS texture and animation effects
- 📱 **Responsive**: Works perfectly on all devices
- 🎯 **Centered design**: Perfectly centered emojis with floating animation

## Development

### Install dependencies

```bash
npm install
```

### Start development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## Deployment

The built files in `dist/` are ready for deployment on:

- **Vercel**: Drag and drop the `dist` folder
- **Gandi.net**: Upload the `dist/index.html` file
- **Any static hosting**: The `dist` folder contains everything needed

## File Structure

```
├── src/
│   └── index.html          # Readable development version
├── dist/                   # Built files (after npm run build)
├── package.json           # Project configuration
├── vite.config.js         # Vite build configuration
└── README.md              # This file
```

## Performance

- **File size**: ~500 bytes (minified)
- **Load time**: Near-instant
- **No external dependencies**: Pure HTML/CSS
- **Hardware accelerated**: Uses GPU for animations

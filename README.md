# Birthday Journey Landing Page 🎉

A beautiful, animated single-page landing page for a birthday celebration built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- ✨ **Hero Section** with animated text reveal and subtle glow effects
- 🌟 **Floating Background Particles** with mouse parallax and scroll effects
- 📅 **Journey Timeline** with 5-7 milestone cards that animate on scroll
- 🎁 **Wish Jar** with card flip animation and random wish reveals
- 📸 **Photo Gallery** with hover tilt and shine sweep effects
- 🎊 **Final CTA** with confetti burst and animated toast notification
- ♿ **Accessible** with reduced motion support and keyboard navigation
- 📱 **Responsive** mobile-first design

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

All editable content is located at the top of `/app/page.tsx` in the `CONFIG` object:

```typescript
const CONFIG = {
  name: 'Beautiful Soul',           // Birthday person's name
  heroMessage: '...',                // Hero section message
  timeline: [...],                    // Timeline milestones
  wishes: [...],                     // Wish jar wishes
  galleryImages: [...],              // Gallery images
}
```

### Adding Your Own Images

Replace the placeholder image URLs in `galleryImages` with your own image URLs or use Next.js Image component with local images.

## Design Palette

- **Background**: #FFF7FB
- **Primary**: #FF6FAE
- **Accent**: #8B5CF6
- **Secondary**: #FFD6E8
- **Text**: #2A2A2A
- **Card**: #FFFFFF

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animations)
- **react-confetti** (confetti effects)
- **lucide-react** (icons)
- **Google Fonts** (Playfair Display + Inter)

## Accessibility

- Reduced motion support via `prefers-reduced-motion` media query
- Keyboard accessible buttons and interactions
- Good color contrast ratios
- Semantic HTML structure

## Build

```bash
npm run build
npm start
```

## License

MIT


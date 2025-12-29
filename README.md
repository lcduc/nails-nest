# Nail Nest Website

A modern, responsive website for Nail Nest premium nail salon, built with React, TypeScript, Vite, and Tailwind CSS from Figma designs.

## Features

- 🎨 Responsive design (mobile-first)
- ⚡ Fast build times with Vite
- 🎯 TypeScript for type safety
- 🎨 Tailwind CSS for styling
- 📱 Mobile-optimized navigation
- 🖼️ Image optimization

## Getting Started

### Prerequisites

- Node.js (v18+)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

### Development

Run the development server:
```bash
npm run dev
```

The site will open at `http://localhost:3000`

### Build for Production

Build the optimized production bundle:
```bash
npm run build
```

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

## Project Structure

```
src/
├── main.tsx           # Entry point
├── App.tsx            # Root component
├── index.css          # Global styles
├── components/        # React components
│   ├── ResponsiveHomepage.tsx
│   ├── figma/        # Figma-generated components
│   └── ui/           # UI component library
├── imports/          # Assets and utilities
└── styles/           # Additional styles
```

## Deployment

This project can be deployed to:

- **Vercel** (recommended): Auto-deploys from GitHub
- **Netlify**: Drag & drop or connect Git repository
- **GitHub Pages**: Static hosting
- **Any Node.js hosting**: Use the `dist/` folder

### Deploy to Vercel

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import the repository
4. Vercel auto-detects Vite configuration

### Deploy to Netlify

1. Build locally: `npm run build`
2. Drag the `dist/` folder to Netlify
3. Or connect your Git repository for auto-deploys

## Technologies

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite 4** - Build tool
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **clsx** - Utility for conditional classes

## License

All rights reserved © 2025 Nail Nest

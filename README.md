# Luxury Furniture Website 🛋️

![Next.js](https://img.shields.io/badge/Next.js-15.3.2-blue)
![React](https://img.shields.io/badge/React-19.0.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Node](https://img.shields.io/badge/Node-≥22.0.0-green)

A clean, responsive website showcasing luxury furniture products. This project uses Next.js 15 with React 19 and TypeScript for a modern development experience.

## 🚀 Getting Started

```bash
# Install dependencies
npm install   # or: yarn install

# Start development with live reload (recommended)
npm run dev:start   # or: yarn dev:start

# Or build assets once then start the dev server
npm run dev   # or: yarn dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

## 🛠️ What's Inside

- **Framework**: Next.js 15 with App Router
- **UI**: React 19 components with TypeScript
- **Styling**: SCSS with a modular folder structure
- **Slider**: Swiper.js for interactive carousels

## 📁 Project Organization

```
/src
  /app          # Next.js pages and layout
  /components   # Reusable UI components
    /Account    # User account related components
    /Collections# Product collection components
    /Slider     # Swiper-based carousel components
  /hooks        # Custom React hooks
  /styles       # SCSS files
    /base       # Reset, variables, typography
    /components # Component-specific styles
    /responsive # Mobile and tablet styles
/public         # Static files and compiled assets
```

## 🧩 Key Features

- **Responsive Design**: Works great on mobile, tablet and desktop
- **Modern Look**: Clean design with luxury furniture aesthetic
- **Interactive Elements**: Product collection tabs and customer favorites slider
- **Fast Loading**: Optimized with Next.js App Router

## 💻 Development Commands

| Command                | What it does                                                           |
| ---------------------- | ---------------------------------------------------------------------- |
| `npm run dev:start`    | Best for development: builds assets and starts server with auto-reload |
| `npm run dev`          | Builds SCSS assets once then starts the dev server                     |
| `npm run build`        | Creates a production build                                             |
| `npm run start`        | Runs the production build                                              |
| `npm run lint`         | Checks code for errors and style issues                                |
| `npm run build-assets` | Only builds the SCSS assets                                            |
| `npm run watch-assets` | Watches and rebuilds SCSS assets when they change                      |

> Replace `npm run` with `yarn` if you prefer using Yarn

## 🔄 Import Shortcuts

The project has path aliases set up for cleaner imports:

```typescript
// Instead of messy relative paths like ../../components/Button
import { SomeComponent } from "@components/SomeComponent";
import { useCustomHook } from "@hooks/use-custom-hook";
```

Available aliases: `@app`, `@components`, `@hooks`, and `@styles`

## 🏗️ SCSS Build Process

This project uses esbuild to process SCSS styles only:

- Your SCSS files → `public/css/site.min.css`

The build config is in these files:

- `esbuild.config.js` - Main build settings for SCSS
- `esbuild.watch.js` - Watch mode for SCSS during development

> Note: JavaScript is handled by Next.js's built-in bundler, not by esbuild

## 📱 Responsive Design

The site is built mobile-first:

- Base styles are for mobile devices
- Media queries add styles for larger screens
- Use the `useIsMobileOrTablet()` hook when you need different components based on screen size

## 📝 Important Notes

- You need **Node.js 22 or newer**
- SCSS is organized into base, components, and responsive folders
- Always use the Next.js `Image` component for better performance
- Follow the ESLint rules for consistent code quality

## 🤔 Need Help?

- For styling questions, check the SCSS files in `src/styles`
- For component structure, see examples in `src/components`
- For page structure, see `src/app/page.tsx` and `src/app/layout.tsx`

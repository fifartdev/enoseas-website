# GitHub Copilot Instructions

This Next.js project is a premium maritime engineering website for ENOSEAS Group.

## Project Overview

- **Type**: Next.js React Application
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: GSAP (GreenSock Animation Platform)
- **Deployment**: Vercel-ready

## Key Features

- Glassmorphic navigation header
- Cinematic hero section with GSAP animations
- Component-driven architecture
- Dark theme with cyan/teal accents
- Responsive mobile design
- Enterprise B2B inquiry form

## Development Notes

- All components use React hooks for animations
- GSAP ScrollTrigger plugin is configured for scroll-based animations
- Tailwind CSS custom config includes maritime color palette
- Images use Next.js Image component for optimization

## Building

```bash
npm install
npm run dev      # Development server
npm run build    # Production build
npm run lint     # ESLint check
```

## Component Structure

- `Header`: Fixed navigation with glassmorphism
- `HeroSection`: Full-viewport cinematic banner
- `LogoCloud`: Brand entity showcase
- `EntityGrid`: Member company cards
- `InquiryForm`: Technical consultation form
- `Footer`: Corporate footer

For more details, see README.md.

# ENOSEAS Website

A premium, enterprise-grade maritime engineering website for ENOSEAS Group and its member brands.

## Features

- **Responsive Design**: Fully optimized for mobile, tablet, and desktop
- **Dark Theme**: Premium navy and slate color scheme with cyan/teal accents
- **Smooth Animations**: GSAP-powered scroll triggers and transitions
- **Modern Components**: Header, Hero, Logo Cloud, Entity Grid, Inquiry Form, Footer
- **Glassmorphism**: Backdrop blur effects for modern UI
- **B2B Focused**: Technical consultation request form and enterprise messaging

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: GSAP + React
- **UI Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Navigate to project directory
cd enoseas-website

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Main page
│   └── globals.css      # Global styles
├── components/
│   ├── Header.tsx       # Navigation header
│   ├── HeroSection.tsx  # Hero banner
│   ├── LogoCloud.tsx    # Brand logos
│   ├── EntityGrid.tsx   # Member companies
│   ├── InquiryForm.tsx  # Contact form
│   └── Footer.tsx       # Footer
public/                  # Static assets
```

## Components

### Header
Fixed navigation bar with logo, menu links, and consultation button. Includes mobile responsiveness and scroll-triggered glassmorphism.

### HeroSection
Full-viewport cinematic hero with animated typography and dual action buttons.

### LogoCloud
Horizontal grid of ENOSEAS group entities with hover animations.

### EntityGrid
3-card layout showcasing ARGO NAVIS Engineers, SEA CROSS Engineering, and VELA ELECTRIC with image backgrounds and service tags.

### InquiryForm
Split-layout technical inquiry form with company information and form fields.

### Footer
Multi-column footer with compliance badges, service links, and corporate information.

## Color Scheme

- **Primary**: Navy Dark `#0A192F`
- **Accent 1**: Cyan `#00B4D8`
- **Accent 2**: Teal `#00F5D4`
- **Green**: Emerald `#2ECC71`
- **Neutral**: Slate Greys

## Customization

### Update Brand Information
Edit component props and text in `src/components/` files.

### Modify Colors
Update `tailwind.config.ts` color values.

### Add Background Images
Replace image URLs in `EntityGrid.tsx` with your own assets from Unsplash/Pexels.

## License

Proprietary - ENOSEAS Group

## Support

For technical support, contact: partners@enoseas.com

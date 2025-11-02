# Vastraa - Custom T-Shirt Printing E-commerce

A modern, full-featured e-commerce website for custom t-shirt printing built with Next.js 14, JavaScript, and Tailwind CSS.

## Features

- 🎨 Modern, responsive design
- 🛒 Shopping cart with persistent storage
- 📱 Mobile-first approach
- ⚡ Fast performance with Next.js 14
- 🎯 TypeScript for type safety
- 💅 Tailwind CSS for styling
- 🔔 Toast notifications
- 📦 Product catalog with filtering
- 🛍️ Product detail pages
- 💳 Cart management
- 📧 Contact form
- 🌟 Customer testimonials

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **State Management:** Zustand
- **Icons:** React Icons
- **Notifications:** React Toastify

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
vastraa/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── shop/              # Shop page
│   ├── product/[id]/      # Product detail pages
│   ├── cart/              # Shopping cart
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   └── custom-design/     # Custom design tool
├── components/            # Reusable components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Features.tsx
│   ├── ProductCard.tsx
│   └── ...
├── data/                  # Data files
│   └── products.ts        # Product catalog
├── store/                 # State management
│   └── cartStore.ts       # Cart store
└── public/                # Static assets

```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Customization

### Adding Products

Edit `data/products.ts` to add or modify products.

### Changing Colors

Update the color scheme in `tailwind.config.ts`.

### Modifying Layout

Edit components in the `components/` directory.

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with one click

## License

MIT License - feel free to use this project for your own purposes.

## Support

For support, email support@vastra.com or contact us through the website.

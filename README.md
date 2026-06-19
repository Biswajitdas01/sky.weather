# Aarong Digital — React.js Course Project

A full-featured e-commerce and analytics dashboard built with React, Vite, React Router, and Recharts. The app showcases Aarong, Bangladesh's iconic artisan brand, and is built as a final project for a Digital Marketing Analytics course.

---

## Live Demo

> **[Add your Vercel/Netlify URL here after deployment]**

---

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx / Navbar.css       # Sticky responsive nav with cart badge
│   ├── ProductCard.jsx / .css        # Reusable card with wishlist + add to cart
│   └── Footer.jsx / .css             # 4-column footer
├── context/
│   └── CartContext.jsx               # useReducer-based global cart state
├── data/
│   └── products.js                   # Product catalogue + analytics data
├── hooks/
│   └── useProducts.js                # Custom hooks
├── pages/
│   ├── Home.jsx                      # Hero, metrics, featured products
│   ├── Products.jsx                  # Filterable, searchable, sortable catalogue
│   ├── Analytics.jsx                 # GA4 dashboard with charts
│   ├── About.jsx                     # Timeline, mission, team
│   ├── Cart.jsx                      # Cart with qty control and order summary
│   └── NotFound.jsx                  # 404 page
├── App.jsx                           # BrowserRouter + Routes
├── main.jsx                          # React root
└── index.css                         # Global CSS variables, fonts, utilities
```

---

## Tech Stack

- React 18 + Vite
- React Router DOM v6
- Recharts (analytics charts)
- Context API + useReducer (global cart)
- Custom Hooks (filtering, wishlist, scroll, localStorage)
- CSS per component (no framework)

---

## React Concepts Demonstrated

- Hooks: useState, useEffect, useReducer, useContext, useCallback, custom hooks
- Context API: CartContext with useReducer for global cart management
- React Router v6: BrowserRouter, Routes, Route, Link, NavLink
- Custom Hooks: useProducts, useScrollPosition, useLocalStorage, useWishlist
- Reusable component architecture
- Conditional rendering, empty states, responsive design

---

## Getting Started

```bash
git clone https://github.com/YOUR_USERNAME/arong-digital.git
cd arong-digital
npm install
npm run dev
```

Production build:
```bash
npm run build
```

---

## Deployment

### Vercel (recommended)
1. Push repo to GitHub
2. vercel.com > Import Project > select repo
3. Framework: Vite (auto-detected)
4. Deploy

### Netlify
1. Push to GitHub
2. netlify.com > Add New Site > Import from Git
3. Build command: `npm run build` / Publish dir: `dist`

---

## Design Tokens

- Green: #006A4E (Bangladesh national colour)
- Gold: #C9A84C (artisan warmth)
- Cream: #FAF7F2 (natural base)
- Fonts: Playfair Display + Inter

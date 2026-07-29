# React Shopping Cart Project

An Amazon-inspired shopping cart application built with React and Vite. Browse smartphones, add items to your cart, adjust quantities, apply a promo code, and view live totals — with a slide-in cart drawer, empty-cart states, and a responsive layout for desktop and mobile.

## Features

- Product grid with local images, name, price, category, and seller
- Add products to the shopping cart with toast notifications
- Slide-in cart drawer from the navbar
- Dedicated cart page with order summary and promo code field
- Increase / decrease item quantity
- Remove individual products or clear the entire cart
- Live total item count and cart price
- Empty-cart UI with illustration on the drawer and cart page
- Professional multi-column footer with newsletter signup
- Reusable React components and `useState` hooks
- Responsive design for desktop and mobile

## Installation and Setup

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- npm (comes with Node.js)

### Steps

1. Clone the repository:

```bash
git clone https://github.com/asaduzzaman-anik/React-Shopping-Cart-Project.git
cd react-shopping-cart-project
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open the URL shown in the terminal (usually `http://localhost:5173`) in your browser.

### Other scripts

```bash
npm run build    # Production build
npm run preview  # Preview the production build locally
npm run lint     # Run ESLint
```

## Project Structure

```
public/
  images/           # Logo, empty-cart art, and product photos
src/
  components/       # Header, Footer, ProductCard, CartDrawer, CartItem, etc.
  data/             # Static product catalog (phones)
  pages/            # Home and Cart pages
  App.jsx           # Cart state (useState) and routing
  main.jsx          # App entry point
```

## Links

- **GitHub repository:** https://github.com/asaduzzaman-anik/React-Shopping-Cart-Project.git
- **Live project:** https://react-shopping-cart-project-anik.netlify.app

## License

This project was created as a course assignment.

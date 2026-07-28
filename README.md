# React Shopping Cart Project

An Amazon-inspired shopping cart application built with React and Vite. Browse gaming desktop PCs, add items to your cart, adjust quantities, and view live totals — all with a responsive layout for desktop and mobile.

## Features

- Product grid with image, name, price, and category
- Add products to the shopping cart
- Increase / decrease item quantity
- Remove products from the cart
- Live total item count and cart price
- Reusable React components and `useState` hooks
- Responsive design for desktop and mobile

## Installation and Setup

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- npm (comes with Node.js)

### Steps

1. Clone the repository:

```bash
git clone <YOUR_GITHUB_REPO_URL>
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
src/
  components/     # Reusable UI components (Header, ProductCard, CartItem, etc.)
  data/           # Static product data
  pages/          # Home and Cart pages
  App.jsx         # Cart state (useState) and routing
  main.jsx        # App entry point
```

## Links

- **GitHub repository:** [Add your GitHub repository URL here]
- **Live project:** [Add your live deployment URL here]

## Reference

Design and functionality inspired by: [https://startling-beijinho-72802b.netlify.app/](https://startling-beijinho-72802b.netlify.app/)

## License

This project was created as a course assignment.

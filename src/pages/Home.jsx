import products from '../data/products'
import ProductGrid from '../components/ProductGrid'

function Home({ onAddToCart }) {
  return (
    <section className="home">
      <h1 className="home__heading">Results</h1>
      <p className="home__subtitle">
        Check each product page for other buying options.
      </p>
      <ProductGrid products={products} onAddToCart={onAddToCart} />
    </section>
  )
}

export default Home

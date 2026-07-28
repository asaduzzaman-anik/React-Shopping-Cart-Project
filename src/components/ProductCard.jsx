function formatPrice(price) {
  const [dollars, cents] = price.toFixed(2).split('.')
  return { dollars, cents }
}

function ProductCard({ product, onAddToCart }) {
  const { dollars, cents } = formatPrice(product.price)

  return (
    <article className="product-card">
      <div className="product-card__image-wrap">
        <img
          className="product-card__image"
          src={product.image}
          alt={product.name}
          loading="lazy"
        />
      </div>
      <p className="product-card__category">{product.category}</p>
      <h3 className="product-card__name">{product.name}</h3>
      <p className="product-card__price">
        <span>$</span>
        {dollars}
        <span>{cents}</span>
      </p>
      <p className="product-card__seller">Sold by {product.seller}</p>
      <button
        type="button"
        className="product-card__btn"
        onClick={() => onAddToCart(product)}
      >
        Add to Cart
      </button>
    </article>
  )
}

export default ProductCard

function CartItem({ item, onIncrease, onDecrease, onRemove }) {
  const lineTotal = item.price * item.quantity

  return (
    <div className="cart-item">
      <div className="cart-item__image-wrap">
        <img
          className="cart-item__image"
          src={item.image}
          alt={item.name}
        />
      </div>

      <div className="cart-item__details">
        <h3 className="cart-item__name">{item.name}</h3>
        <p className="cart-item__category">{item.category}</p>
        <p className="cart-item__price">${item.price.toFixed(2)}</p>

        <div className="cart-item__actions">
          <div className="qty-controls">
            <button
              type="button"
              onClick={() => onDecrease(item.id)}
              aria-label="Decrease quantity"
            >
              −
            </button>
            <span aria-live="polite">{item.quantity}</span>
            <button
              type="button"
              onClick={() => onIncrease(item.id)}
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>
          <button
            type="button"
            className="cart-item__remove"
            onClick={() => onRemove(item.id)}
          >
            Remove
          </button>
        </div>
      </div>

      <p className="cart-item__line-total">${lineTotal.toFixed(2)}</p>
    </div>
  )
}

export default CartItem

function CartSummary({ totalItems, totalPrice }) {
  return (
    <aside className="cart-summary">
      <p className="cart-summary__label">Cart Summary</p>
      <p className="cart-summary__items">
        {totalItems} {totalItems === 1 ? 'item' : 'items'}
      </p>
      <p className="cart-summary__total">
        Subtotal: <strong>${totalPrice.toFixed(2)}</strong>
      </p>
      <button type="button" className="cart-summary__checkout">
        Proceed to checkout
      </button>
    </aside>
  )
}

export default CartSummary

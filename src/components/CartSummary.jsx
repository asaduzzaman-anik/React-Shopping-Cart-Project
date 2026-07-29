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

      <form
        className="cart-summary__promo"
        onSubmit={(e) => e.preventDefault()}
      >
        <label htmlFor="promo-code" className="cart-summary__promo-label">
          Promo code
        </label>
        <div className="cart-summary__promo-row">
          <input
            id="promo-code"
            type="text"
            name="promoCode"
            placeholder="Enter code"
            className="cart-summary__promo-input"
            autoComplete="off"
          />
          <button type="submit" className="cart-summary__promo-btn">
            Apply
          </button>
        </div>
      </form>

      <button type="button" className="cart-summary__checkout">
        Proceed to checkout
      </button>
    </aside>
  )
}

export default CartSummary

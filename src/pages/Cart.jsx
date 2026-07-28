import { Link } from 'react-router-dom'
import CartItem from '../components/CartItem'
import CartSummary from '../components/CartSummary'

function Cart({
  cart,
  totalItems,
  totalPrice,
  onIncrease,
  onDecrease,
  onRemove,
}) {
  if (cart.length === 0) {
    return (
      <section className="cart-page cart-page--empty">
        <h1 className="cart-page__heading">Shopping Cart</h1>
        <div className="cart-empty">
          <h2>Your Amazon Cart is empty</h2>
          <p>Browse products and add items to get started.</p>
          <Link to="/" className="cart-empty__link">
            Continue shopping
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section className="cart-page">
      <h1 className="cart-page__heading">Shopping Cart</h1>

      <div className="cart-list">
        {cart.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
            onRemove={onRemove}
          />
        ))}
      </div>

      <CartSummary totalItems={totalItems} totalPrice={totalPrice} />
    </section>
  )
}

export default Cart

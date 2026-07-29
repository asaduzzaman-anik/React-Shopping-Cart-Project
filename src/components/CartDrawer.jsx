import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import CartItem from './CartItem'

function CartDrawer({
  isOpen,
  onClose,
  cart,
  totalItems,
  totalPrice,
  onIncrease,
  onDecrease,
  onRemove,
}) {
  useEffect(() => {
    if (!isOpen) return undefined

    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', onKeyDown)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [isOpen, onClose])

  const estimatedTax = totalPrice * 0.09
  const estimatedTotal = totalPrice + estimatedTax

  return (
    <div
      className={`cart-drawer${isOpen ? ' cart-drawer--open' : ''}`}
      aria-hidden={!isOpen}
    >
      <button
        type="button"
        className="cart-drawer__backdrop"
        aria-label="Close cart"
        tabIndex={isOpen ? 0 : -1}
        onClick={onClose}
      />

      <aside
        className="cart-drawer__panel"
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
      >
        <div className="cart-drawer__header">
          <h2 className="cart-drawer__title">
            Cart
            {totalItems > 0 && (
              <span className="cart-drawer__count">
                ({totalItems} {totalItems === 1 ? 'item' : 'items'})
              </span>
            )}
          </h2>
          <button
            type="button"
            className="cart-drawer__close"
            aria-label="Close cart"
            tabIndex={isOpen ? 0 : -1}
            onClick={onClose}
          >
            ×
          </button>
        </div>

        <div className="cart-drawer__body">
          {cart.length === 0 ? (
            <div className="cart-drawer__empty">
              <img
                className="cart-drawer__empty-image"
                src="/images/empty-cart.png"
                alt=""
              />
              <p>Your Amazon Cart is empty</p>
              <p className="cart-drawer__empty-hint">
                Browse products and add items to get started.
              </p>
            </div>
          ) : (
            <div className="cart-drawer__list">
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
          )}
        </div>

        <div className="cart-drawer__footer">
          {cart.length > 0 && (
            <>
              <div className="cart-drawer__breakdown">
                <div className="cart-drawer__row">
                  <span>
                    Subtotal ({totalItems}{' '}
                    {totalItems === 1 ? 'item' : 'items'})
                  </span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="cart-drawer__row">
                  <span className="cart-drawer__row-label">
                    Shipping
                    <span
                      className="cart-drawer__info"
                      title="Shipping details"
                      aria-label="Shipping information"
                    >
                      i
                    </span>
                  </span>
                  <span className="cart-drawer__free">FREE</span>
                </div>
                <div className="cart-drawer__row">
                  <span className="cart-drawer__row-label">
                    Estimated Tax
                    <span
                      className="cart-drawer__info"
                      title="Tax estimate"
                      aria-label="Tax information"
                    >
                      i
                    </span>
                  </span>
                  <span>${estimatedTax.toFixed(2)}</span>
                </div>
              </div>

              <div className="cart-drawer__row cart-drawer__row--total">
                <span>Estimated Total</span>
                <span className="cart-drawer__total-price">
                  ${estimatedTotal.toFixed(2)}
                </span>
              </div>
            </>
          )}

          <button
            type="button"
            className="cart-drawer__checkout"
            tabIndex={isOpen ? 0 : -1}
            disabled={cart.length === 0}
          >
            <svg
              className="cart-drawer__lock"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M17 8h-1V6a4 4 0 0 0-8 0v2H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2zm-7-2a2 2 0 1 1 4 0v2h-4V6zm7 14H7V10h10v10z" />
            </svg>
            Proceed to checkout
          </button>

          <Link
            to="/cart"
            className="cart-drawer__view-cart"
            tabIndex={isOpen ? 0 : -1}
            onClick={onClose}
          >
            View cart
          </Link>
        </div>
      </aside>
    </div>
  )
}

export default CartDrawer

import { Link } from 'react-router-dom'

function Header({ cartCount, onCartClick }) {
  return (
    <header className="header">
      <div className="header__inner">
        <Link to="/" className="header__logo" aria-label="Amazon home">
          <img
            className="header__logo-img"
            src="/images/amazon-logo.png"
            alt="Amazon"
          />
        </Link>

        <div className="header__deliver" tabIndex={0}>
          <svg
            className="header__deliver-icon"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z" />
          </svg>
          <div className="header__deliver-text">
            <span className="header__line-top">Deliver to</span>
            <span className="header__line-bottom">Bangladesh</span>
          </div>
        </div>

        <form
          className="header__search"
          onSubmit={(e) => e.preventDefault()}
          role="search"
        >
          <input
            type="search"
            placeholder="Search Amazon"
            aria-label="Search Amazon"
          />
          <button type="submit" aria-label="Search">
            <svg viewBox="0 0 24 24" fill="none" stroke="#131921" strokeWidth="2.5">
              <circle cx="11" cy="11" r="7" />
              <path d="M20 20l-3.5-3.5" strokeLinecap="round" />
            </svg>
          </button>
        </form>

        <div className="header__option header__option--account" tabIndex={0}>
          <span className="header__line-top">Hello, sign in</span>
          <span className="header__line-bottom">Account &amp; Lists</span>
        </div>

        <div className="header__option header__option--orders" tabIndex={0}>
          <span className="header__line-top">Returns</span>
          <span className="header__line-bottom">&amp; Orders</span>
        </div>

        <button
          type="button"
          className="header__cart"
          aria-label={`Cart, ${cartCount} items`}
          onClick={onCartClick}
        >
          <div className="header__cart-icon">
            <svg viewBox="0 0 40 32" fill="none" aria-hidden="true">
              <path
                d="M2 2h4l3.5 18h22l3-12H10"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="15" cy="28" r="2.5" fill="#fff" />
              <circle cx="29" cy="28" r="2.5" fill="#fff" />
            </svg>
            <span className="header__cart-count">{cartCount}</span>
          </div>
          <span className="header__cart-label">Cart</span>
        </button>
      </div>
    </header>
  )
}

export default Header

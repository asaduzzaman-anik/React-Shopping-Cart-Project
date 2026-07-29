import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__grid">
          <div className="footer__brand-col">
            <Link to="/" className="footer__brand" aria-label="Amazon home">
              <img
                className="footer__logo"
                src="/images/amazon-logo.png"
                alt="Amazon"
              />
            </Link>
            <p className="footer__tagline">
              Your one-stop e-commerce platform for trending products at
              unbeatable prices.
            </p>
            <p className="footer__social-label">Connect with us</p>
            <div className="footer__socials">
              <a href="#facebook" aria-label="Facebook" className="footer__social">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H9v3h2v7h3v-7h2.5l.5-3H14V9z" />
                </svg>
              </a>
              <a href="#instagram" aria-label="Instagram" className="footer__social">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.9a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
                </svg>
              </a>
              <a href="#twitter" aria-label="X" className="footer__social">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18.2 2H21l-6.6 7.5L22 22h-6.2l-4.9-6.4L5.5 22H2.7l7-8L2 2h6.3l4.4 5.8L18.2 2zm-1.1 18h1.7L7 3.9H5.2L17.1 20z" />
                </svg>
              </a>
              <a href="#tiktok" aria-label="TikTok" className="footer__social">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M16.5 3c.4 2.4 1.8 4.1 4.1 4.5v2.6c-1.4.1-2.7-.3-4-1.1v6.5c0 3.5-2.8 6.3-6.3 6.3S4 19 4 15.5 6.8 9.2 10.3 9.2c.3 0 .7 0 1 .1v2.8c-.3-.1-.7-.2-1-.2-2 0-3.5 1.6-3.5 3.6s1.6 3.6 3.5 3.6 3.5-1.6 3.5-3.6V3h2.7z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="footer__col">
            <h3 className="footer__heading">Quick Links</h3>
            <ul className="footer__links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">Products</Link>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          <div className="footer__col">
            <h3 className="footer__heading">Categories</h3>
            <ul className="footer__links">
              <li>
                <a href="#smartphones">Smartphones</a>
              </li>
              <li>
                <a href="#tablets">Tablets</a>
              </li>
              <li>
                <a href="#accessories">Accessories</a>
              </li>
              <li>
                <a href="#wearables">Wearables</a>
              </li>
            </ul>
          </div>

          <div className="footer__col">
            <h3 className="footer__heading">Subscribe to our Newsletter</h3>
            <p className="footer__newsletter-text">
              Get the latest deals and trending products.
            </p>
            <form
              className="footer__newsletter"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                name="email"
                placeholder="Your email"
                aria-label="Email address"
                className="footer__email"
              />
              <button type="submit" className="footer__subscribe">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <p className="footer__copy">
          &copy; {new Date().getFullYear()} Amazon. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer

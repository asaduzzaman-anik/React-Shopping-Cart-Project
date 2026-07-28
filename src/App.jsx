import { useState, useRef } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Toast from './components/Toast'
import Home from './pages/Home'
import Cart from './pages/Cart'
import './App.css'

let toastId = 0

function App() {
  const [cart, setCart] = useState([])
  const [toasts, setToasts] = useState([])
  const toastTimers = useRef(new Map())

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id))
    const timer = toastTimers.current.get(id)
    if (timer) {
      clearTimeout(timer)
      toastTimers.current.delete(id)
    }
  }

  const showToast = (message) => {
    const id = ++toastId
    setToasts((prev) => [...prev, { id, message }])

    const timer = setTimeout(() => {
      removeToast(id)
    }, 2500)

    toastTimers.current.set(id, timer)
  }

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id)
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        )
      }
      return [...prev, { ...product, quantity: 1 }]
    })

    showToast('Product has been added to cart')
  }

  const increaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    )
  }

  const decreaseQty = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity > 0),
    )
  }

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id))
  }

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  )

  return (
    <>
      <Header cartCount={totalItems} />
      <Toast toasts={toasts} onClose={removeToast} />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home onAddToCart={addToCart} />} />
          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                totalItems={totalItems}
                totalPrice={totalPrice}
                onIncrease={increaseQty}
                onDecrease={decreaseQty}
                onRemove={removeFromCart}
              />
            }
          />
        </Routes>
      </main>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} React Shopping Cart Project</p>
      </footer>
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import { products as defaultProducts } from './data/products'
import ProductList from './components/ProductList'
import Cart from './components/Cart'

type CartState = Record<string, number>

function App() {
  const [cart, setCart] = useState<CartState>({})
  const [showCart, setShowCart] = useState(false)

  function addToCart(productId: string) {
    setCart((prev) => ({ ...prev, [productId]: (prev[productId] || 0) + 1 }))
  }

  function removeFromCart(productId: string) {
    setCart((prev) => {
      const copy = { ...prev }
      delete copy[productId]
      return copy
    })
  }

  function setQuantity(productId: string, quantity: number) {
    setCart((prev) => {
      const copy = { ...prev }
      if (quantity <= 0) delete copy[productId]
      else copy[productId] = quantity
      return copy
    })
  }

  const totalItems = Object.values(cart).reduce((s, q) => s + q, 0)

  return (
    <div id="app-root">
      <header className="app-header">
        <h1>00 — Tienda de prueba</h1>
        <div className="cart-summary">
          <button onClick={() => setShowCart((s) => !s)}>
            Cesta ({totalItems})
          </button>
        </div>
      </header>

      <main>
        <ProductList products={defaultProducts} onAdd={addToCart} />
      </main>

      <Cart
        open={showCart}
        cart={cart}
        products={defaultProducts}
        onClose={() => setShowCart(false)}
        onRemove={removeFromCart}
        onSetQuantity={setQuantity}
      />
    </div>
  )
}

export default App

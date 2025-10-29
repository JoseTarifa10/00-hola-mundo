import type { Product } from '../data/products'

type Props = {
  open: boolean
  cart: Record<string, number>
  products: Product[]
  onClose: () => void
  onRemove: (id: string) => void
  onSetQuantity: (id: string, qty: number) => void
}

export default function Cart({ open, cart, products, onClose, onRemove, onSetQuantity }: Props) {
  if (!open) return null

  const items = Object.entries(cart).map(([id, qty]) => {
    const product = products.find((p) => p.id === id)!
    return { product, qty }
  })

  const total = items.reduce((s, it) => s + it.product.price * it.qty, 0)

  return (
    <aside className="cart-panel">
      <div className="cart-header">
        <h2>Tu cesta</h2>
        <button onClick={onClose}>Cerrar</button>
      </div>

      {items.length === 0 ? (
        <p className="muted">La cesta está vacía.</p>
      ) : (
        <ul className="cart-items">
          {items.map(({ product, qty }) => (
            <li key={product.id} className="cart-item">
              <div>
                <strong>{product.name}</strong>
                <div className="muted">{product.price.toFixed(2)} €</div>
              </div>
              <div className="cart-controls">
                <button onClick={() => onSetQuantity(product.id, qty - 1)}>-</button>
                <span className="qty">{qty}</span>
                <button onClick={() => onSetQuantity(product.id, qty + 1)}>+</button>
                <button className="remove" onClick={() => onRemove(product.id)}>Eliminar</button>
              </div>
            </li>
          ))}
        </ul>
      )}

      <div className="cart-footer">
        <strong>Total: {total.toFixed(2)} €</strong>
        <button disabled={items.length === 0}>Pagar</button>
      </div>
    </aside>
  )
}

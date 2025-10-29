import type { Product } from '../data/products'

type Props = {
  product: Product
  onAdd: (id: string) => void
}

export default function ProductCard({ product, onAdd }: Props) {
  return (
    <article className="product-card">
      {product.image && (
        <img src={product.image} alt={product.name} className="product-image" />
      )}
      <h3>{product.name}</h3>
      <p className="muted">{product.description}</p>
      <div className="product-footer">
        <strong>{product.price.toFixed(2)} €</strong>
        <button onClick={() => onAdd(product.id)}>Añadir a la cesta</button>
      </div>
    </article>
  )
}

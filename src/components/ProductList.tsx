import type { Product } from '../data/products'
import ProductCard from './ProductCard'

type Props = {
  products: Product[]
  onAdd: (id: string) => void
}

export default function ProductList({ products, onAdd }: Props) {
  return (
    <section className="product-list">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} onAdd={onAdd} />
      ))}
    </section>
  )
}

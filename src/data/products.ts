export type Product = {
  id: string
  name: string
  price: number
  description?: string
  image?: string
}

export const products: Product[] = [
  {
    id: 'p1',
    name: 'Camiseta Reactiva',
    price: 19.99,
    description: 'Camiseta cómoda con logo de ejemplo',
    image: '/vite.svg',
  },
  {
    id: 'p2',
    name: 'Taza de café',
    price: 9.5,
    description: 'Taza para tu bebida favorita',
    image: '/public/vite.svg',
  },
  {
    id: 'p3',
    name: 'Pegatina',
    price: 2.0,
    description: 'Pegatina pequeña para tu portátil',
  },
  {
    id: 'p4',
    name: 'Bolsa de tela',
    price: 7.25,
    description: 'Bolsa reutilizable para la compra',
  },
]

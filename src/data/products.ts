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
    description: 'Camiseta cómoda de algodón 100%, perfecta para desarrolladores',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400',
  },
  {
    id: 'p2',
    name: 'Taza de café',
    price: 9.5,
    description: 'Taza de cerámica de alta calidad para tu café diario',
    image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400',
  },
  {
    id: 'p3',
    name: 'Pack de Pegatinas Dev',
    price: 2.0,
    description: 'Set de pegatinas de alta calidad con logos de tecnologías web',
    image: 'https://images.unsplash.com/photo-1626725451777-69cd2e54f40f?w=400',
  },
  {
    id: 'p4',
    name: 'Bolsa de tela',
    price: 7.25,
    description: 'Bolsa de algodón orgánico resistente y ecológica',
    image: 'https://images.unsplash.com/photo-1579623261984-41f9a81d4044?w=400',
  },
  {
    id: 'p5',
    name: 'Sudadera con Capucha',
    price: 39.99,
    description: 'Sudadera cómoda y caliente, perfecta para largas sesiones de código',
    image: 'https://images.unsplash.com/photo-1578681994506-b8f463449011?w=400',
  },
  {
    id: 'p6',
    name: 'Mousepad XL',
    price: 14.99,
    description: 'Alfombrilla grande para ratón, ideal para trabajo y gaming',
    image: 'https://images.unsplash.com/photo-1616788494672-ec7ca25fdda9?w=400',
  }
]

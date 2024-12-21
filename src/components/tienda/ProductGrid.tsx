import ProductCard from '@/components/tienda/ProductCard'

// This would typically come from an API or database
const products = [
  { id: 1, name: 'Zapatillas Deportivas', description: 'Zapatillas cómodas para correr', price: 89.99, image: '/img/travis.jpg' },
  { id: 2, name: 'Camiseta Técnica', description: 'Camiseta transpirable para entrenamiento', price: 29.99, image: '/placeholder.svg?height=300&width=300' },
  { id: 3, name: 'Pantalones de Yoga', description: 'Pantalones elásticos para yoga', price: 49.99, image: '/placeholder.svg?height=300&width=300' },
  // Add more products as needed
]

export default function ProductGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}


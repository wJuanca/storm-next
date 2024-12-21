import Image from 'next/image'
import AddToCartButton from '@/components/tienda/AddToCartButton'

// Función simulada para obtener el producto por id
function getProductById(id: number) {
  // Esta función simularía una llamada a la API o base de datos
  const products = [
    {
      id: 1,
      name: 'Zapatillas Deportivas',
      description: 'Zapatillas cómodas para correr con tecnología de amortiguación avanzada.',
      price: 89.99,
      sizes: ['36', '37', '38', '39', '40', '41', '42', '43', '44'],
      images: [
        '/img/travis.jpg',
        '/img/travis2.jpg',
        '/img/travis3.jpg',
        '/img/travis4.jpg'
      ]
    },
    // Agrega más productos aquí si lo deseas
  ]

  return products.find(p => p.id === id)
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  // Esperamos a que se resuelva el params
  const { id } = await params
  
  // Simula obtener los datos del producto basado en el id
  const product = getProductById(parseInt(id))

  if (!product) {
    return <div>Producto no encontrado</div>
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <Image
              src={product.images[0]}
              alt={product.name}
              width={600}
              height={600}
              className="w-full rounded-lg"
            />
            <div className="grid grid-cols-3 gap-4">
              {product.images.slice(1).map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt={`${product.name} - Image ${index + 2}`}
                  width={200}
                  height={200}
                  className="w-full rounded-lg"
                />
              ))}
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-gray-400 mb-4">{product.description}</p>
            <p className="text-2xl font-bold mb-4">${product.price.toFixed(2)}</p>
            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-2">Tallas disponibles</h2>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    className="px-4 py-2 border border-gray-600 rounded-md hover:bg-gray-800"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Envíos disponibles a nivel nacional. Entrega estimada: 3-5 días hábiles.
            </p>
            <div className="flex gap-4">
              <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">
                Comprar ahora
              </button>
              <AddToCartButton productId={product.id} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


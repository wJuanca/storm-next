'use client'

import { useState } from 'react'
import { ShoppingCart } from 'lucide-react'

export default function AddToCartButton({ productId }: { productId: number }) {
  const [isAdded, setIsAdded] = useState(false)

  const handleAddToCart = () => {
    // Implement add to cart functionality here
    console.log('Added product to cart:', productId)
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 2000)
  }

  return (
    <button
      onClick={handleAddToCart}
      className={`flex items-center gap-2 px-6 py-2 rounded-md ${
        isAdded ? 'bg-green-500' : 'bg-gray-800 hover:bg-gray-700'
      }`}
    >
      <ShoppingCart className="w-5 h-5" />
      {isAdded ? 'Agregado' : 'Agregar al carrito'}
    </button>
  )
}


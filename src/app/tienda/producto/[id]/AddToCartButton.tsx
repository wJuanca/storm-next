'use client';

import { useState } from "react";
import { ShoppingCart } from 'lucide-react';

export default function AddToCartButton({ productId }: { productId: string }) {
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    // Implementar funcionalidad para agregar al carrito
    console.log("Producto agregado al carrito:", productId);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <button
      onClick={handleAddToCart}
      className={`flex items-center gap-2 px-6 py-2 rounded-md ${
        isAdded ? "bg-green-500" : "bg-gray-800 hover:bg-gray-700"
      }`}
    >
      <ShoppingCart className="w-5 h-5" />
      {isAdded ? "Agregado" : "Agregar al carrito"}
    </button>
  );
}


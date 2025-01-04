'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Product } from '@/app/tienda/types';
import AddToCartButton from './AddToCartButton';

export default function ProductDetails({ product }: { product: Product }) {
  const [selectedImage, setSelectedImage] = useState<string>(product.image);

  const images = [
    product.image,
    product.image2,
    product.image3,
    product.image4,
  ].filter(Boolean) as string[];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="space-y-4">
        <Image
          src={selectedImage}
          alt={product.name}
          width={600}
          height={600}
          className="w-full max-w-md mx-auto rounded-lg shadow-lg"
        />
        <div className="grid grid-cols-4 gap-4">
          {images.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`${product.name} - Vista ${index + 1}`}
              width={150}
              height={150}
              className="w-full rounded-lg cursor-pointer transition-transform hover:scale-105"
              onClick={() => setSelectedImage(image)}
            />
          ))}
        </div>
      </div>

      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4 text-blue-400">{product.name}</h1>
        <p className="text-gray-300 mb-4 leading-relaxed">{product.description}</p>
        <p className="text-3xl font-bold mb-4 text-green-400">${product.price.toFixed(2)}</p>

        {product.sizes && (
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2 text-blue-300">Tallas disponibles</h2>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  className="px-4 py-2 border border-blue-500 rounded-md hover:bg-blue-600 transition-colors"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="bg-gray-700 p-4 rounded-lg mb-6">
          <h2 className="text-xl font-semibold mb-2 text-yellow-300">Información de envío</h2>
          <p className="text-gray-300">
            Envíos disponibles a nivel nacional.
            <span className="block mt-2 font-semibold text-yellow-200">
              Entrega estimada: 3-5 días hábiles.
            </span>
          </p>
        </div>

        <div className="flex gap-4">
          <button className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-colors flex-1">
            Comprar ahora
          </button>
          <AddToCartButton productId={product.id} />
        </div>
      </div>
    </div>
  );
}


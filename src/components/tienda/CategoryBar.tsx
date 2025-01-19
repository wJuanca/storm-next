'use client'
import { useState } from 'react'

const categories = [
  'Todos', 'Ropa Deportiva', 'Zapatos', 'Accesorios', 'Hombre', 'Mujer', 'Niños'
]

interface CategoryBarProps {
  onCategoryChange: (category: string) => void;
}

export default function CategoryBar({ onCategoryChange }: CategoryBarProps) {
  const [selectedCategory, setSelectedCategory] = useState('Todos')

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    onCategoryChange(category);
  }


return (
  <div className="w-full md:w-64 mb-8 md:mb-0">
    <h2 className="text-xl font-semibold mb-4">Categorías</h2>
    <ul className="space-y-2">
      {categories.map((category) => (
        <li key={category}>
          <button
            onClick={() => handleCategoryClick(category)}
            className={`w-full text-left py-2 px-4 rounded ${
              selectedCategory === category
                ? 'bg-blue-500 text-white'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            {category}
          </button>
        </li>
      ))}
    </ul>
  </div>
)
}

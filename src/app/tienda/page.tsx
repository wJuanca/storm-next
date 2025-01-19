'use client'

import { useState } from 'react'
import SearchBar from '@/components/tienda/SearchBar'
import CategoryBar from '@/components/tienda/CategoryBar'
import ProductGrid from '@/components/tienda/ProductGrid'
import Navbar from '@/components/Navbar'

export default function StorePage() {
  const [selectedCategory, setSelectedCategory] = useState('Todos')

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Nuestra Tienda</h1>
        <SearchBar />
        <div className="flex flex-col md:flex-row gap-8 mt-8">
          <CategoryBar onCategoryChange={handleCategoryChange} />
          <ProductGrid selectedCategory={selectedCategory} />
        </div>
      </div>
    </div>
  )
}


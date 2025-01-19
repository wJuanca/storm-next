"use client"

import { useState, useEffect } from "react"
import { collection, getDocs } from "firebase/firestore"
import { db } from "@/app/lib/firebase"
import SearchBar from "@/components/tienda/SearchBar"
import CategoryBar from "@/components/tienda/CategoryBar"
import ProductGrid from "@/components/tienda/ProductGrid"
import Navbar from "@/components/Navbar"
import type { Product } from "@/app/tienda/types"

export default function StorePage() {
  const [selectedCategory, setSelectedCategory] = useState("Todos")
  const [searchTerm, setSearchTerm] = useState("")
  const [products, setProducts] = useState<Product[]>([])
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])

  useEffect(() => {
    const fetchProducts = async () => {
      const querySnapshot = await getDocs(collection(db, "products"))
      const productsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Product[]
      setProducts(productsData)
    }

    fetchProducts()
  }, [])

  useEffect(() => {
    const filtered = products.filter((product) => {
      const matchesCategory = selectedCategory === "Todos" || product.category === selectedCategory
      const matchesSearch =
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
      return matchesCategory && matchesSearch
    })
    setFilteredProducts(filtered)
  }, [selectedCategory, searchTerm, products])

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
  }

  const handleSearch = (term: string) => {
    setSearchTerm(term)
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Nuestra Tienda</h1>
        <SearchBar onSearch={handleSearch} />
        <div className="flex flex-col md:flex-row gap-8 mt-8">
          <CategoryBar onCategoryChange={handleCategoryChange} />
          <ProductGrid products={filteredProducts} />
        </div>
      </div>
    </div>
  )
}


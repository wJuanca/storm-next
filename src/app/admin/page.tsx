import { Suspense } from 'react'
import ProductList from '@/components/admin/ProductList'
import AddProductForm from '@/components/admin/AddProductFrom'
import { SearchBar } from '@/components/admin/SearchBar'

export default function AdminProductsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
    <h1 className="text-3xl font-bold mb-8 text-black text-center">Adminitracion de Productos</h1>
    <AddProductForm />
    <SearchBar />
    <Suspense fallback={<div>Cargando productos...</div>}>
    <ProductList />
    </Suspense>
    </div>
  )
}
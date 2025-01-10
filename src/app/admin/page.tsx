import { Suspense } from 'react'
import ProductList from './components/ProductList'
import AddProductForm from './components/AddProductForm'


export default function AdminProductsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-black">Administración de Productos</h1>
      <AddProductForm />

      <Suspense fallback={<div>Cargando productos...</div>}>
        <ProductList />
      </Suspense>
    </div>
  )
}


'use client'

import { useState, useEffect } from 'react'
import { collection, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore'
import { db } from '@/app/lib/firebase'
import { useSearchParams } from 'next/navigation'

interface Product {
  id: string
  name: string
  category: string
  description: string
  image: string
  image2: string
  image3: string
  image4: string
  price: number
  sizes: string[]
  hidden: boolean
}

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([])
  const [editingProduct, setEditingProduct] = useState<Product | null>(null)
  const searchParams = useSearchParams()
  const search = searchParams.get('search')

  useEffect(() => {
    const fetchProducts = async () => {
      const querySnapshot = await getDocs(collection(db, 'products'))
      const productsData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Product[]

      if (search) {
        const filteredProducts = productsData.filter(product =>
          product.name.toLowerCase().includes(search.toLowerCase()) ||
          product.category.toLowerCase().includes(search.toLowerCase())
        )
        setProducts(filteredProducts)
      } else {
        setProducts(productsData)
      }
    }

    fetchProducts()
  }, [search])

  const toggleHidden = async (id: string, currentHidden: boolean) => {
    await updateDoc(doc(db, 'products', id), {
      hidden: !currentHidden
    })
    setProducts(products.map(product =>
      product.id === id ? { ...product, hidden: !currentHidden } : product
    ))
  }

  const deleteProduct = async (id: string) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar este producto?')) {
      await deleteDoc(doc(db, 'products', id))
      setProducts(products.filter(product => product.id !== id))
    }
  }

  const openEditForm = (product: Product) => {
    setEditingProduct(product)
  }

  const handleEdit = async (updatedProduct: Product) => {
    try {
      const { id, ...productWithoutId } = updatedProduct;
      await updateDoc(doc(db, 'products', id), productWithoutId);
      setProducts(products.map(product =>
        product.id === id ? updatedProduct : product
      ));
      setEditingProduct(null);
    } catch (error) {
      console.error('Error al actualizar el producto:', error);
      alert('Error al actualizar el producto');
    }
  };

  /*Tabla de las donde se muestran los productos*/
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white text-black">
        <thead>
          <tr>
            <th className="px-4 py-2">Nombre</th>
            <th className="px-4 py-2">Categoría</th>
            <th className="px-4 py-2">Precio</th>
            <th className="px-4 py-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id} className={product.hidden ? 'bg-gray-200' : ''}>
              <td className="border px-4 py-2">{product.name}</td>
              <td className="border px-4 py-2">{product.category}</td>
              <td className="border px-4 py-2">${product.price.toFixed(2)}</td>
              <td className="border px-4 py-2">
                <button
                  onClick={() => toggleHidden(product.id, product.hidden)}
                  className="mr-2 p-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                >
                  {product.hidden ? 'Mostrar' : 'Ocultar'}
                </button>
                <button
                  onClick={() => openEditForm(product)}
                  className="mr-2 p-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Modificar
                </button>
                <button
                  onClick={() => deleteProduct(product.id)}
                  className="p-1 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>


      {editingProduct && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full text-black">
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <h3 className="text-lg font-bold mb-4">Editar Producto</h3>
            <form onSubmit={(e) => {
              e.preventDefault()
              handleEdit(editingProduct)
            }}>
              <input
                type="text"
                value={editingProduct.name}
                onChange={(e) => setEditingProduct({...editingProduct, name: e.target.value})}
                className="w-full p-2 mb-2 border rounded"
                placeholder="Nombre"
              />
              <input
                type="text"
                value={editingProduct.category}
                onChange={(e) => setEditingProduct({...editingProduct, category: e.target.value})}
                className="w-full p-2 mb-2 border rounded"
                placeholder="Categoría"
              />
              <textarea
                value={editingProduct.description}
                onChange={(e) => setEditingProduct({...editingProduct, description: e.target.value})}
                className="w-full p-2 mb-2 border rounded"
                placeholder="Descripción"
              />
              <input
                type="number"
                value={editingProduct.price}
                onChange={(e) => setEditingProduct({...editingProduct, price: parseFloat(e.target.value)})}
                className="w-full p-2 mb-2 border rounded"
                placeholder="Precio"
              />
              <input
                type="text"
                value={editingProduct.sizes.join(', ')}
                onChange={(e) => setEditingProduct({...editingProduct, sizes: e.target.value.split(',').map(s => s.trim())})}
                className="w-full p-2 mb-2 border rounded"
                placeholder="Tallas (separadas por comas)"
              />
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setEditingProduct(null)}
                  className="mr-2 p-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Guardar Cambios
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}


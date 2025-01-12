'use client'

import { useState } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '@/app/lib/firebase'

export default function AddProductForm() {
  const [product, setProduct] = useState<{
    name: string;
    category: string;
    description: string;
    image: string;
    image2: string;
    image3: string;
    image4: string;
    price: number;
    sizes: string[];
  }>({
    name: '',
    category: '',
    description: '',
    image: '',
    image2: '',
    image3: '',
    image4: '',
    price: 0,
    sizes: [],
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: name === "price" ? parseFloat(value) : value,
    }));
  };

  const handleSizesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const sizes = e.target.value.split(",").map((size) => size.trim());
    setProduct((prev) => ({ ...prev, sizes }));
  };

  const habdleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "products"), product);
      alert("El producto se agregó correctamente");
      setProduct({
        name: "",
        category: "",
        description: "",
        image: "",
        image2: "",
        image3: "",
        image4: "",
        price: 0,
        sizes: [],
      });
    } catch (error) {
      console.error("Error al agregar el producto", error);
      alert("Error al agregar el producto");
    }
  };

  return (
    <form onSubmit={habdleSubmit} className="mb-8 p-4 bg-white shadow rounded">
      <div className="grid grid-cols-2 gap-4 text-black">
        <input
          type="text"
          name="name"
          value={product.name}
          onChange={handleChange}
          placeholder="Nombre del producto"
          className="border p-2 rounded"
          required
        />
        <input
          type="text"
          name="category"
          value={product.category}
          onChange={handleChange}
          placeholder="Categoría"
          className="border p-2 rounded"
          required
        />
        <textarea
          name="description"
          value={product.description}
          onChange={handleChange}
          placeholder="Descripción"
          className="border p-2 rounded col-span-2"
          required
        />
        <input
          type="text"
          name="image"
          value={product.image}
          onChange={handleChange}
          placeholder="URL de la imagen principal"
          className="border p-2 rounded"
          required
        />
        <input
          type="text"
          name="image2"
          value={product.image2}
          onChange={handleChange}
          placeholder="URL de la imagen 2"
          className="border p-2 rounded"
          required
        />
        <input
          type="text"
          name="image3"
          value={product.image3}
          onChange={handleChange}
          placeholder="URL de la imagen 3"
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="image4"
          value={product.image4}
          onChange={handleChange}
          placeholder="URL de la imagen 4"
          className="border p-2 rounded"
        />
        <input
          type="number"
          name="price"
          value={product.price}
          onChange={handleChange}
          placeholder="Precio"
          className="border p-2 rounded"
          required
        />
        <input
          type="text"
          name="sizes"
          value={product.sizes.join(", ")}
          onChange={handleSizesChange}
          placeholder="Tallas (separadas por coma)"
          className="border p-2 rounded"
          required
        />
      </div>
      <button
        type="submit"
        className="mt-4 bg-blue-500 text-white p-2 rounded haver:bg-blue-600"
      >
        Agregar Producto
      </button>
    </form>
  );
}

'use client'
import { useEffect, useState } from "react"
import { collection, getDocs } from "firebase/firestore"
import { db } from "@/app/lib/firebase"
import ProductCard from "./ProductCard"
import { Product } from "@/app/tienda/types"

interface ProductGridProps {
  selectedCategory: string;
}

export default function ProductGrid({ selectedCategory }: ProductGridProps) {
const [products, setProducts] = useState<Product[]>([]);
const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

useEffect(()=> {
  const fetchProducts = async () => {
    const querySnapshot = await getDocs(collection(db, "products"));
    const productsData = querySnapshot.docs.map((doc)=> ({
      id: doc.id,
      ...doc.data()
    })) as Product[];
    setProducts(productsData);
  };
  fetchProducts();
}, []);


useEffect(() =>{
  if (selectedCategory === 'Todos'){
    setFilteredProducts(products);
  } else{
    const filtered = products.filter(products => products.category === selectedCategory);
    setFilteredProducts(filtered);
  }
}, [selectedCategory, products]);


return(
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {filteredProducts.map((product) =>(
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
)
}
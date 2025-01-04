import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '@/app/lib/firebase';
import ProductDetails from './ProducDetails';
import { Product } from '@/app/tienda/types';

async function getProduct(id: string): Promise<Product | null> {
  const docRef = doc(db, 'products', id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() as Omit<Product, 'id'> };
  }

  return null;
}

export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-4 py-8">
        <Suspense fallback={<div>Cargando...</div>}>
          <ProductDetails product={product} />
        </Suspense>
      </div>
    </div>
  );
}


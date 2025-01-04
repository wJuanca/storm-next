// /app/tienda/[id]/page.tsx
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/app/lib/firebase";
import Image from "next/image";

export default async function ProductPage({ params }: { params: { id: string } }) {
  const docRef = doc(db, "products", params.id);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    return <div>Producto no encontrado</div>;
  }

  const product = docSnap.data();

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <Image
              src={product.image}
              alt={product.name}
              width={600}
              height={600}
              className="w-full rounded-lg"
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-gray-400 mb-4">{product.description}</p>
            <p className="text-2xl font-bold mb-4">${product.price.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

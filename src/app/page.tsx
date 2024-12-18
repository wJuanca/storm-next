import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="max-w-xl">
            <h1 className="text-8xl font-bold mb-8">STORM</h1>

            <p className="text-gray-300 text-lg mb-10 leading-relaxed">
              En Storm, te equipamos para enfrentar cualquier desafío. Descubre
              nuestra colección de ropa y calzado deportivo diseñada para
              potenciar tu rendimiento y estilo, tanto dentro como fuera del
              campo. Ya sea que entrenes, compitas o simplemente vivas con.
            </p>
            <button className="bg-gray-200 text-black px-12 py-3 text-lg font-bold uppercase tracking-wider hover:bg-gray-300 transition-colors">
              Comprar
            </button>
          </div>

          {/* Right Image */}
          <div className="mt-12 lg:mt-0 lg:ml-12">
            <Image
              src="/img/z1.png"
              alt="Storm Sneaker"
              width={600}
              height={600}
              className="w-auto h-auto max-w-2xl transform rotate-[-25deg]"
              priority
            />
          </div>
        </div>
      </section>
    </main>
  );
}

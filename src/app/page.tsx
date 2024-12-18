import Navbar from "@/components/Navbar";
import ImageCarousel from "@/components/ImageCarousel";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <section className="container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="max-w-xl">
            <h1 className="font-bebas-neue text-8xl font-bold mb-8">STORM</h1>
            <p className="font-montserrat text-gray-300 text-lg mb-10 leading-relaxed">
              En Storm, te equipamos para enfrentar cualquier desafío. Descubre
              nuestra colección de ropa y calzado deportivo diseñada para
              potenciar tu rendimiento y estilo, tanto dentro como fuera del
              campo. Ya sea que entrenes, compitas o simplemente vivas con.
            </p>
            <button className="font-montserrat bg-gray-200 text-black px-12 py-3 text-lg font-bold uppercase tracking-wider hover:bg-gray-300 transition-colors rounded-custom">
              Comprar
            </button>
          </div>

          {/* Right Image */}
          <ImageCarousel />
        </div>
      </section>
    </main>
  );
}
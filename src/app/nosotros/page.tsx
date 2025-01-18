import Navbar from "@/components/Navbar";
import BentoGrid from "@/components/nosotros/BentoGrid";
import AnimatedSection from "@/components/nosotros/AnimatedSection";
import Timeline from "@/components/nosotros/Timeline";
import TeamGrid from "@/components/nosotros/TeamGrid";
import { Button } from "@/components/nosotros/Button";
import Image from "next/image"; 
import Footer from "@/components/Footer";


export default function NosotrosPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <Navbar />

    <main className="min-h-screen bg-black text-white">
      <AnimatedSection>
        <div className="relative h-screen flex items-center justify-center overflow-hidden">
          <video 
            autoPlay 
            loop 
            muted 
            className="absolute w-auto min-w-full min-h-full max-w-none"
          >
            <source src="/videos/storm-hero.mp4" type="video/mp4" />
            Tu navegador no soporta el tag de video.
          </video>
          <div className="z-10 text-center">
            <h1 className="text-6xl font-bold mb-4">Nosotros - Storm</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Redefiniendo el streetwear para la era digital
            </p>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div className="py-20 px-4">
          <h2 className="text-4xl font-bold text-center mb-10">Nuestra Historia</h2>
          <Timeline />
        </div>
      </AnimatedSection>

      <BentoGrid>
      <div className="col-span-1 md:col-span-2 lg:row-span-2 bg-gradient-to-br from-purple-600 to-blue-500 p-6 md:p-8 rounded-xl flex flex-col justify-between">
          <div className="space-y-6 md:space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">Nuestra Misión</h2>
              <p className="text-lg">
                En Storm, nuestra misión es revolucionar la moda streetwear, empoderando a cada individuo 
                para expresar su autenticidad a través de diseños vanguardistas y experiencias de compra inmersivas. 
                Nos esforzamos por fusionar la cultura urbana con la innovación tecnológica, creando prendas que 
                no solo se visten, sino que se viven.
              </p>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-4">Nuestra Visión</h2>
              <p className="text-lg">
                Visualizamos un futuro donde la moda streetwear trasciende las barreras tradicionales, 
                convirtiéndose en una forma de expresión digital y física. Aspiramos a ser líderes en 
                la integración de tecnología wearable, sostenibilidad y diseño vanguardista, creando 
                una comunidad global de individuos que se expresan libremente a través de nuestra moda.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-gray-800 p-6 rounded-xl flex flex-col items-center justify-center">
          <Image
            src="/img/innovador.jpg"
            alt="Diseño Storm"
            width={300}
            height={300}
            className="rounded-lg w-full h-auto max-w-[200px] mb-4"
          />
          <h3 className="text-2xl font-bold mb-2 text-center">Diseño Innovador</h3>
        </div>
        <div className="bg-gray-800 p-6 rounded-xl">
          <h3 className="text-2xl font-bold mb-2">Innovación</h3>
          <p className="text-sm md:text-base">
            Nuestro laboratorio de diseño utiliza tecnología de vanguardia como impresión 3D y 
            tejidos inteligentes para crear prendas que desafían los límites de la moda tradicional.
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-xl">
          <h3 className="text-2xl font-bold mb-2">Sostenibilidad</h3>
          <p className="text-sm md:text-base">
            Utilizamos materiales reciclados y procesos de producción eco-friendly. 
            Nuestro objetivo es alcanzar cero residuos para 2025.
          </p>
        </div>
        <div className="col-span-1 md:col-span-2 bg-gradient-to-r from-green-400 to-blue-500 p-6 rounded-xl">
          <h2 className="text-3xl font-bold mb-4 text-center">Nuestro Impacto</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-4xl font-bold">500K+</p>
              <p>Clientes satisfechos</p>
            </div>
            <div>
              <p className="text-4xl font-bold">50+</p>
              <p>Países alcanzados</p>
            </div>
            <div>
              <p className="text-4xl font-bold">1M+</p>
              <p>Prendas vendidas</p>
            </div>
          </div>
        </div>
      </BentoGrid>

      <AnimatedSection>
        <div className="py-20 px-4">
          <h2 className="text-4xl font-bold text-center mb-10">Nuestro Equipo</h2>
          <TeamGrid />
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div className="text-center py-20 px-4">
          <h2 className="text-4xl font-bold mb-6">Únete a la Revolución Storm</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            No solo vendemos ropa, creamos un movimiento. Sé parte de nuestra comunidad 
            y define el futuro de la moda urbana. Únete a nosotros en eventos exclusivos, 
            colaboraciones con artistas y experiencias de realidad aumentada que fusionan 
            el mundo físico y digital de la moda.
          </p>
          <Button size="lg">Explora Nuestra Colección</Button>
        </div>
      </AnimatedSection>
      <Footer />
    </main>
    </div>
  )
}



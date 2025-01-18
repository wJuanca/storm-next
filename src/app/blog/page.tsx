'use client'

import { motion } from 'framer-motion'
import { useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import Navbar from '@/components/Navbar'

// Event type definition
type Event = {
  id: number
  title: string
  date: string
  description: string
  image: string
}

// Comment type definition
type Comment = {
  id: number
  text: string
  userName: string
  userImage: string
}

export default function BlogPage() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  // Sample events data
  const events: Event[] = [
    {
      id: 1,
      title: "Lanzamiento de Nueva Colección",
      date: "15 Enero 2024",
      description: "Únete a nosotros para el lanzamiento exclusivo de nuestra nueva colección de invierno. Presentaremos las últimas tendencias en tecnología y diseño.",
      image: "/img/events.jpg"
    },
    {
      id: 2,
      title: "Workshop de Innovación",
      date: "22 Enero 2024",
      description: "Un taller interactivo donde exploraremos las últimas tendencias en innovación tecnológica y desarrollo creativo.",
      image: "/img/events.jpg"
    },
    {
      id: 3,
      title: "Tech Summit 2024",
      date: "5 Febrero 2024",
      description: "La conferencia más importante del año donde compartiremos conocimientos sobre las últimas tecnologías emergentes.",
      image: "/img/events.jpg"
    },
    {
      id: 4,
      title: "Hackathon Storm",
      date: "18 Febrero 2024",
      description: "48 horas de creatividad, innovación y desarrollo. Únete a equipos de talentosos desarrolladores y crea algo increíble.",
      image: "/img/events.jpg"
    }
  ]

  // Sample comments data
  const comments: Comment[] = [
    {
      id: 1,
      text: "Increíble contenido, siempre aprendo algo nuevo en cada visita al blog.",
      userName: "Ana García",
      userImage: "/img/photo.jpg"
    },
    {
      id: 2,
      text: "Los artículos son muy informativos y están muy bien explicados.",
      userName: "Carlos Ruiz",
      userImage: "/img/photo.jpg"
    },
    {
      id: 3,
      text: "Me encanta la manera en que presentan la información técnica.",
      userName: "María Torres",
      userImage: "/img/photo.jpg"
    },
    {
      id: 4,
      text: "Excelente recurso para mantenerse actualizado en tecnología.",
      userName: "David López",
      userImage: "/img/photo.jpg"
    },
    {
      id: 5,
      text: "Los tutoriales son muy útiles y fáciles de seguir.",
      userName: "Laura Martínez",
      userImage: "/img/photo.jpg"
    },
    {
      id: 6,
      text: "Siempre encuentro inspiración en los artículos de Storm.",
      userName: "Pedro Sánchez",
      userImage: "/img/photo.jpg"
    }
  ]

  return (
    <div ref={containerRef} className="min-h-screen bg-black text-white">
      <Navbar />
      {/* Hero Section */}
      <motion.section 
        className="h-screen flex flex-col items-center justify-center text-center px-4 relative"
        style={{ opacity, scale }}
      >
        <motion.h1 
          className="text-7xl font-bold mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          STORM
        </motion.h1>
        <motion.p 
          className="max-w-3xl text-lg leading-relaxed"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Bienvenido a nuestro blog, el espacio donde la innovación, el conocimiento 
          y la creatividad convergen. Aquí encontrarás artículos, tutoriales y análisis 
          que te mantendrán al día con las últimas tendencias tecnológicas. Nuestro 
          objetivo es compartir contenido relevante, práctico e inspirador que te 
          ayude a aprender, explorar y sacar el máximo provecho del mundo digital. 
          ¡Acompáñanos en este viaje para descubrir todo lo que la tecnología tiene 
          para ofrecer!
        </motion.p>
      </motion.section>

      {/* Banner Section */}
      <motion.section 
        className="w-[90%] h-52 mx-auto relative overflow-hidden my-12 rounded-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <Image
          src="/img/banner.png"
          alt="Storm Blog Banner"
          fill
          className="object-cover"
        />
      </motion.section>

      {/* Events Section */}
      <section className="py-16 px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Todos los Eventos
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {events.map((event) => (
            <motion.div
              key={event.id}
              className="bg-zinc-900 rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative h-48 w-full">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-400 mb-2">{event.date}</div>
                <h3 className="text-2xl font-bold mb-4">{event.title}</h3>
                <p className="text-gray-400">
                  {event.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Comments Section */}
      <section className="py-16 px-4 bg-zinc-900">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Todos los Comentarios
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {comments.map((comment) => (
            <motion.div
              key={comment.id}
              className="bg-zinc-800 rounded-lg p-4 transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:-translate-y-1"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-gray-400 mb-4">
                {comment.text}
              </p>
              <div className="flex items-center gap-3">
                <div className="relative w-8 h-8 rounded-full overflow-hidden">
                  <Image
                    src={comment.userImage}
                    alt={comment.userName}
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="text-sm text-gray-400">{comment.userName}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}


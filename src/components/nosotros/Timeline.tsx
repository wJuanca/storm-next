'use client'

import React, { useRef, useEffect, useState } from 'react'

const timelineEvents = [
  { year: 2015, event: "Fundación de Storm en un pequeño garaje de Los Ángeles" },
  { year: 2017, event: "Lanzamiento de nuestra primera colección 'Digital Streetwear'" },
  { year: 2019, event: "Apertura de nuestra tienda insignia con experiencias de realidad aumentada" },
  { year: 2021, event: "Colaboración con artistas NFT para crear prendas digitales coleccionables" },
  { year: 2023, event: "Expansión global a 50 países y lanzamiento de nuestra plataforma de moda virtual" }
]

function useInView(ref: React.RefObject<HTMLElement | null>, rootMargin: string = "0px"): boolean {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const currentRef = ref.current; // Guarda una copia de ref.current
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      { rootMargin }
    );

    observer.observe(currentRef);

    return () => {
      observer.unobserve(currentRef); // Usa la copia guardada
    };
  }, [ref, rootMargin]);

  return isIntersecting;
}



function TimelineItem({ year, event, index }: { year: number; event: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, '-50px');

  return (
    <div
      ref={ref}
      className={`flex mb-8 transition-all duration-500 ease-out ${
        inView ? 'opacity-100 translate-x-0' : `opacity-0 ${index % 2 === 0 ? '-translate-x-12' : 'translate-x-12'}`
      }`}
      aria-hidden={!inView}
    >
      <div className="flex-shrink-0 w-24 text-right mr-8">
        <div className="text-2xl font-bold">{year}</div>
      </div>
      <div className="flex-grow pb-8 border-l-2 border-gray-700 pl-8 relative">
        <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1.5"></div>
        <p className="text-lg">{event}</p>
      </div>
    </div>
  )
}

export default function Timeline() {
  return (
    <div className="max-w-4xl mx-auto">
      {timelineEvents.map((item, index) => (
        <TimelineItem key={item.year} year={item.year} event={item.event} index={index} />
      ))}
    </div>
  )
}


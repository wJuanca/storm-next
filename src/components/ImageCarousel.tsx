"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function ImageCarousel() {
  const images = [
    "/img/z1.png",
    "/img/z2.png",
    "/img/z3.png",
    "/img/z4.png",
    "/img/z5.png",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval); // Limpieza del intervalo
  }, [images.length]);

  return (
    <div className="relative mt-12 lg:mt-0 lg:ml-12 w-[600px] h-[600px] max-w-2xl">
      {images.map((image, index) => (
        <Image
          key={index}
          src={image}
          alt={`Imagen ${index + 1}`}
          width={600}
          height={600}
          className={`absolute top-0 left-0 w-full h-full transform rotate-[-25deg] transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}

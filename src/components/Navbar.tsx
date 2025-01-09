'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu } from 'lucide-react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="text-white py-4 font-montserrat">
      <div className="container mx-auto px-4">
        {/* Desktop menu */}
        <div className="hidden md:flex items-center justify-center space-x-8">
          {/* Left side menu items */}
          <Link 
            href="/" 
            className="text-1xl uppercase hover:text-gray-300 transition-colors"
          >
            Inicio
          </Link>
          <Link 
            href="/tienda" 
            className="text-1xl uppercase hover:text-gray-300 transition-colors"
          >
            Tienda
          </Link>
          <Link 
            href="/colecciones" 
            className="text-1xl uppercase hover:text-gray-300 transition-colors"
          >
            Colecciones
          </Link>

          {/* Center logo */}
          <Link href="/" className="mx-4">
            <Image 
              src="/img/logo.png"
              width={60}
              height={60}
              alt="Logo" 
              className="h-16 w-auto"
            />
          </Link>

          {/* Right side menu items */}
          <Link 
            href="/nosotros" 
            className="text-1xl uppercase hover:text-gray-300 transition-colors"
          >
            Nosotros
          </Link>
          <Link 
            href="/blog" 
            className="text-1xl uppercase hover:text-gray-300 transition-colors"
          >
            Blog
          </Link>
          <Link 
            href="/contacto" 
            className="text-1xl uppercase hover:text-gray-300 transition-colors"
          >
            Contacto
          </Link>
        </div>

        {/* Mobile menu */}
        <div className="md:hidden">
          <div className="flex justify-between items-center">
            <Link href="/">
              <Image 
                src="/img/logo.png"
                width={60}
                height={60}
                alt="Logo" 
                className="h-16 w-auto"
              />
            </Link>
            <button 
              className="text-white"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <Menu size={24} />
            </button>
          </div>
          
          {isMenuOpen && (
            <div className="mt-4">
              <div className="flex flex-col space-y-4">
                <Link 
                  href="/" 
                  className="text-1xl uppercase hover:text-gray-300 transition-colors"
                >
                  Inicio
                </Link>
                <Link 
                  href="/tienda" 
                  className="text-1xl uppercase hover:text-gray-300 transition-colors"
                >
                  Tienda
                </Link>
                <Link 
                  href="/colecciones" 
                  className="text-1xl uppercase hover:text-gray-300 transition-colors"
                >
                  Colecciones
                </Link>
                <Link 
                  href="/nosotros" 
                  className="text-1xl uppercase hover:text-gray-300 transition-colors"
                >
                  Nosotros
                </Link>
                <Link 
                  href="/blog" 
                  className="text-1xl uppercase hover:text-gray-300 transition-colors"
                >
                  Blog
                </Link>
                <Link 
                  href="/contacto" 
                  className="text-1xl uppercase hover:text-gray-300 transition-colors"
                >
                  Contacto
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}


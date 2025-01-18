import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer(){
    return(
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Logo */}
                </div>
                <Link href="/" className="flex items-center mb-4">
                <Image src="/img/logo.png" 
                alt="logo"
                width={40}
                height={40}
                className="h-10 w-10 mr-3"
                />
                <span className="text-xl font-bold">Storm</span>
                </Link>
                <p className="text-sm text-gray-400 mb-4">
                    Breve resumen de tu empresa o sitio web. Describe tu misión o los servicios que ofreces en pocas palabras.
                </p>
            </div>

            { /* Enlaces */ }
            <div>
                <h3 className="text-lg font-semibold mb-4">Enlaces Rapidos</h3>
                <ul className="space-y-2">
                <li><Link href="/" className="hover:text-gray-300 transition-colors">Inicio</Link></li>
                <li><Link href="/about" className="hover:text-gray-300 transition-colors">Sobre Nosotros</Link></li>
                <li><Link href="/services" className="hover:text-gray-300 transition-colors">Servicios</Link></li>
                <li><Link href="/contact" className="hover:text-gray-300 transition-colors">Contacto</Link></li>
                <li><Link href="/blog" className="hover:text-gray-300 transition-colors">Blog</Link></li>
                </ul>
            </div>


            {/* Informacion de Contacto */}
            <div>
                <h3 className="text-lg font-semibold mb-4">Contacto</h3>
                <ul className="space-y-2">
                    <li className="flex items-center">
                        <MapPin className="h-5 w-5 mr-2" />
                        <span>321 Calle Principal, Ciudad, Pais</span>
                    </li>
                    <li className="flex items-center">
                        <Phone className="h-5 w-5 mr-2" />
                        <span>+504 9999-9999</span>
                    </li>
                    <li className="flex items-center">
                        <Mail className="h-5 w-5 mr-2" />
                        <span>informaciondecorreo@gmail.com</span>
                    </li>
                </ul>
            </div>

            { /* Redes socieles */}
            <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
                <div className="flex space-x-4 mb-4 md:mb-0">
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                        <Facebook className="h-6 w-6" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                        <Twitter className="h-6 w-6" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                        <Instagram className="h-6 w-6" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                        <Linkedin className="h-6 w-6" />
                    </a>
                </div>
                <p className="text-sm text-gray-400">
                    © {new Date().getFullYear()} Storm. Todos los derechos reservados.
                </p>
            </div>
        </footer>
    )
}
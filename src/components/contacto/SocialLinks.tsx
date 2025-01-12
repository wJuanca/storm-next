import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function SocialLinks() {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-3">Sígueme en redes sociales</h3>
      <div className="flex space-x-4">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400">
          <Facebook size={24} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400">
          <Twitter size={24} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400">
          <Instagram size={24} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400">
          <Linkedin size={24} />
        </a>
      </div>
    </div>
  )
}


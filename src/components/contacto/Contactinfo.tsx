import { Mail, MapPin, Phone } from 'lucide-react'
import SocialLinks from './SocialLinks'

export default function ContactInfo() {
  return (
    <div className="space-y-6 bg-gray-900 p-6 rounded-lg shadow-xl">
      <h2 className="text-2xl font-semibold mb-4">Información de contacto</h2>
      <div className="flex items-center space-x-3">
        <MapPin className="text-blue-500" />
        <span>123 Calle Principal, Ciudad, País</span>
      </div>
      <div className="flex items-center space-x-3">
        <Phone className="text-blue-500" />
        <span>+1 234 567 890</span>
      </div>
      <div className="flex items-center space-x-3">
        <Mail className="text-blue-500" />
        <span>contacto@ejemplo.com</span>
      </div>
      <SocialLinks />
    </div>
  )
}


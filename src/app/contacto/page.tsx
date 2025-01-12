import ContactForm from "@/components/contacto/ContactForm"
import ContactInfo from "@/components/contacto/Contactinfo"
import Navbar from "@/components/Navbar"

export default function ContactPage() {
    return (
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold mb-8 text-center">Contáctame</h1>
          <div className="grid md:grid-cols-2 gap-8">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </div>
    )
  }
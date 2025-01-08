import Image from 'next/image'

const teamMembers = [
  { name: "Alex Rivera", role: "Fundador y CEO", image: "/placeholder.svg?height=200&width=200" },
  { name: "Sam Chen", role: "Director Creativo", image: "/placeholder.svg?height=200&width=200" },
  { name: "Zoe Patel", role: "Jefa de Innovación Tecnológica", image: "/placeholder.svg?height=200&width=200" },
  { name: "Lena Kim", role: "Directora de Sostenibilidad", image: "/placeholder.svg?height=200&width=200" }
]

export default function TeamGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
      {teamMembers.map((member) => (
        <div key={member.name} className="text-center">
          <Image
            src={member.image}
            alt={member.name}
            width={200}
            height={200}
            className="rounded-full mx-auto mb-4"
          />
          <h3 className="text-xl font-bold">{member.name}</h3>
          <p className="text-gray-400">{member.role}</p>
        </div>
      ))}
    </div>
  )
}


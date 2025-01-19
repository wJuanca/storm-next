'use client'
import { useState } from "react"
import { Search } from "lucide-react"

interface SearchBarProps {
  onSearch: (searchTerm: string) => void
}

export default function SearchBar({ onSearch }: SearchBarProps){
  const [searchTerm, setSearchTerm] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(searchTerm)
  }

  return(
    <form onSubmit={handleSearch} className="relative">
      <input
      type="text"
      placeholder="Busar productos..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="w-full py-2 px-4 pr-10 rounded-full bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-blue-500"
      />
      <button type="submit" className="absolute right-3 top-1/2 transform -translate-y-1/2">
      <Search className="w-5 h-5 text-gray-400" />
      </button>
    </form>
  )
}
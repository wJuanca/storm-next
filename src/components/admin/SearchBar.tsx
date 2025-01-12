'use client'

import { useState, useCallback } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

export function SearchBar() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '')

    const handleSearch = useCallback((value: string) => {
        setSearchTerm(value)
        const params = new URLSearchParams(searchParams)
        if (value) {
            params.set('search', value)
        } else {
            params.delete('search')
        }
        router.push('/admin/products?' + params.toString())
    }, [searchParams, router])

    return (
        <div className="mb-4">
            <label htmlFor="searchr" className="sr-only">Buscar Producto</label>
            <input
            type="search"
            id="search"
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder='Buscar Producto...'
            className="w-full p-2 border border-gray-300 reounded-mb shadow-fm focus:ring-indigo-500 focus:border-indigo-500"
            />
        </div>
    )
}
import { ReactNode } from 'react'

interface BentoGridProps {
  children: ReactNode
}

export default function BentoGrid({ children }: BentoGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 max-w-6xl mx-auto">
      {children}
    </div>
  )
}


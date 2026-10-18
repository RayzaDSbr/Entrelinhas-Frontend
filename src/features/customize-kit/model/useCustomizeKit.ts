import { useState } from 'react'
import type { CoverColor } from './options'

export function useCustomizeKit() {
  const [cover, setCover] = useState<CoverColor>('sage')
  const [name, setName] = useState('Meu Planner')
  const [refills, setRefills] = useState<string[]>(['Planejamento semanal', 'Anotações livres'])
  const [added, setAdded] = useState(false)

  const toggleRefill = (item: string) =>
    setRefills((current) =>
      current.includes(item) ? current.filter((value) => value !== item) : [...current, item],
    )

  return {
    cover,
    name,
    refills,
    added,
    setCover,
    setName,
    toggleRefill,
    addToCart: () => setAdded(true),
    resetAdded: () => setAdded(false),
  }
}

export type CustomizeKit = ReturnType<typeof useCustomizeKit>

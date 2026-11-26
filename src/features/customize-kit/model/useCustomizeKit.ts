import { useState } from 'react'
import type { CoverColor, PlannerLayout } from './options'

export interface PlannerCartItem {
  id: string
  name: string
  cover: CoverColor
  refills: string[]
  layout: PlannerLayout
  quantity: number
}

export function useCustomizeKit() {
  const [cover, setCover] = useState<CoverColor>('sage')
  const [name, setName] = useState('Meu Planner')
  const [refills, setRefills] = useState<string[]>(['Planejamento semanal', 'Anotações livres'])
  const [layout, setLayout] = useState<PlannerLayout>('weekly')
  const [added, setAdded] = useState(false)
  const [cartItems, setCartItems] = useState<PlannerCartItem[]>([])

  const toggleRefill = (item: string) =>
    setRefills((current) =>
      current.includes(item) ? current.filter((value) => value !== item) : [...current, item],
    )

  return {
    cover,
    name,
    refills,
    layout,
    added,
    cartItems,
    cartCount: cartItems.reduce((count, item) => count + item.quantity, 0),
    setCover,
    setName,
    setLayout,
    toggleRefill,
    addToCart: () => {
      const item: PlannerCartItem = {
        id: globalThis.crypto?.randomUUID?.() ?? `${Date.now()}-${Math.random().toString(36).slice(2)}`,
        name: name.trim() || 'Meu Planner',
        cover,
        refills: [...refills],
        layout,
        quantity: 1,
      }
      setCartItems((current) => [...current, item])
      setAdded(true)
    },
    removeCartItem: (itemId: string) => setCartItems((current) => current.filter((item) => item.id !== itemId)),
    resetAdded: () => setAdded(false),
  }
}

export type CustomizeKit = ReturnType<typeof useCustomizeKit>

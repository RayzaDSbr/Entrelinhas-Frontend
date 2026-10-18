export type CoverColor = 'sage' | 'rose' | 'cream'

export const coverOptions: { id: CoverColor; label: string }[] = [
  { id: 'sage', label: 'Verde-sálvia' },
  { id: 'rose', label: 'Rosé' },
  { id: 'cream', label: 'Creme' },
]

export const refillOptions = [
  'Planejamento semanal',
  'Metas e objetivos',
  'Controle financeiro',
  'Rastreador de hábitos',
  'Anotações livres',
]

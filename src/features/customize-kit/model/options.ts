export type CoverColor = 'sage' | 'rose' | 'cream'
export type PlannerLayout = 'weekly' | 'daily' | 'monthly'

export const layoutOptions: {
  id: PlannerLayout
  label: string
  description: string
  detail: string
}[] = [
  {
    id: 'weekly',
    label: 'Visão semanal',
    description: 'Sua semana de um só olhar.',
    detail: 'Os sete dias lado a lado para organizar compromissos, tarefas e atividades.',
  },
  {
    id: 'daily',
    label: 'Visão diária',
    description: 'Um dia inteiro só seu.',
    detail: 'Uma página para cada dia, com espaço extra para anotações e planejamento.',
  },
  {
    id: 'monthly',
    label: 'Visão mensal',
    description: 'O mês inteiro em foco.',
    detail: 'Calendário completo para destacar datas importantes, compromissos e eventos.',
  },
]

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

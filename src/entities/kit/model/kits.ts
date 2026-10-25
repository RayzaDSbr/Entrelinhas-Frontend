import type { Kit } from './types'

export const kits: Kit[] = [
  { id: 'essencial', name: 'Essencial', price: 'R$ 89,90', imageAlt: 'Planner personalizado com capa e miolo padrão 2027.', features: ['Planner personalizado', 'Capa com nome', 'Miolo padrão 2027'] },
  { id: 'personalizado', name: 'Personalizado', price: 'R$ 104,90', imageAlt: 'Planner personalizado com dois refis e divisórias coordenadas.', featured: true, features: ['Planner personalizado', 'Capa com nome', '2 refis à sua escolha', 'Divisórias coordenadas'] },
  { id: 'completo', name: 'Completo', price: 'R$ 119,90', imageAlt: 'Planner personalizado acompanhado de refis, acessórios e embalagem especial.', features: ['Planner personalizado', 'Seleção de refis', 'Kit de acessórios', 'Embalagem especial'] },
]

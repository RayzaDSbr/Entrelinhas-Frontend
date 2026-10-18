import type { Product } from './types'
import plannerCovers from '../../../shared/assets/images/planner-covers.jpeg'
import plannerRefills from '../../../shared/assets/images/refills.png'
import plannerAccessories from '../../../shared/assets/images/accessories.jpeg'
import completePlannerKit from '../../../shared/assets/images/complete-kit.jpeg'

export const products: Product[] = [
  { id: 'planner', title: 'Planner 2027 Personalizado', description: 'Capa autoral, calendário anual e planejamento mensal e semanal.', price: 'R$ 89,90', image: plannerCovers },
  { id: 'refis', title: 'Refis Personalizados', description: 'Páginas para metas, hábitos, finanças e todos os seus planos.', price: 'a partir de R$ 14,90', image: plannerRefills },
  { id: 'acessorios', title: 'Kit de Acessórios', description: 'Adesivos, marcadores, divisórias e cartões de metas coordenados.', price: 'R$ 24,90', image: plannerAccessories },
  { id: 'completo', title: 'Kit Completo 2027', description: 'Planner personalizado, seleção de refis e acessórios.', price: 'R$ 119,90', image: completePlannerKit },
]

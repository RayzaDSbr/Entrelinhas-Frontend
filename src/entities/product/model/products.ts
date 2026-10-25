import type { Product } from './types'
import plannerCovers from '../../../shared/assets/images/planner-covers.jpeg'
import plannerRefills from '../../../shared/assets/images/refills.png'
import plannerAccessories from '../../../shared/assets/images/accessories.jpeg'
import completePlannerKit from '../../../shared/assets/images/complete-kit.jpeg'

export const products: Product[] = [
  { id: 'planner', title: 'Planner 2027 Personalizado', description: 'Capa autoral, calendário anual e planejamento mensal e semanal.', price: 'R$ 89,90', image: plannerCovers, imageAlt: 'Capas de planner em verde-sálvia, rosé e bege sobre fundo claro.' },
  { id: 'refis', title: 'Refis Personalizados', description: 'Páginas para metas, hábitos, finanças e todos os seus planos.', price: 'a partir de R$ 14,90', image: plannerRefills, imageAlt: 'Páginas de planejamento semanal, metas, finanças e anotações dispostas ao lado de um café.' },
  { id: 'acessorios', title: 'Kit de Acessórios', description: 'Adesivos, marcadores, divisórias e cartões de metas coordenados.', price: 'R$ 24,90', image: plannerAccessories, imageAlt: 'Canetas rosadas, bloco espiral, adesivos de corações, mini calendário e marcador de página sobre mesa de madeira clara.' },
  { id: 'completo', title: 'Kit Completo 2027', description: 'Planner personalizado, seleção de refis e acessórios.', price: 'R$ 119,90', image: completePlannerKit, imageAlt: 'Planner aberto, refis, canetas, adesivos e caixa de presente organizados sobre uma mesa.' },
]

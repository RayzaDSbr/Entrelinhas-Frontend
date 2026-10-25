import { useState } from 'react'
import { coverOptions, useCustomizeKit } from '../../../features/customize-kit'
import { scrollToSection } from '../../../shared/lib'
import { VisuallyHidden } from '../../../shared/ui'
import { Header } from '../../../widgets/Header'
import { Hero } from '../../../widgets/Hero'
import { Essence } from '../../../widgets/Essence'
import { Collection } from '../../../widgets/Collection'
import { Customize } from '../../../widgets/Customize'
import { Steps } from '../../../widgets/Steps'
import { Kits } from '../../../widgets/Kits'
import { Reviews } from '../../../widgets/Reviews'
import { FAQ } from '../../../widgets/FAQ'
import { FinalCTA } from '../../../widgets/FinalCTA'
import { Footer } from '../../../widgets/Footer'
import styles from './HomePage.module.css'

export function HomePage() {
  // O estado do planner fica aqui porque é compartilhado entre widgets
  // (Header mostra a sacola, Customize edita, Kits reinicia).
  // Widgets não importam outros widgets, então a página faz a ligação.
  const kit = useCustomizeKit()
  const [announcement, setAnnouncement] = useState('')

  const handleChooseKit = () => {
    kit.resetAdded()
    scrollToSection('personalize')
  }

  const handleAddToCart = () => {
    kit.addToCart()
    const coverLabel = coverOptions.find((option) => option.id === kit.cover)?.label ?? 'Verde-sálvia'
    const plannerName = kit.name.trim() || 'Meu Planner'
    setAnnouncement(`Planner de ${plannerName} na cor ${coverLabel} adicionado à sacola. Itens na sacola: 1.`)
  }

  return (
    <>
      <a className={styles.skipLink} href="#main-content">Pular para o conteúdo</a>
      <Header cartCount={kit.added ? 1 : 0} />
      <VisuallyHidden role="status" aria-live="polite" aria-atomic="true">
        {announcement}
      </VisuallyHidden>
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Essence />
        <Collection />
        <Customize kit={kit} onAddToCart={handleAddToCart} />
        <Steps />
        <Kits onChoose={handleChooseKit} />
        <Reviews />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}

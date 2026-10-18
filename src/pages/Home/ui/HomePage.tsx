import { useCustomizeKit } from '../../../features/customize-kit'
import { scrollToSection } from '../../../shared/lib'
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

export function HomePage() {
  // O estado do planner fica aqui porque é compartilhado entre widgets
  // (Header mostra a sacola, Customize edita, Kits reinicia).
  // Widgets não importam outros widgets, então a página faz a ligação.
  const kit = useCustomizeKit()

  const handleChooseKit = () => {
    kit.resetAdded()
    scrollToSection('personalize')
  }

  return (
    <>
      <Header cartCount={kit.added ? 1 : 0} />
      <main>
        <Hero />
        <Essence />
        <Collection />
        <Customize kit={kit} />
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

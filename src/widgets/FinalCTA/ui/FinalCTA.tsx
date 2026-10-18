import { Button, Eyebrow } from '../../../shared/ui'
import { scrollToSection } from '../../../shared/lib'
import styles from './FinalCTA.module.css'

export function FinalCTA() {
  return (
    <section className={styles.cta}>
      <Eyebrow>SEU 2027 COMEÇA AQUI</Eyebrow>
      <h2>Um novo ano.<br /><em>Mil possibilidades.</em></h2>
      <p>Comece 2027 com espaço para tudo o que você deseja construir.</p>
      <Button className={styles.action} icon="→" onClick={() => scrollToSection('personalize')}>Criar meu planner</Button>
    </section>
  )
}

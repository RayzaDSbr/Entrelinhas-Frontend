import { Button, Eyebrow } from '../../../shared/ui'
import { scrollToSection } from '../../../shared/lib'
import heroImage from '../../../shared/assets/images/hero-planner.png'
import styles from './Hero.module.css'

export function Hero() {
  return (
    <section className={styles.hero} id="inicio">
      <div className={styles.copy}>
        <Eyebrow>COLEÇÃO 2027</Eyebrow>
        <h1>Sua rotina,<br /><em>do seu jeito.</em></h1>
        <p>Planeje seus dias, organize seus sonhos e transforme sua rotina em algo só seu. Conheça nossos planners personalizáveis e crie um espaço que tenha a sua personalidade.</p>
        <div className={styles.actions}>
          <Button icon="→" onClick={() => scrollToSection('personalize')}>Monte seu planner</Button>
          <Button variant="text" onClick={() => scrollToSection('colecao')}>Conheça a coleção</Button>
        </div>
        <div className={styles.note}><span>✦</span> Feito com calma, para dias com intenção.</div>
      </div>
      <div className={styles.image}>
        <img src={heroImage} alt="Planner semanal aberto em tons pastel com flores e café" />
        <div className={styles.stamp}>2027<br /><small>NOVOS<br />COMEÇOS</small></div>
      </div>
    </section>
  )
}

import { Eyebrow } from '../../../shared/ui'
import { steps } from '../model/steps'
import styles from './Steps.module.css'

export function Steps() {
  return (
    <section className={styles.steps}>
      <Eyebrow>PASSO A PASSO</Eyebrow>
      <h2>Criar o seu é <em>simples.</em></h2>
      <div className={styles.grid}>
        {steps.map((step) => (
          <article className={styles.step} key={step.id}>
            <div className={styles.image}>
              <img src={step.image} alt="" />
              <span className={styles.number}>{step.number}</span>
            </div>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

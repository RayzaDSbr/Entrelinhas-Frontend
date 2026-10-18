import { benefits } from '../model/benefits'
import styles from './Essence.module.css'

export function Essence() {
  return (
    <section className={styles.essence}>
      <span className={styles.label}>Nossa essência</span>
      <div className={styles.heading}>
        <h2>Mais do que organizar, é sobre <em>encontrar o seu jeito.</em></h2>
        <p>Cada rotina é única. Por isso, acreditamos que seu planner também deve ser. Escolha os detalhes, monte suas páginas e crie um caderno que acompanhe seus planos, ideias e novos começos.</p>
      </div>
      <div className={styles.benefits}>
        {benefits.map((benefit) => (
          <article className={styles.benefit} key={benefit.id}>
            <h3>{benefit.title}</h3>
            <p>{benefit.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

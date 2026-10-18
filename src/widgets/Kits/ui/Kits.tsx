import { kits } from '../../../entities/kit'
import { classNames } from '../../../shared/lib'
import styles from './Kits.module.css'

interface KitsProps {
  onChoose: () => void
}

export function Kits({ onChoose }: KitsProps) {
  return (
    <section className={styles.kits} id="kits">
      <div className={styles.label}>ESCOLHA O SEU</div>
      <h2>Seu jeito de planejar<br /><em>começa aqui.</em></h2>
      <div className={styles.grid}>
        {kits.map((kit, index) => (
          <article className={classNames(styles.card, kit.featured && styles.featured)} key={kit.id}>
            {kit.featured && <span className={styles.popular}>MAIS ESCOLHIDO</span>}
            <small>0{index + 1}</small>
            <h3>{kit.name}</h3>
            <strong>{kit.price}</strong>
            <ul>
              {kit.features.map((feature) => <li key={feature}>✓ {feature}</li>)}
            </ul>
            <button onClick={onChoose}>Escolher este kit <span>→</span></button>
          </article>
        ))}
      </div>
      <p className={styles.disclaimer}>* Preços fictícios para apresentação deste projeto conceitual.</p>
    </section>
  )
}

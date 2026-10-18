import { reviews } from '../../../entities/review'
import { SectionHead } from '../../../shared/ui'
import styles from './Reviews.module.css'

export function Reviews() {
  return (
    <section className={styles.reviews}>
      <SectionHead
        eyebrow="IMPRESSÕES"
        title={<>Pequenos detalhes,<br /><em>novos começos.</em></>}
        text="Conteúdo demonstrativo — histórias fictícias inspiradas em diferentes jeitos de planejar."
      />
      <div className={styles.grid}>
        {reviews.map((review) => (
          <article className={styles.review} key={review.id}>
            <span className={styles.mark}>“</span>
            <p className={styles.quote}>{review.quote}</p>
            <div className={styles.author}>
              <span className={styles.avatar}>{review.author[0]}</span>
              <small>{review.author}<br /><b>{review.role} · relato fictício</b></small>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

import { useState } from 'react'
import { faqs } from '../../../entities/faq'
import { Eyebrow } from '../../../shared/ui'
import { classNames } from '../../../shared/lib'
import styles from './FAQ.module.css'

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className={styles.faq} id="faq">
      <div className={styles.title}>
        <Eyebrow>PERGUNTAS FREQUENTES</Eyebrow>
        <h2>Ficou com alguma<br /><em>dúvida?</em></h2>
        <p>A gente ajuda você a colocar cada ideia no papel.</p>
      </div>
      <div>
        {faqs.map((item, index) => {
          const isOpen = openIndex === index
          return (
            <article className={classNames(styles.item, isOpen && styles.open)} key={item.id}>
              <button className={styles.question} aria-expanded={isOpen} onClick={() => setOpenIndex(isOpen ? -1 : index)}>
                <span className={styles.number}>0{index + 1}</span>
                <span>{item.question}</span>
                <span className={styles.icon}>{isOpen ? '−' : '+'}</span>
              </button>
              {isOpen && <p className={styles.answer}>{item.answer}</p>}
            </article>
          )
        })}
      </div>
    </section>
  )
}

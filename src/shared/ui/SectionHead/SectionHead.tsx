import type { ReactNode } from 'react'
import { Eyebrow } from '../Eyebrow/Eyebrow'
import styles from './SectionHead.module.css'

interface SectionHeadProps {
  eyebrow: string
  title: ReactNode
  text: string
}

// A cor do texto pode ser trocada pela seção com --section-head-text
export function SectionHead({ eyebrow, title, text }: SectionHeadProps) {
  return (
    <div className={styles.head}>
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2>{title}</h2>
      </div>
      <p>{text}</p>
    </div>
  )
}

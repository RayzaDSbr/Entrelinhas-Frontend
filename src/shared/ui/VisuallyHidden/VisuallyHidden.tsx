import type { HTMLAttributes } from 'react'
import styles from './VisuallyHidden.module.css'

type VisuallyHiddenProps = HTMLAttributes<HTMLDivElement>

export function VisuallyHidden({ className, ...props }: VisuallyHiddenProps) {
  return <div className={[styles.visuallyHidden, className].filter(Boolean).join(' ')} {...props} />
}

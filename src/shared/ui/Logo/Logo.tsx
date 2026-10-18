import { classNames } from '../../lib'
import styles from './Logo.module.css'

interface LogoProps {
  light?: boolean
  className?: string
}

export function Logo({ light = false, className }: LogoProps) {
  return (
    <div className={classNames(styles.logo, light && styles.light, className)}>
      <span>Entrelinhas</span>
      <small>PAPELARIA</small>
    </div>
  )
}

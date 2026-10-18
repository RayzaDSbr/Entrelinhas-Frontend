import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { classNames } from '../../lib'
import styles from './Button.module.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'text' | 'add'
  icon?: ReactNode
}

export function Button({ variant = 'primary', icon, className, children, ...rest }: ButtonProps) {
  return (
    <button className={classNames(styles.btn, styles[variant], className)} {...rest}>
      {children}
      {icon && <span>{icon}</span>}
    </button>
  )
}

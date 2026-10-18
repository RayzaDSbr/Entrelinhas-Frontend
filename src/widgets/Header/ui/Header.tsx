import { Logo } from '../../../shared/ui'
import { navLinks } from '../model/links'
import styles from './Header.module.css'

interface HeaderProps {
  cartCount: number
}

export function Header({ cartCount }: HeaderProps) {
  return (
    <header className={styles.header}>
      <Logo />
      <nav className={styles.nav} aria-label="Navegação principal">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href}>{link.label}</a>
        ))}
      </nav>
      <button className={styles.bag} aria-label="Abrir sacola">
        Sacola <span>{cartCount}</span>
      </button>
    </header>
  )
}

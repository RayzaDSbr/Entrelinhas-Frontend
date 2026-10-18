import { Logo } from '../../../shared/ui'
import { footerLinks } from '../model/links'
import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.brand}>
        <Logo light className={styles.logo} />
        <p>Sua rotina, do seu jeito.</p>
      </div>
      <div className={styles.links}>
        {footerLinks.map((link) => (
          <a key={link.href} href={link.href}>{link.label}</a>
        ))}
      </div>
      <div className={styles.concept}>MARCA CONCEITUAL<br />PROJETO DEMONSTRATIVO · 2027</div>
    </footer>
  )
}

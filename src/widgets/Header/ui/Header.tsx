import { useEffect, useRef, useState } from 'react'
import { Logo } from '../../../shared/ui'
import { navLinks } from '../model/links'
import styles from './Header.module.css'

const mobileNavLinks = navLinks.filter((link) => link.href !== '#inicio')
const mobileMenuId = 'mobile-navigation-links'

interface HeaderProps {
  cartCount: number
}

export function Header({ cartCount }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!menuOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        menuButtonRef.current?.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [menuOpen])

  return (
    <header className={styles.header}>
      <Logo />
      <nav className={styles.nav} aria-label="Principal">
        <div className={styles.desktopLinks}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
        </div>
        <button
          ref={menuButtonRef}
          className={styles.menuButton}
          type="button"
          aria-expanded={menuOpen}
          aria-controls={mobileMenuId}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span aria-hidden="true">{menuOpen ? '×' : '☰'}</span>
        </button>
        <ul id={mobileMenuId} className={styles.mobileLinks} hidden={!menuOpen}>
          {mobileNavLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setMenuOpen(false)}>
                {link.href === '#personalize' ? 'Personalize' : link.href === '#kits' ? 'Kits' : link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <button className={styles.bag} aria-label={`Abrir sacola, ${cartCount} ${cartCount === 1 ? 'item' : 'itens'}`}>
        Sacola <span>{cartCount}</span>
      </button>
    </header>
  )
}

import { useEffect, useRef } from 'react'
import type { RefObject } from 'react'
import { coverOptions, layoutOptions } from '../../../features/customize-kit'
import type { PlannerCartItem } from '../../../features/customize-kit'
import { Button } from '../../../shared/ui'
import styles from './CartDrawer.module.css'

interface CartDrawerProps {
  open: boolean
  items: PlannerCartItem[]
  onClose: () => void
  onRemove: (itemId: string) => void
  returnFocusRef: RefObject<HTMLButtonElement | null>
}

export function CartDrawer({ open, items, onClose, onRemove, returnFocusRef }: CartDrawerProps) {
  const panelRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!open) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    panelRef.current?.focus()

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        onClose()
        return
      }

      if (event.key !== 'Tab' || !panelRef.current) return
      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'button:not([disabled]), a[href], input:not([disabled]), [tabindex]:not([tabindex="-1"])',
      )
      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last?.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first?.focus()
      } else if (focusable.length === 0) {
        event.preventDefault()
        panelRef.current.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
      returnFocusRef.current?.focus()
    }
  }, [open, onClose, returnFocusRef])

  return (
    <div
      className={styles.backdrop}
      hidden={!open}
      aria-hidden={!open}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <aside
        ref={panelRef}
        className={styles.drawer}
        id="shopping-bag-drawer"
        role="dialog"
        aria-modal="true"
        aria-labelledby="shopping-bag-title"
        tabIndex={-1}
      >
        <header className={styles.header}>
          <div>
            <span className={styles.eyebrow}>SUA SELEÇÃO</span>
            <h2 id="shopping-bag-title">Sua sacola</h2>
            <p>{items.length} {items.length === 1 ? 'planner escolhido' : 'planners escolhidos'}</p>
          </div>
          <button className={styles.close} type="button" aria-label="Fechar sacola" onClick={onClose}>×</button>
        </header>

        {items.length === 0 ? (
          <div className={styles.empty}>
            <span className={styles.emptyMark} aria-hidden="true">✦</span>
            <h3>Sua sacola está esperando por você.</h3>
            <p>Escolha os detalhes do seu planner e ele aparecerá aqui.</p>
            <Button variant="primary" onClick={onClose}>Continuar comprando</Button>
          </div>
        ) : (
          <>
            <div className={styles.items}>
              {items.map((item) => {
                const coverLabel = coverOptions.find((option) => option.id === item.cover)?.label ?? 'Capa personalizada'
                const layoutLabel = layoutOptions.find((option) => option.id === item.layout)?.label ?? 'Layout personalizado'

                return (
                  <article className={styles.item} key={item.id}>
                    <div
                      className={styles.cover}
                      data-cover={item.cover}
                      role="img"
                      aria-label={`Representação da capa ${coverLabel} do planner ${item.name}`}
                    >
                      <span>PLANNER</span>
                      <strong>{item.name}</strong>
                      <i aria-hidden="true" />
                    </div>
                    <div className={styles.itemDetails}>
                      <div className={styles.itemHeading}>
                        <div>
                          <span className={styles.itemEyebrow}>PLANNER PERSONALIZADO</span>
                          <h3>{item.name}</h3>
                        </div>
                        <button
                          className={styles.remove}
                          type="button"
                          aria-label={`Remover ${item.name} da sacola`}
                          onClick={() => onRemove(item.id)}
                        >
                          Remover
                        </button>
                      </div>
                      <dl className={styles.details}>
                        <div><dt>Capa</dt><dd>{coverLabel}</dd></div>
                        <div><dt>Layout</dt><dd>{layoutLabel}</dd></div>
                        <div className={styles.refills}>
                          <dt>Refis</dt>
                          <dd>{item.refills.length > 0 ? item.refills.join(', ') : 'Nenhum refil selecionado'}</dd>
                        </div>
                        <div><dt>Quantidade</dt><dd>{item.quantity}</dd></div>
                      </dl>
                    </div>
                  </article>
                )
              })}
            </div>
            <div className={styles.footer}>
              <p>Os valores serão calculados na confirmação do pedido.</p>
              <Button variant="primary" onClick={onClose}>Continuar comprando</Button>
            </div>
          </>
        )}
      </aside>
    </div>
  )
}

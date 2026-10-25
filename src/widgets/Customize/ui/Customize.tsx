import { coverOptions, refillOptions } from '../../../features/customize-kit'
import type { CustomizeKit } from '../../../features/customize-kit'
import { Button, Eyebrow } from '../../../shared/ui'
import { classNames } from '../../../shared/lib'
import styles from './Customize.module.css'

interface CustomizeProps {
  kit: CustomizeKit
  onAddToCart: () => void
}

export function Customize({ kit, onAddToCart }: CustomizeProps) {
  const title = kit.name || 'Meu Planner'

  return (
    <section className={styles.customize} id="personalize">
      <div className={styles.title}>
        <Eyebrow>FEITO POR VOCÊ</Eyebrow>
        <h2>Um planner que tem<br /><em>a sua cara.</em></h2>
        <p>Você escolhe os detalhes. A gente imagina as possibilidades.</p>
      </div>

      <div className={styles.grid}>
        <div className={styles.card}>
          <label className={styles.label} htmlFor="planner-name"><span>01</span> Nome para a capa</label>
          <input
            id="planner-name"
            className={styles.input}
            value={kit.name}
            maxLength={22}
            onChange={(e) => kit.setName(e.target.value)}
            placeholder="Meu Planner"
          />

          <p className={styles.label}><span>02</span> Escolha a cor da capa</p>
          <div className={styles.swatches}>
            {coverOptions.map((option) => (
              <button
                key={option.id}
                className={styles.swatch}
                data-cover={option.id}
                aria-pressed={kit.cover === option.id}
                onClick={() => kit.setCover(option.id)}
              >
                <i />{option.label}
              </button>
            ))}
          </div>

          <p className={classNames(styles.label, styles.refillsLabel)}><span>03</span> Escolha seus refis</p>
          <div className={styles.checks}>
            {refillOptions.map((item) => {
              const selected = kit.refills.includes(item)
              return (
                <button key={item} className={styles.check} aria-pressed={selected} onClick={() => kit.toggleRefill(item)}>
                  <span className={styles.box}>{selected ? '✓' : ''}</span>{item}
                </button>
              )
            })}
          </div>

          <Button variant="add" className={styles.addButton} icon={kit.added ? '✓' : '→'} onClick={onAddToCart}>
            {kit.added ? 'Adicionado à sacola' : 'Adicionar ao carrinho'}
          </Button>
        </div>

        <div className={styles.preview}>
          <div className={styles.botanical} aria-hidden="true">⌇</div>
          <div className={styles.planner} data-cover={kit.cover}>
            <div className={styles.rings}>
              {Array.from({ length: 10 }).map((_, i) => <i key={i} />)}
            </div>
            <div className={styles.coverCopy}>
              <small>PLANNER 2027</small>
              <strong>{title}</strong>
              <span>ENTRELINHAS</span>
            </div>
            <div className={styles.elastic} />
          </div>
          <div className={styles.caption}>
            <span>✦</span>
            <p>Criado por você,<br /><em>pensado para a sua rotina.</em></p>
          </div>
          <div className={styles.count}>{kit.refills.length}<small>REFIS<br />SELECIONADOS</small></div>
        </div>
      </div>
    </section>
  )
}

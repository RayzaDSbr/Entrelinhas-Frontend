import { coverOptions, layoutOptions, refillOptions } from '../../../features/customize-kit'
import type { CustomizeKit, PlannerLayout } from '../../../features/customize-kit'
import { Button, Eyebrow } from '../../../shared/ui'
import { classNames } from '../../../shared/lib'
import styles from './Customize.module.css'

const weekdays = ['S', 'T', 'Q', 'Q', 'S', 'S', 'D']

function LayoutSketch({ layout }: { layout: PlannerLayout }) {
  if (layout === 'weekly') {
    return (
      <div className={classNames(styles.sketch, styles.weeklySketch)} aria-hidden="true">
        {weekdays.map((day, index) => (
          <div className={styles.weekdayColumn} key={`${day}-${index}`}>
            <i>{day}</i><span /><span /><span />
          </div>
        ))}
      </div>
    )
  }

  if (layout === 'daily') {
    return (
      <div className={classNames(styles.sketch, styles.dailySketch)} aria-hidden="true">
        <i className={styles.dailyDate}>SEGUNDA-FEIRA, 08</i>
        <span className={styles.dailyFocus} />
        {Array.from({ length: 5 }).map((_, index) => <span className={styles.dailyLine} key={index} />)}
        <span className={styles.dailyNote} />
      </div>
    )
  }

  return (
    <div className={classNames(styles.sketch, styles.monthlySketch)} aria-hidden="true">
      <i className={styles.monthTitle}>JUNHO 2027</i>
      <div className={styles.calendarGrid}>
        {Array.from({ length: 35 }).map((_, index) => <span key={index} />)}
      </div>
    </div>
  )
}

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

          <fieldset className={styles.layoutFieldset}>
            <legend className={classNames(styles.label, styles.layoutLabel)}><span>04</span> Escolha o layout do seu planner</legend>
            <p className={styles.layoutHint}>Compare as prévias e escolha o ritmo que combina com você.</p>
            <div className={styles.layoutOptions} role="group" aria-label="Layout das páginas internas">
              {layoutOptions.map((option) => {
                const selected = kit.layout === option.id
                return (
                  <button
                    key={option.id}
                    type="button"
                    className={styles.layoutOption}
                    aria-pressed={selected}
                    onClick={() => kit.setLayout(option.id)}
                  >
                    <span className={styles.layoutOptionTop}>
                      <strong>{option.label}</strong>
                      <span className={styles.radioMark} aria-hidden="true">{selected ? '✓' : ''}</span>
                    </span>
                    <LayoutSketch layout={option.id} />
                    <span className={styles.layoutDescription}>{option.description}</span>
                  </button>
                )
              })}
            </div>
          </fieldset>

          <Button variant="add" className={styles.addButton} icon={kit.added ? '✓' : '→'} onClick={onAddToCart}>
            {kit.added ? 'Adicionado à sacola' : 'Adicionar ao carrinho'}
          </Button>
        </div>

        <div className={styles.preview}>
          <div className={styles.coverStage}>
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
            <div className={styles.count}>{kit.refills.length}<small>REFIS<br />SELECIONADOS</small></div>
          </div>
          <div className={styles.innerPreview} aria-live="polite">
            <div className={styles.innerPreviewHeading}>
              <span>PRÉVIA DO MIOLO</span>
              <strong>{layoutOptions.find((option) => option.id === kit.layout)?.label}</strong>
            </div>
            <div className={classNames(styles.spread, styles[`${kit.layout}Spread`])}>
              <LayoutSketch layout={kit.layout} />
            </div>
            <p className={styles.layoutDetail}>{layoutOptions.find((option) => option.id === kit.layout)?.detail}</p>
          </div>
          <div className={styles.caption}>
            <span>✦</span>
            <p>Criado por você,<br /><em>pensado para a sua rotina.</em></p>
          </div>
        </div>
      </div>
    </section>
  )
}

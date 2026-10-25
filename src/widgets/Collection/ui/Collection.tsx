import { products } from '../../../entities/product'
import { scrollToSection } from '../../../shared/lib'
import { SectionHead } from '../../../shared/ui'
import styles from './Collection.module.css'

export function Collection() {
  return (
    <section className={styles.collection} id="colecao">
      <SectionHead
        eyebrow="COLEÇÃO 2027"
        title={<>Encontre o seu<br /><em>próximo capítulo.</em></>}
        text="Produtos pensados para acompanhar todos os seus planos, dos dias corridos aos sonhos que ainda estão no papel."
      />
      <div className={styles.products}>
        {products.map((product, index) => (
          <article className={styles.product} key={product.id}>
            <div className={styles.image}>
              <img src={product.image} alt={product.imageAlt} />
              <span className={styles.number}>0{index + 1}</span>
            </div>
            <div className={styles.info}>
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <strong>{product.price}</strong>
              <button onClick={() => scrollToSection('personalize')}>Ver detalhes <span>↗</span></button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

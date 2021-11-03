import styles from '../styles/layout.module.scss'
import Filters from './filters';
import Catalog from './catalog';

export default function Layout() {
  const productsAmount = 143;
  return (
    <div className={`container ${styles.wrapper}`}>
      <aside className={styles.aside}>
        <h1 className={styles.title}>Объективы</h1>
        <p className={styles.amount}>Товаров {productsAmount}</p>
        <Filters />
      </aside>
      <main className={styles.main}>
        <Catalog />
      </main>
    </div>
  )
}

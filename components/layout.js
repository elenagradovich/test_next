import {useEffect, useState} from 'react'
import styles from '../styles/layout.module.scss'
import Filters from './filters';
import Catalog from './catalog';

export default function Layout({products}) {
  const [productsAmount, setProductsAmount] = useState(0)
  
  useEffect(() => {
     setProductsAmount(products?.length > 0 ? products.length : 0) 
  }, [products]);

  return (
    <div className={`container ${styles.wrapper}`}>
      <aside className={styles.aside}>
        <h1 className={styles.title}>Объективы</h1>
        <p className={styles.amount}>Товаров {productsAmount}</p>
        <Filters />
      </aside>
      <main className={styles.main}>
        {products && <Catalog data={products} />}
      </main>
    </div>
  )
}



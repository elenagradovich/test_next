import styles from '../styles/catalog.module.scss'
import Card from './card';

export default function Catalog({data}) {
  return (
      <ul className={styles.items}>
        {data && data.length > 0 && data.map((item) => {
          return (
            <li key={`key_catalog_${item.id}`} className={styles.item}>
              <Card data={item} />
            </li>)
          })}
        {data && data.length === 0 && <p>Данных не обнаружено</p>}
      </ul>
  )
}
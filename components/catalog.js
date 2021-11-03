import styles from '../styles/catalog.module.scss'
import {good_propositions} from '../public/mock_data';
import {new_propositions} from '../public/mock_data';
import Card from './card';

export default function Catalog() {
  const products = [...good_propositions, ...new_propositions];
  console.log(products)
  return (
      <ul className={styles.items}>
        {products.map((item) => {
          return (
            <li key={`key_catalog_${item.id}`} className={styles.item}>
              <Card data={item} />
            </li>)
          })}
      </ul>
  )
}
import styles from '../styles/brand.module.scss'
import { brands } from '../public/mock_data'

export default function Brands () {
  return (
    <>
      <div className={styles.title}>Бренд</div>
      <ul className={styles.items}>
        {brands.map(({id, title}) => <li key={`key_${id}`} className={styles.item}>
              <input className={styles.customCheckbox} id={id} type='checkbox' value={title} name={title} />
              <label htmlFor={id} tabIndex="0">{title}</label>
            </li>
        )}
      </ul>
    </>
  )
}
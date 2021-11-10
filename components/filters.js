import styles from '../styles/filters.module.scss'
import PriceControls from './price-controls';
import Brands from './brands';

export default function Filters () {
  return (
    <form className={styles.filters}>
      <PriceControls  />
      <Brands  />
    </form>
  )
}
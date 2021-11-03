import styles from '../styles/price-controls.module.scss'

export default function PriceControls () {
  return (
    <>
    <div className={styles.priceTitle}>Цена, ₽</div>
    <div className={styles.wrapper}>
        <label className={styles.priceMin}>
          <input type="number" name="minPrice" defaultValue="0" />
        </label>
        <label className={styles.priceMax}>
          <input type="number" name="maxPrice" defaultValue="3000"/>
        </label>
      </div>
    </>
  )
}
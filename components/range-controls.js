import styles from '../styles/range-controls.module.scss'

export default function RangeControls ({filterClass}) {
  return (
      <div className={`${filterClass} ${styles.rangeControls}`}>
        <div className={styles.rangeScale}>
          <div className={styles.rangeBar}></div>
        </div>
        <div className={`${styles.rangeToggle} ${styles.rangeToggleMin}`}></div>
        <div className={`${styles.rangeToggle} ${styles.rangeToggleMax}`}></div>
      </div>
  )
}
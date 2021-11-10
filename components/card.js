import styles from "../styles/card.module.scss";
import Image from 'next/image'

export default function Card ({ data }) {
  const {id, title, price, is_new, image, is_second_hand} = data
  const is_favorite = true;
  return <section className={styles.content}>
    <div className={styles.imgWrapper}>
      <Image
        className={styles.img}
        alt="card image"
        src={image.desktop.webp_x2}
        layout="fill"
      />
      {is_new && <span className={styles.new}>Новинка</span>}
    </div>
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.price}>
        {Math.round(price)}&#8381;
        {!is_second_hand && <span className={styles.secondHand}>Новое</span>}
      </p>
      <button data-id={id} className={styles.btnToCart}>В корзину</button>
      {is_favorite && <span className={styles.favorite} />}
    </div>
    </section>
}
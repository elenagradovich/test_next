import styles from '../styles/price-controls.module.scss'
import {useContext, useEffect, useState} from 'react';
import { Context } from '../pages';

const MAX_PRICE = 9999999999;
const MIN_PRICE = 0;

export default function PriceControls () {
  const [filterParams, setFilterParams] = useContext(Context);
  
  const [priceMin, setPriceMin] = useState(null)
  const [priceMax, setPriceMax] = useState(null)

  const changePriceHandler = (e) => {
    const nameField = e.currentTarget.name;
    const value = +e.currentTarget.value;
    
    switch (nameField) {
      case 'minPrice':
        if(value && value <= MAX_PRICE && value >=MIN_PRICE) {
          if(priceMax) {
            value <= priceMax && setPriceMin(value)
            return
          }
          setPriceMin(value)
        }
        break;
      case 'maxPrice': 
        if(value && value <= MAX_PRICE && value >=MIN_PRICE) {
          if(priceMin) {
            value >= priceMin && setPriceMax(value);
            return
          }
          setPriceMin(value)
        }
        break;
      default:
        throw new Error();
    }
  }

  useEffect(() => {
    if(priceMin) {
      setFilterParams({...filterParams, 'price[min]': priceMin.toString()})
    } else {
      delete filterParams['price[min]']; 
    }
  }, [priceMin])

  useEffect(() => {
    if(priceMax) {
      setFilterParams({...filterParams, 'price[max]': priceMax.toString()})
    } else {
      delete filterParams['price[max]']; 
    }
  }, [priceMax])

  return (
    <>
    <div className={styles.priceTitle}>Цена, ₽</div>
    <div className={styles.wrapper}>
        <label className={styles.priceMin}>
          <input 
            onBlur={(e) => changePriceHandler(e)} 
            type="number" min={MIN_PRICE} max={MAX_PRICE} 
            name="minPrice" placeholder={MIN_PRICE} />
        </label>
        <label className={styles.priceMax}>
          <input 
            onBlur={(e) => changePriceHandler(e)}
            type="number" min={MIN_PRICE} max={MAX_PRICE} 
            name="maxPrice" placeholder={MAX_PRICE} />
        </label>
      </div>
    </>
  )
}

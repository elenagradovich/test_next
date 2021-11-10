import styles from '../styles/price-controls.module.scss'
import {useContext, useEffect, useState} from 'react';
import { Context } from '../pages';
import {removeObjOptions} from '../utils/common'

const MAX_PRICE = 9999999999;
const MIN_PRICE = 0;

export default function PriceControls () {
  const [filterParams, setFilterParams] = useContext(Context);
  
  const [priceMin, setPriceMin] = useState(null)
  const [priceMax, setPriceMax] = useState(null)

  const changePriceHandler = (e) => {
    const nameField = e.currentTarget.name;
    const value = e.currentTarget.value !== "" ? +e.currentTarget.value : e.currentTarget.value;
    
    if((value || value===0) && value <= MAX_PRICE && value >=MIN_PRICE) {
      switch (nameField) {
        case 'minPrice':
          if(priceMax || priceMax===MIN_PRICE) {
            (value <= priceMax) && setPriceMin(value)
            return
          }
          setPriceMin(value)
          break;
          
        case 'maxPrice': 
          if(priceMin || priceMin===MIN_PRICE) {
            value >= priceMin && setPriceMax(value);
            return
          }
          setPriceMax(value)
          break;
        
        default:
          throw new Error();
      }
      return
    }

    switch (nameField) {
      case 'minPrice':
        setPriceMin(null)
      case 'maxPrice': 
        setPriceMax(null)
    }
  }

  useEffect(() => {
    if(priceMin || priceMin===MIN_PRICE) {
      setFilterParams({...filterParams, 'price[min]': priceMin.toString()})
    } else {
      removeObjOptions(filterParams, 'price[min]', setFilterParams)
    }
  }, [priceMin])

  useEffect(() => {
    if(priceMax || priceMax===MIN_PRICE) {
      setFilterParams({...filterParams, 'price[max]': priceMax.toString()})
    } else {
      removeObjOptions(filterParams, 'price[max]', setFilterParams)
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

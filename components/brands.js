import styles from '../styles/brand.module.scss'
import {useEffect, useState, useContext} from 'react';
import { brandList } from '../public/mock_data'
import { Context } from '../pages';

export default function Brands () {
  const [filterParams, setFilterParams] = useContext(Context);
  const [activeBrands, setActiveBrands] = useState([])

  const changeBrandHandler = (e) => {
    const id = e.currentTarget.value;

    if(activeBrands?.length > 0 && activeBrands.findIndex((item) => item === id) > 0) {
      setActiveBrands(activeBrands.filter((item) => item !== id))
    } else {
      setActiveBrands([...activeBrands, id])
    }
  }

  useEffect(() => {
    if(activeBrands.length > 0) {
      setFilterParams({...filterParams, 'brands':activeBrands})
    } else {
      delete filterParams['brands']; 
    }
  }, [activeBrands, filterParams, setFilterParams]);

  return (
    <>
      <div className={styles.title}>Бренд</div>
      <ul className={styles.items}>
        {brandList.map(({id, title}) => <li key={`key_${id}`} className={styles.item}>
              <input onChange={(e) => changeBrandHandler(e)} className={styles.customCheckbox} id={id} type='checkbox' value={id} name={title} />
              <label htmlFor={id} tabIndex="0">{title}</label>
            </li>
        )}
      </ul>
    </>
  )
}
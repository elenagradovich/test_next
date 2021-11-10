import {useState, useEffect, createContext} from 'react'
import Layout from '../components/layout'
import {getObektivList} from '../services/actions'
export const Context = createContext()

export default function Index({products, error}) {
  const [productsList, setProductsList] = useState([])
  const [errorMessage, setErrorMessage] = useState(null)
  const [filterParams, setFilterParams] = useState({})

  useEffect(() => {
    products && setProductsList(products)
    error && setErrorMessage(error)
  }, [products, error]);


  useEffect(() => {
    getObektivList(filterParams)
      .then((data) => {
        setProductsList(data.products)
        setErrorMessage(data.error)
      })
  }, [filterParams]);

  return (
    <>
      {errorMessage && <p>{errorMessage}</p>}
      {products && 
        <Context.Provider value={[filterParams, setFilterParams]} >
          <Layout products={productsList} />
        </Context.Provider>
      }
      {!products && <p>Загрузка...</p>}
    </>
  )
}

export const getStaticProps = async () => {
  const result = await getObektivList()
  return {props : result}
}

import {LOGIN, PASSWORD} from "../credentials";

const isEmptyObject = (obj) => {
  return Object.keys(obj).length === 0
}

const requestOptions = {
  method: "GET",
  headers: {
    "Content-type": "application/json; charset=UTF-8",
    "Authorization": 'Basic' + `${LOGIN}:${PASSWORD}`,
  }
}

export const getObektivList = async (params) => {
  let URL = 'https://getlens-master.stage.dev.family/api/pages/obektivy';
  
  if(params && !isEmptyObject(params)) {
    const a = Object.keys(params)
    .map((key) => {
      const keyValue = params[key];
      return Array.isArray(keyValue) ? keyValue.map((item) =>`${key}[]=${item}`).join('&') : `${key}=${keyValue}`
    })
    URL = URL + "?" + a.join('&')
  }

  try {
    const response = await fetch(URL, requestOptions)
    const resJSON = await response.json()
    return { products: resJSON.products,}
  } catch (e) {
    return { error: `Произошла ошибка, данные не получены. Попробуйте перезагрузить страницу`}
  }
}
// import useSwr from 'swr'
// import {LOGIN, PASSWORD} from "../credentials";

// const c = {
//     method: "GET",
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//       "Authorization": 'Basic' + `${LOGIN}:${PASSWORD}`,
//     }
//   }
  
//   const baseUrl = 'https://getlens-master.stage.dev.family/api/pages/obektivy'

// const fetcher = (url, requestOptions) => fetch(url, requestOptions).then(r => r.json())

// const withParams = (params) => {
//   return JSON.stringify({...DEFAULT_FILTER_PARAMS}) !== JSON.stringify({...params})
// }

// const isEmptyObject = (obj) => {
//   return Object.keys(obj).length === 0
// }



// export const useRequest = (params) => {
//     let firstParamFlag = true;
//     let url = baseUrl;
//     if(params && withParams(params) && !isEmptyObject(params)) {
//         for(let key in params) {
//         switch (key) {
//             case 'brands':
//             const brands = params[key];
//             if(brands.length > 0) {
//                 debugger
//                 url +=`${firstParamFlag ? '?' : '&'}${key}[]=${brands.join(',')}`;
//             }
//             firstParamFlag = false;
//             break;
//             default: if(params[key]) {
//             url += `${firstParamFlag ? '?' : '&'}${key}=${params[key]}`;
//             firstParamFlag = false;
//             }
//         }
//     }
//   }

//     const { data, error } = useSwr(url, fetcher)
   
//     return { data, error }
// }
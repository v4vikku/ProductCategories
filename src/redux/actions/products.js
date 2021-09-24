import { apiConfig } from "../../config/apiConfig"
import { GET_ALL_PRODUCTS, GET_PRODUCT_BY_ID } from "../constants/keys"

  export const getAllProducts  = () => async dispatch =>   { 
     await apiConfig.get('/products').then(( res  ) => { 
           return  dispatch({
               type  :  GET_ALL_PRODUCTS,
               payload  :  res.data
           })
     })
  }

  export const getProductById  = (id) => async dispatch =>   { 
    await apiConfig.get(`/products/${id}`).then(( res  ) => { 
          return  dispatch({
              type  :  GET_PRODUCT_BY_ID,
              payload  :  res.data
          })
    })
 }
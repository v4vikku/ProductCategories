import { GET_PRODUCT_BY_ID } from "../constants/keys";

export default (state ={} , action) => { 
    switch(action.type) { 
         case  GET_PRODUCT_BY_ID : 
           return   { ...state, ...action.payload}
          default: 
             return state;
        }
}
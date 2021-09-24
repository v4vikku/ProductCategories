import { GET_ALL_PRODUCTS } from "../constants/keys";

export default  (  state  = {} ,  action ) => { 
    switch(  action.type ) { 
         case  GET_ALL_PRODUCTS:
              return { ...state,  ...action.payload};
          default: 
             return state;    
    }
}
import { GET_ALL_CATEGORIES } from "../constants/keys";

export default  ( state= {} , action ) => { 
    switch(action.type) {
         case GET_ALL_CATEGORIES: 
            return  { ...state , ...action.payload }
         default:
            return state;   
    }
}
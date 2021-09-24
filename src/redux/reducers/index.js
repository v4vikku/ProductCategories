import { combineReducers } from 'redux';
import categoriesReducer from './categoriesReducer';
import productDetailReducer from './productDetailReducer';
import productReducers from './productReducers';

export default combineReducers({
    products: productReducers,
    product: productDetailReducer,
    categories  :   categoriesReducer
});

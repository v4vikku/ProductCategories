import { apiConfig } from "../../config/apiConfig"
import { GET_ALL_CATEGORIES } from "../constants/keys"

export const getAllCategories = () => async dispatch => {
    await apiConfig.get('/categories').then((res) => {
        return dispatch({
            type: GET_ALL_CATEGORIES,
            payload: res.data
        })
    })
}
import { 
    GET_COUNTRY_BY_PRODUCT, 
    GET_PRODUCT_BY_COUNTRY,
    // ADD_PRODUCT_TO_COUNTRY,
    // DELETE_PRODUCT_FROM_COUNTRY,
} from '../constants';
import axios from 'axios';

export const getCountryByProduct = (id) => async dispatch => {
    let response = await axios.get(`URL/${id}`);
    dispatch({ type: GET_COUNTRY_BY_PRODUCT, country: response.data.country })
}

export const getProductByCountry = (id) => async dispatch => {
    let response = await axios.get(`URL/${id}`);
    dispatch({ type: GET_PRODUCT_BY_COUNTRY, product: response.data.product })
}

// export const addProductToCountry = country => async dispatch => {
//     let response = await axios.post(`URL`, country);
//     dispatch({ type: ADD_PRODUCT_TO_COUNTRY, country: response.data.newProductToCountry})
// }

// export const deleteProductFromCountry = id => async dispatch => {
//     let response = await axios.delete(`URL/${id}`);
//     dispatch({ type: DELETE_PRODUCT_FROM_COUNTRY, country: response.data.deletedProduct})
// }

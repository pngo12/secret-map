import {
    GET_PRODUCT_BY_COUNTRY,
    GET_PRODUCTS,
    GET_COUNTRY,
    EDIT_PRODUCT,
    INVALID,
} from '../constants';
import axios from 'axios';

export const searchForCountryOrProduct = searchTerm => async dispatch => {
    try {
        let { data } = await axios.get(`http://localhost:5000/searchcategory/${searchTerm}`);
        dispatch({ type: "SEARCH_CATEGORY", category: data.category })
        switch (data.category) {
            case 'product':
                dispatch(_getProductByName(searchTerm));
                break;
            case 'country':
                dispatch(_getProductByCountry(searchTerm));
                break;
            case 'invalid':
                break;
            default: return;
        }
    } catch (e) {
        dispatch({ type: INVALID })
    }

}

const _getProductByCountry = country => async dispatch => {
    let response = await axios.get(`http://localhost:5000/country/${country}`);
    console.log(response)
    dispatch({ type: GET_PRODUCT_BY_COUNTRY, payload: response.data })
}

const _getProductByName = product => async dispatch => {
    let response = await axios.get(`http://localhost:5000/products/${product}`);
    dispatch({ type: GET_PRODUCTS, payload: response.data })
}

// name is optional, without anything it will return all countries
export const getCountry = () => async dispatch => {
    let response = await axios.get(`http://localhost:5000/country/`);
    dispatch({ type: GET_COUNTRY, payload: response.data })
}

export const addProduct = product => async dispatch => {
    let response = await axios.post('http://localhost:5000/products/new', product);
}

export const editProduct = (id, product) => async dispatch => {
    let response = await axios.put(`http://localhost:5000/products/${id}`, product);
    dispatch({ type: EDIT_PRODUCT, payload: response.data.product });
}

export const deleteProduct = id => async dispatch => {
    let response = await axios.delete(`http://localhost:5000/products/remove/${id}`);
}
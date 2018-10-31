import {
    GET_COUNTRY_BY_PRODUCT,
    GET_PRODUCT_BY_COUNTRY,
    GET_PRODUCTS,
    GET_COUNTRY,
    ADD_PRODUCT,
    EDIT_PRODUCT,
    DELETE_PRODUCT,
    // ADD_PRODUCT_TO_COUNTRY,
    // DELETE_PRODUCT_FROM_COUNTRY,
} from '../constants';
import axios from 'axios';

export const searchForCountryOrProduct = searchTerm => async dispatch => {
    let { data } = await axios.get(`http://localhost:5000/searchcategory/${searchTerm}`);
    
    // data = { category: 'product' or 'country' or 'involid' }
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
    }
}

const _getProductByCountry = country => async dispatch => {
    let response = await axios.get(`http://localhost:5000/country/${country}`);
    console.log(response)
    dispatch({ type: GET_PRODUCT_BY_COUNTRY, payload: response.data })
}


const _getProductByName = product => async dispatch => {
    let response = await axios.get(`http://localhost:5000/products/${product}`);
    console.log('THE RESPONSE IS', response)
    dispatch({ type: GET_PRODUCTS, payload: response.data })
}
// export const getCountry = country => async dispatch => {
//     let response = await axios.get(`http://localhost:5000/country/`);
//     console.log(response)
//     dispatch({ type: GET_COUNTRY, payload: response.data })
// }

export const addProduct = product => async dispatch => {
    console.log("PRODUCTS INPUT: ")
    console.log(product);
    let response = await axios.post('http://localhost:5000/products/', product);
    dispatch({ type: ADD_PRODUCT, product: response.data.newTeacher });
}

export const editProduct = (id, product) => async dispatch => {
    let response = await axios.put(`http://localhost:5000/products/${id}`, product);
    dispatch({ type: EDIT_PRODUCT, products: response.data.product });
}

export const deleteProduct = id => async dispatch => {
    let response = await axios.delete(`http://localhost:5000/products/${id}`);
    dispatch({ type: DELETE_PRODUCT, products: response.data.deletedProduct });
}

// export const addProductToCountry = country => async dispatch => {
//     let response = await axios.post(`URL`, country);
//     dispatch({ type: ADD_PRODUCT_TO_COUNTRY, country: response.data.newProductToCountry})
// }

// export const deleteProductFromCountry = id => async dispatch => {
//     let response = await axios.delete(`URL/${id}`);
//     dispatch({ type: DELETE_PRODUCT_FROM_COUNTRY, country: response.data.deletedProduct})
// }
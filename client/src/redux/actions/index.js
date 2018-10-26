import { 
    GET_COUNTRY_BY_PRODUCT, 
    GET_PRODUCT_BY_COUNTRY,
    LOG_IN,
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

export const login = (user) => dispatch => {
    axios.post('http://localhost:5000/api/GlidewellUser/login', user)
    .then(res => {
        console.log(res.data);
        dispatch({type: "LOG_IN", payload: res.data})
    })
    .catch(err => {
        console.log("Login error: ", err.data)
    })
}



// export const AUTHENTICATED = 'authenticated_user';
// export const UNAUTHENTICATED = 'unauthenticated_user';
// export const AUTHENTICATION_ERROR = 'authentication_error'

// const URL = 'http://localhost:5000/api/GlidewellUser/login';

// export function signIn({email, password}, history) {
//     return async (dispatch) => {
//         try {
//             const res = await axios.post(`${URL}`, {email,password});

//             dispatch({ type: AUTHENTICATED });
//             localStorage.setItem('user', res.data.token);
//             history.push('/secret');
//         } catch(err){
//             dispatch({
//             type: AUTHENTICATION_ERROR,
//             payload: 'Invalid email or password!'
//         })
//     }
// }
// }
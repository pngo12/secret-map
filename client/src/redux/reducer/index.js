import {
    GET_COUNTRY_BY_PRODUCT, 
    GET_PRODUCT_BY_COUNTRY,
    LOG_IN
    // ADD_PRODUCT_TO_COUNTRY,
    // DELETE_PRODUCT_FROM_COUNTRY,
} from '../constants'

const initialState = {
    country: '',
    products: [],
    userToken: '',
    authorized: false  
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        // case GET_COUNTRY_BY_PRODUCT:
        //     return {
        //         ...state, 
        //         country: action.payload.name,
        //         products: [action.payload.products]
        //     }
        case GET_PRODUCT_BY_COUNTRY:
            return {
                ...state,
                country: action.payload.name,
                products: [...action.payload.products]
            }
        case LOG_IN:
            return ({...state, userToken: action.payload, authorized: true})
        // case ADD_PRODUCT_TO_COUNTRY:
        //     return ({...state, country: [...state.country, ...action.newProductToCountry]}) 
        // case DELETE_PRODUCT_FROM_COUNTRY:
        //     return ({ ...state, country: [...action.deletedProduct]})           
        default: return state
    }
}

export default rootReducer;
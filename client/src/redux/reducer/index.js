import {
    GET_COUNTRY_BY_PRODUCT, 
    GET_PRODUCT_BY_COUNTRY,
    LOG_IN,
    GET_PRODUCTS,
    GET_COUNTRY,
    ADD_PRODUCT,
    EDIT_PRODUCT,
    DELETE_PRODUCT
    // ADD_PRODUCT_TO_COUNTRY,
    // DELETE_PRODUCT_FROM_COUNTRY,
} from '../constants'

const initialState = {
    country: '',
    products: [],
    userToken: '',
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
        case GET_PRODUCTS:
            return {
                ...state,
                products: [...action.payload.products]
            }
        case ADD_PRODUCT:
            return ({
                ...state, products: [...state.products,...action.newProduct]
            })
        case EDIT_PRODUCT:
            return ({
                ...state, products: [...action.product]
            })
        case DELETE_PRODUCT:
            return ({
                ...state, products: [...action.deletedProduct]
            })  
        case GET_COUNTRY:
            return {
                ...state,
                countries: [...action.payload.countries]
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

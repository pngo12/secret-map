import {
    GET_COUNTRY_BY_PRODUCT,
    GET_PRODUCT_BY_COUNTRY,
    GET_PRODUCTS,
    GET_COUNTRY,
    ADD_PRODUCT,
    EDIT_PRODUCT,
    DELETE_PRODUCT,
    INVALID
    // ADD_PRODUCT_TO_COUNTRY,
    // DELETE_PRODUCT_FROM_COUNTRY,
} from '../constants'

const initialState = {
    country: '',
    products: [],
    countries: [],
    userToken: '',
    category: '',
    countries: [],
    highlightCountries: {},
    cache: 0
}

const rootReducer = (state = initialState, action) => {
    let highlightCountries = {}
    switch (action.type) {
        // case GET_COUNTRY_BY_PRODUCT:
        //     return {
        //         ...state, 
        //         country: action.payload.name,
        //         products: [action.payload.products]
        //     }
        case GET_PRODUCT_BY_COUNTRY:
            highlightCountries[action.payload.name] = "#ff7675"
            return {
                ...state,
                country: action.payload.name,
                highlightCountries,
                products: [...action.payload.products],
                category: 'product',
                cache: state.cache + 1
            }
        case GET_PRODUCTS:

            
            action.payload.countries.map(c => c.name).forEach(name => {
                highlightCountries[name] = "#ff7675"
            })
            return {
                ...state,
                products: action.payload.countries,
                highlightCountries,
                category: 'country',
                cache: state.cache + 1
            }
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
                countries: [...action.payload]
            }
        case INVALID:
        return {
            ...state, 
            products: [],
            countries: []
        }
        default: return state
    }
}

export default rootReducer;

import {GET_COUNTRY_BY_PRODUCT, GET_PRODUCT_BY_COUNTRY } from '../constants'

const initialState = {
    country: [],
    product: []
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_COUNTRY_BY_PRODUCT:
            return 
        case GET_PRODUCT_BY_COUNTRY:
            return
        default: return state
    }
}

export default rootReducer;
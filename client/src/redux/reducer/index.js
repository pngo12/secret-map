import {
    GET_COUNTRY_BY_PRODUCT, 
    GET_PRODUCT_BY_COUNTRY,
    LOG_IN,
    GET_PRODUCTS,
    GET_COUNTRY,
    // ADD_PRODUCT_TO_COUNTRY,
    // DELETE_PRODUCT_FROM_COUNTRY,
} from '../constants'

const SORT_ASC = 'asc';
const SORT_DESC = 'desc';

const defaultSortKey = 'name';
const defaultSortOrder = SORT_ASC

const initialState = {
    country: '',
    products: [],
    userToken: '',
    // sortKey: defaultSortKey,
    // sortOrder: defaultSortOrder,
    // authorized: false  
}

function dynamicSort(property) {
    let sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {
        let result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
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
        case SORT_BY_NAME:
        // let sortKey = action.payload.sortKey || defaultSortKey;

        // if (sortKey === state.sortKey) {
        //     state.sortOrder = state.sortOrder === SORT_ASC ? SORT_DESC : SORT_ASC
        // }

        return {
            // products: state.products.map.sort( (a, b) => {
            //     if ( a[sortKey] < b[sortKey]) return state.sortOrder === SORT_ASC ? -1 : 1;
            //     if ( a[sortKey] > b[sortKey]) return state.sortOrder === SORT_ASC ? 1 : -1;
            // }),
            // sortKey: sortKey,
            // sortOrder: state.sortOrder
            products: dynamicSort(action.payload)
        }

        case SORT_BY_TYPE:
        default: return state
    }
}

export default rootReducer;
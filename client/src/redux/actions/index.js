import { GET_COUNTRY_BY_PRODUCT, GET_PRODUCT_BY_COUNTRY } from '../constants';

export const GET_COUNTRY_BY_PRODUCT = country => ({
    type: GET_COUNTRY_BY_PRODUCT, payload: country
})

export const GET_PRODUCT_BY_COUNTRY = product => ({
    type: GET_PRODUCT_BY_COUNTRY, payload: product
})


import * as ActionTypes from './actionTypes'

//action creators
export const productsSuccessAction = (data) => {
    return {
        type: ActionTypes.GET_PRODUCTS_SUCCESS,
        payload: data
    }
}

export const productsFailureAction = (errmessage) => {
    return {
        type: ActionTypes.GET_PRODUCTS_FAILURE,
        payload: errmessage
    }
}
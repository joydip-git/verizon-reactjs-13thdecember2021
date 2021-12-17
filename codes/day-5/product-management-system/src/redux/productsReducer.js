import * as ActionTypes from './actionTypes'
//state
const initialState = {
    products: [],
    filteredProducts:[],
    errorMessage: '',
    loaded: false
}

//reducer
//action={ type: 'GET_RECORDS', payload: resp.data }
export const productsReducer = (state = initialState, action) => {
    let newState
    switch (action.type) {
        case ActionTypes.GET_PRODUCTS_SUCCESS:
            newState = {
                ...state,
                products: action.payload,
                filteredProducts:action.payload,
                loaded: true,
                errorMessage: ''
            }
            break;

        case ActionTypes.GET_PRODUCTS_FAILURE:
            newState = {
                ...state,
                products: [],
                filteredProducts:[],
                loaded: true,
                errorMessage: action.payload
            }

            break;

        default:
            newState = {
                ...state
            }
            break;
    }

    return newState
}
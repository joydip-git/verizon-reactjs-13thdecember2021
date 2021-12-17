const { createStore, applyMiddleware } = require('redux')
const axios = require('axios')
const logger = require('redux-logger')

//state
const initialState = {
    products: [],
    errorMessage: '',
    loaded: false
}

//action types
const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS'
const GET_PRODUCTS_FAILURE = 'GET_PRODUCTS_FAILURE'

//action creators
const productsSuccessAction = (data) => {
    return {
        type: GET_PRODUCTS_SUCCESS,
        payload: data
    }
}

const productsFailureAction = (errmessage) => {
    return {
        type: GET_PRODUCTS_FAILURE,
        payload: errmessage
    }
}

//reducer
//action={ type: 'GET_RECORDS', payload: resp.data }
const productsReducer = (state = initialState, action) => {
    let newState
    switch (action.type) {
        case GET_PRODUCTS_SUCCESS:
            newState = {
                ...state,
                products: action.payload,
                loaded: true,
                errorMessage: ''
            }
            break;

        case GET_PRODUCTS_FAILURE:
            newState = {
                ...state,
                products: [],
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

//store
const store = createStore(
    productsReducer,
    applyMiddleware(logger.createLogger())
)
//state={products:[{},{},{}]}

//component
//CDM
function call() {
    axios.get('http://127.0.0.1:8081/products')
        .then(
            (resp) => {
                //store.getState()
                const successActionObj = productsSuccessAction(resp.data)
                store.dispatch(successActionObj)
                //store.getState()
            },
            (err) => {
                //store.getState()
                const failureActionObj = productsFailureAction(err.message)
                store.dispatch(failureActionObj)
                //store.getState()
            }
        )
}
call()
//store.dispatch({ type: 'DELETE_RECORDS' })
import { productsReducer } from "./productsReducer"
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'

const store = createStore(
    productsReducer,
    applyMiddleware(createLogger())
)
export default store
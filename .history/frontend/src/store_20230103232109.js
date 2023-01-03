import{configureStore ,combineReducers ,applyMiddleware } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { productDetailsSReducer,productListsSReducer } from './reducers/productReducers'
import { cartReducer} from './reducers/cartReducers'

export const reducer = combineReducers({
    productDetails: productDetailsSReducer,
    productList  : productListsSReducer,
    cart :cartReducer,
})


export const initialState= {}

const middleware=[thunk]
const store=configureStore({
    reducer:reducer,
    preloadedState: initialState,
    middleware: middleware,});




export default store
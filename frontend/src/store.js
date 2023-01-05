import{configureStore ,combineReducers ,applyMiddleware } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { productDetailsReducer,productListsReducer } from './reducers/productReducers'
import { cartReducer } from './reducers/cartReducers'
import { userLoginReducer } from './reducers/userReducers'

const reducer = combineReducers({
    productList  : productListsReducer,
    productDetails: productDetailsReducer,
    cart : cartReducer ,
    userLogin  : userLoginReducer,
})


const cartItemsFromStorage= localStorage.getItem('cartItems')?
    JSON.parse(localStorage.getItem('cartItems'))
    : []

export const initialState= {
    cart:{cartItems:cartItemsFromStorage}
}

const middleware=[thunk]
const store=configureStore({
    reducer:reducer,
    preloadedState: initialState,
    middleware: middleware,});




export default store
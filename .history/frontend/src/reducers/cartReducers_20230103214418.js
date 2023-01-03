import {CART_ADD_ITEM, } from '../constants/cartConstants'


export const cartReducers = (state = {cartItems:[]},action) => {
 switch (action.type){
    case CART_ADD_ITEM:
        const item =action.payload
        const existItem = state.cartItems.find(x => x.product === item.product)
           


        if(existItem){
          return{
            ...state,
            cartitems: state.cartItems.map(x-?)
          }
        }
        else{
          return{
            ...state,
            cartitems:[...state.cartitems, item]
          }
        }



    default:
        return state;

 }

}


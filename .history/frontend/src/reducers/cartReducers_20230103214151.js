import {CART_ADD_ITEM, } from '../constants/cartConstants'


export const cartReducers = (state = {cartitems:[]},action) => {
 switch (action.type){
    case CART_ADD_ITEM:
        const item =action.payload
        const existItem = state.cartitems.find(x => x.product === item.product)
           


        if(existItem){
          return{
            
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

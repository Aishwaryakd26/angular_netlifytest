import { createReducer, on } from "@ngrx/store"
import { addToCart } from "./cart.action"

export interface CartState{
    //products:Iproduct[];
    products:any
}

export const initialCounterState:CartState={

    products:[]
}


//how angular handle action using on 
export const cartReducer = createReducer(
    initialCounterState,
   on(addToCart,(state,{product})=>{
    //existing array (state.products)add new product to that 
    const updatedProduct=[...state.products, product]
    return{
        ...state,
        products:updatedProduct
    }
   })
)
import { ActionTypes } from "../constants/action-types";

//this is function which will create action 
//object to get list of products
export const setProducts=(products)=>{
    return{
        type: ActionTypes.SET_PRODUCT,
        payload : products
    }
}

//this is function which will create action 
//object to get details of selected product
export const selectedProduct=(product)=>{
    return{
        type: ActionTypes.SELECTED_PRODUCT,
        
    }
}

//this is function which will create action 
//object to remove the product
export const removeSelectedProduct=(product)=>{
    return{
        type: ActionTypes.REMOVE_SELECTED_PRODUCT,
        payload : product
    }
}
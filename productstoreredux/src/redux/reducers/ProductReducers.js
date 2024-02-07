import { ActionTypes } from "../constants/action-types";
//this is initial state
const initialState={
    count:10,
    products:[]
}
//this function will assign the array comming via payload
//to product array  
export const productReducer=(state=initialState,{type,payload})=>{

    switch(type){
        //it will modify the value of products array to payload
        case ActionTypes.SET_PRODUCT:
            return {...state, products:payload};
        default:
            return state;
    }
}
//this function will assign the product comming via payload
//to product object
export const selectedProductReducer=(state={},{type,payload})=>{
    console.log(type);
    switch(type){
        //it will modify the value of products array to payload
        case ActionTypes.SELECTED_PRODUCT:
            return {...state,...payload};
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return {};
        default :
            return state;

    }
}
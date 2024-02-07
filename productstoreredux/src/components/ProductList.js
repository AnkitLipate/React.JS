import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import {useEffect} from 'react';
import {setProducts} from '../redux/actions/ProductAction';
import ProductComponent from './ProductComponent';

const ProductList=()=>{
    //this will reteivr data from store
    const products = useSelector((state)=>state.allProducts.products);
    //this will create a dispatch object to send action to reducer 
    const dispatch = useDispatch();
    const fetchproducts=async()=>{
    //    axios.get("https://fakestoreapi.com/products").then((response)=>{
    //      dispatch(setProduct(response.data));
    //    }).catch(()=>{})
        console.log("in fetchdata function");
        const response = await axios.get("https://fakestoreapi.com/products").catch((err)=>{
            console.log("error occured, err");
        });
        /* this will dispatch the action to productReducer */
        dispatch(setProduct(response.data));
    }
    
    //as soon as page get loaded in the memory, equivalent to componentDidMount
    useEffect(()=>{
        console.log("in useEffect function");
        fetchproducts()
    },[]);


    return(
        <div clasName="ui grade container">
            <ProductComponent/>
        </div>
    )
}


export default ProductList;
import axios from 'axios';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import {useEffect} from 'react';
import { removeSelectedProduct } from '../redux/actions/ProductAction';
import { selectedProduct } from '../redux/actions/ProductAction';
import {useSelector, useDispatch} from 'react-redux'; 
const ProductDetails =()=>{
    //it will retrieve the data from request parameters
   // /product/1
    const {productId} = useParams();
    //this will select the product from store 
    const product = useSelector((state)=>state.product);
    const {id, title, image, price, category, description} = product;
    //create dispatch object
    const dispatch = useDispatch();
    //this function will retrieve selected product the data from the url
    //and keep it in the store
    const fetchdetails = async (id)=>{
        console.log("in fetch deatails");
      const response = await axios.get(`https://fakestoreapi.com/products/${id}`).catch((err)=>{
        console.log("error occured", err);
      });
      dispatch(selectedProduct(response.data))


    }
    //this function will be called every time productId changes
    useEffect(()=>{
        console.log("in useEffect");
        if(productId && productId!=="") fetchdetails(productId);
        return ()=>{
            dispatch(removeSelectedProduct());
        }
    },[productId]);

    //this will display one product
    return(
        <div className="container">
            <div className="ui two column stackable center align grid">
                <div className="ui verticle divider">And</div>
                    <div className="middle aligned row">
                        <div className="column lp">
                            <img src={image} className="ui fluid image"/>
                        </div>
                        <div className="column rp">
                            <h1>{title}</h1>
                            <h2>${price}</h2>
                        </div>
                        <div>
                            <h3>{category}</h3>
                            <p>{description}</p>
                        </div>
                        <div className="ui verticle animated button">
                            <div className="visible content">Add to cart</div>
                        </div>
                    </div>
                
            </div>
        </div>
    )

}

export default ProductDetails; 
import {Link} from 'react-router-dom';
import react from 'react';
import { UseSelector } from 'react-redux';
const ProductComponent=()=>{
    //selecting products array from redux store 
    const products = useSelector((state)=>state.allProducts.products);
    //generate produc for every value in products array
    const renderList = products.map((product,index)=>{
        const {id,title,image,price,category}=product;
        return(
            <div className="four wide column" key={index}>
                <div className="ui link cards">
                    <div className="cards">
                        <div className="image">
                            <img src={image} alt={title}/>
                        </div>
                        <div className="content">
                            <div className="header">{title}</div>
                            <div className="meta price">${price}</div>
                            <div className="meta">{category}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    });

    return (
        <div>
            {renderList()}
        </div>
    )
}


export default ProductComponent;
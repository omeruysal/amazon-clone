import React from 'react'
import { useStateValue } from '../../context/StateProvider'
import "./Product.css"

function Product({title,image,price,rating,id}) {
    const [{basket},dispatch] = useStateValue();
    const addToBasket = () =>{
        dispatch({
            type : 'ADD_TO_BASKET',
            item :{
                id,
                title,
                image,
                price,
                rating,
            }
        })
    }
    return (
        <div className="product">
            <div className="product_info">
                <div className="product_title">{title}</div>
                <div className="product_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </div>
                <div className="product_rating">
                   {Array(rating)
                   .fill()
                   .map((_,i) =>(
                    <div key={i}>🌟</div>
                   ))} 
                </div>
            </div>
            <img src={image} alt=""/>
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product

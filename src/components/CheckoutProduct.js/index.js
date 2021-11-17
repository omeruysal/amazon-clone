import React from 'react'
import { useStateValue } from '../../context/StateProvider';
import './CheckoutProduct.css'

function CheckoutProduct({id,image, title, price, rating}) {

    const [{basket},dispatch] = useStateValue();
    const removeFromBasket = () =>{
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id,
        })
    }
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image}/>
            <div className="checkoutProduct__info">
                <div className="checkoutProduct__title">
                    {title}
                </div>
                <div className="checkoutProduct__price">
                    {price}
                </div>
                <div className="checkoutProduct__rating">
                {Array(rating)
                   .fill()
                   .map((_,i) =>(
                    <div key={i}>🌟</div>
                   ))} 
                </div>
                <button onClick={removeFromBasket}>Remove from basket</button>
            </div>

        </div>
    )
}

export default CheckoutProduct

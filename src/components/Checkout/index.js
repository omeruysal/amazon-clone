import React from 'react'
import { useStateValue } from '../../context/StateProvider';
import CheckoutProduct from '../CheckoutProduct.js';
import Header from '../Header';
import Subtotal from '../Subtotal'
import   './Checkout.css'

function Checkout() {

    const [{basket,user},dispatch] = useStateValue();

    return (
        <>
        <Header/>
        <div className="checkout">

            <div className="checkout_left">
                <img className="checkout_ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423392668_.jpg"/>
                <div>
                    <h3>Hello, {user?.email}</h3>
                    <h2 className="checkout_title">Your Shopping Basket</h2>
                    {basket?.map((product,index)=>(
                        <CheckoutProduct {...product} />
                    ))}
                </div>
            </div>
            <div className="checkout_right">
                <Subtotal/>
            </div>

        </div>
        </>
    )
}

export default Checkout

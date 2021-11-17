import React, { useEffect, useState } from 'react'
import CurrencyFormat from 'react-currency-format'
import { getBasketTotal } from '../../context/reducer';
import { useStateValue } from '../../context/StateProvider';
import './Subtotal.css'

function Subtotal() {
    const [{basket},dispatch] = useStateValue();
    const [total, setTotal] = useState(0)

   // We use getBasketTotal function instead of this part
    // useEffect(() => {
    //     basket.map((b)=>(
    //       setTotal(pr=>{ return pr + b.price})  
    //     ))
    // }, [basket.length])
    return (
        <div className="subtotal">
            {/* <CurrencyFormat
            renderText={(value)=>(
                <> */}
                <p>
                    Subtotal ({basket?.length} items):
                    <strong> ${getBasketTotal(basket)}</strong>
                </p>
                <small className="subtotal_gift">
                    <input type="checkbox"/>
                    This order contains a gift
                </small>
                {/* </>
            )}
            decimalScale={2}
            value={0}
            display={"text"}
            thousandSeparator={true}
            prefix={"$"}
            /> */}
            <button className="">Proceed to Checkout</button>
            
        </div>
    )
}

export default Subtotal

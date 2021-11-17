import React from 'react'
import Header from '../Header'
import Product from '../Product'
import './Home.css'

function Home() {
    return (
        <>
        <Header/>
        <div className="home">
            <div className="home_container">
                <div >

                <img
                className="home_image"
                src="https://teknosafari.net/wp-content/uploads/2020/09/amazon-prime-1.jpg" alt=""/>
                </div>
                
                <div className="home_row">
                    <Product price={29.99} id={123} rating={5} title="The lean startup: How Constant Innocation Creates Radocally Succesful Businesses Paparback" image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"/>
                    <Product price={249.99} id={143} rating={4} title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough hook and Whisk, 5 Litre Glass Bowl" image="https://cdn.akakce.com/kenwood/kenwood-kmx750ar-kmix-1000-w-5-lt-mutfak-sefi-hamur-z.jpg"/>

                </div>
                <div className="home_row">
                    <Product price={199.99} id={354333} rating={2} title="Samsung c40 Pro Smart Watch " image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"/>
                    <Product price={98.99} id={1445314}rating={1} title="Amazon Echo (3rd generation) | Smart speaker with Alexa,Charcoal Fabric" image="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6287/6287976_sd.jpg"/>
                    <Product price={499.99} id={145433} rating={4} title="New Apple iPad Pro 12.9 inch Silver 4-th Generation" image="https://cdn.cimri.io/image/1000x1000/apple-ipad-pro-2020-129-256-gb_285766428.jpg"/>

                </div>
                <div className="home_row">
                    <Product price={1229.99} rating={5} title="Samsung LC244GADFSGSAFg32 49 inch LED Curved Gaming Monitor- Super Ultra Wide Dual WQFQW 5120 x 1440" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYitScmX2A81ob7jwmU2XaCEk5O8oPEmrCEpqpR6iLbENLDJgdaNo0lLD-ScEoOUyyEHA&usqp=CAU"/>

                </div>
            </div>
        </div>
    </>
    )
}

export default Home

 //src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE_XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""/>

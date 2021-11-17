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
                    <Product price={899.99} id={123} rating={5} title="Apple MacBook Air with Apple M1 Chip (13-inch, 8GB RAM, 256GB SSD Storage) - Silver (Latest Model)" image="https://i5.walmartimages.com/asr/049f4d39-0d3d-401b-bec4-7219b3719b46.5a77cd4f5ea0ac00c4b93c57914306f8.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"/>
                    <Product price={99.99} id={145433} rating={4} title="Samsung Fresh44mmBlk SM-R870NZKAXAA tk3" image="https://i5.walmartimages.com/asr/eb46f4b0-d45c-4327-bb5c-f8c0c9b66532.cbfd385ca2480e63067dddc4117d5a53.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"/>

                </div>
                <div className="home_row">
                    <Product price={19.99} id={354333} rating={2} title="Will Smith; Mark Manson Will (Hardcover)" image="https://i5.walmartimages.com/asr/2e7fda88-c010-4fe3-86f1-5164f0c67ad1.15711cc25cafa875c64bb24b04b617c7.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"/>
                    <Product price={98.99} id={1445314}rating={1} title="Sony 55 Class XR55X90J Bravia XR Full Array LED 4K Ultra HD Smart Google TV with Dolby Vision HDR X90J Series 2021 Model" image="https://i5.walmartimages.com/asr/7c54db57-9e2a-453a-af1d-f9d2e8a26d0d.01b88abe49e1906952f9c8e6ee25cf85.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"/>
                    <Product price={149.99} id={143} rating={4} title="Raspberry Pi - Raspberry Pi 3 Model B Motherboard" image="https://i5.walmartimages.com/asr/1642e8e6-76e0-42e4-a1eb-d6a62801286e_1.beb9d3fb972ff59504dbd79132314f1e.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"/>

                </div>
                <div className="home_row">
                    <Product price={1229.99} rating={5} title="Lifestyle Solutions - Lifestyle Solutions Harvard Sofa with Curved Arm" image="https://i5.walmartimages.com/asr/f6609221-826a-489b-a9ae-60de31d551e6_1.7d19993d93859bf128aa7658048b5b3a.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"/>

                </div>
            </div>
        </div>
    </>
    )
}

export default Home

 //src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE_XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""/>

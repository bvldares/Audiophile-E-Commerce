import React from "react";
import data from "../data.json"
import "../CSS/Home.css"
import { Link } from "react-router-dom";

import headphonesThumb from "../assets/shared/desktop/image-category-thumbnail-headphones.png"
import speakersThumb from "../assets/shared/desktop/image-category-thumbnail-speakers.png"
import earphonesThumb from "../assets/shared/desktop/image-category-thumbnail-earphones.png"
import yx1 from "../assets/home/mobile/image-earphones-yx1.jpg"
import zx9 from "../assets/home/mobile/image-speaker-zx9.png"
import bestGearImg from "../assets/shared/mobile/image-best-gear.jpg"
import rightArrow from "../assets/shared/desktop/icon-arrow-right.svg"



export default function Home(){
    return(
        <main className="home">
            <div className="hero-wrapper">
                <section className="hero">
                    <p className="hero-subtitle">NEW PRODUCT</p>
                    <h1 className="hero-title">XX99 Mark II <br /> HeadphoneS</h1>
                    <p className="hero-description">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                    <Link className="hero-redirect" to="products">SEE PRODUCT</Link>
                </section>
            </div>

           <div className="padding-wrapper">

                <section className="products-collection">
                    <div className="product-category">
                        <img className="product-category-img" src={headphonesThumb} alt="headphones" />
                        <p className="product-category-title">Headphones</p>
                        <Link className="product-category-redirect" to="headphones">SHOP <img src={rightArrow} alt="arrow icon" className="arrow-icon" /></Link>
                    </div>

                    <div className="product-category">
                        <img className="product-category-img" src={speakersThumb} alt="speackers" />
                        <p className="product-category-title">Speakers</p>
                        <Link className="product-category-redirect" to="speakers">SHOP <img src={rightArrow} alt="arrow icon" className="arrow-icon" /></Link>
                    </div>

                    <div className="product-category">
                        <img className="product-category-img" src={earphonesThumb} alt="earphones" />
                        <p className="product-category-title">Earphones</p>
                        <Link className="product-category-redirect" to="earphones">SHOP <img src={rightArrow} alt="arrow icon" className="arrow-icon" /></Link>
                    </div>
                </section>

                <section className="featured-product">
                    <div className="zx9">
                        <img src={zx9} alt="zx9 speaker" className="zx9-img" />
                        <div className="zx9-content">
                            <h2 className="zx9-title">ZX9 <br /> SPEAKER</h2>
                            <p className="zx9-description">Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                            <Link className="zx9-redirect" to="DADESTINARE">SEE PRODUCT</Link>
                        </div>
                    </div>

                    <div className="zx7">
                        <h3 className="zx7-title">zx7 speaker</h3>
                        <Link className="zx7-redirect" to="DADESTINARE">SEE PRODUCT</Link>
                    </div>

                    <div className="yx1">
                        <img className="yx1-img"  src={yx1} alt="earphones yx1" />
                        <div className="yx1-content">
                            <h3 className="yx1-title">yx1 earphones</h3>
                            <Link className="yx1-redirect" to="DADESTINARE">SEE PRODUCT</Link>
                        </div>
                    </div>
                </section>


                <section className="outro">
                    <img className="outro-img" src={bestGearImg} alt="guy wearing XX99 MARK II" />
                    <div className="outro-content">
                        <h2 className="outro-title">Bringing you the  <span className="outro-title-span">best</span> audio gear</h2>
                        <p className="outro-description">
                            Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, 
                            and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. 
                            Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
                        </p>
                    </div>
                </section>

           </div>
        </main>
    )
}
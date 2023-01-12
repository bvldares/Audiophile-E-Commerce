import React from "react";
import { Link } from "react-router-dom";
import "../CSS/Footer.css"
import logo from "../assets/shared/desktop/logo.svg"
import facebookIcon from "../assets/shared/desktop/icon-facebook.svg"
import twitterIcon from "../assets/shared/desktop/icon-twitter.svg"
import instagramIcon from "../assets/shared/desktop/icon-instagram.svg"


export default function Footer(){
    return (
        <footer>
            <div className="footer-wrapper">
            <img src={logo} alt="audiophile logo" className="footer-logo"/>
        
            <ul className="footer__list">
                <li className="footer_list-item"><Link className="footer_links" to="/">Home</Link></li>
                <li className="footer_list-item"><Link className="footer_links" to="/headphones">Headphones</Link></li>
                <li className="footer_list-item"><Link className="footer_links" to="/speakers">Speakers</Link></li>
                <li className="footer_list-item"><Link className="footer_links" to="/earphones">Earphones</Link></li>
            </ul>

            <p className="footer-p">
            Audiophile is an all in one stop to fulfill your audio needs. We're a small 
            team of music lovers and sound specialists who are devoted to helping you 
            get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.
            </p>

            <div className="footer-socials">
                <p className="copyrights">Copyright 2021. All Rights Reserved</p>
                <div className="socials">
                    <img className="social" src={facebookIcon} alt="facebook icon" />
                    <img className="social" src={twitterIcon} alt="twitter icon" />
                    <img className="social" src={instagramIcon} alt="instagram icon" />
                </div>
            </div>
            </div>
        </footer>
    )
}
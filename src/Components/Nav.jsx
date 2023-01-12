import React, { useState } from "react";
import "../CSS/Nav.css"
import { Link } from "react-router-dom";
import logo from "../assets/shared/desktop/logo.svg"
import hamburger from "../assets/shared/tablet/icon-hamburger.svg"
import cartIcon from "../assets/shared/desktop/icon-cart.svg"

export default function Nav(){
    const[menu, setMenu] = useState(false)
    const toggleMenu = () => setMenu(prev => !prev)


    return (
        <div className="nav-wrapper">
            <nav>
                <img src={hamburger} className="hamburger-icon" alt="hamburger-icon" onClick={toggleMenu}/>
                <img src={logo} alt="audiophile logo" className="logo"/>
            
                <ul className="nav__list" style={{transform: menu ? "translateX(0)" : ""}}>
                    <li className="nav_list-item"><Link className="nav_links" to="/">Home</Link></li>
                    <li className="nav_list-item"><Link className="nav_links" to="/headphones">Headphones</Link></li>
                    <li className="nav_list-item"><Link className="nav_links" to="/speakers">Speakers</Link></li>
                    <li className="nav_list-item"><Link className="nav_links" to="/earphones">Earphones</Link></li>
                </ul>
        
    
                <img src={cartIcon} alt="cart icon" className="cart-icon" />
            </nav>
        </div>
      
    )
}
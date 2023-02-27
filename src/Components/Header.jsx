import { useState } from "react";
import { Link } from "react-router-dom";
import ProductNavigator from "./ProductNavigator";
export default function Header(props){

    const[open, setOpen] = useState(false)

    return (
        <header className="bg-light-black py-8">
            <nav className="max-w-[1100px] mx-auto flex items-center justify-between px-6 md:px-10 xl:px-0 relative">
                {props.size <1024 && 
                <img 
                    onClick={()=>setOpen(!open)} 
                    src="/assets/shared/tablet/icon-hamburger.svg" alt="menu icon" 
                />}

                <img src="/assets/shared/desktop/logo.svg" alt="logo" />


                {props.size > 1023 && 
                    <ul className="flex gap-9 font-medium text-white tracking-[2px] text-[13px] ">
                        <li><Link to="/">HOME</Link></li>
                        <li><Link to="/product/headphones">HEADPHONES</Link></li>
                        <li><Link to="/product/speakers">SPEAKERS</Link></li>
                        <li><Link to="/product/earphones">EARPHONES</Link></li>
                    </ul>
                }


                <img src="/assets/shared/desktop/icon-cart.svg" alt="" />

                {props.size <1024 && 
                <div className="absolute left-0 right-0 top-[57px] bg-white py-[70px] px-6 md:px-10 rounded-b-l shadow-sm duration-500 " style={{transform: open ? "" : "translateY(-140%)"}}>
                    <ProductNavigator />
                </div>}

               
            </nav>
        </header>
    )
}
import { useEffect, useState } from "react";
import { Link,  } from "react-router-dom";
import ProductNavigator from "./ProductNavigator";

export default function Header(props){

    const[open, setOpen] = useState(false)
    const[cartOpen, setCartOpen] = useState(false)
    
    const cartEl = props.cart.map(item=>{
        return (
            <div className="flex w-full items-center" key={item.id}>
                <img className="w-[64px] h-[64px] rounded-lg object-cover" src={item.img} alt={item.name} />
                <div className="ml-4 flex w-full justify-between">
                    <div>
                        <Link className="text-[15px] font-bold ">{item.name}</Link>
                        <h5 className="text-sm font-semibold opacity-50">${item.price}</h5>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <header className="bg-light-black py-8">
            <nav className="max-w-[1100px] mx-auto flex items-center justify-between px-6 md:px-10 xl:px-0 relative">
                {props.size <1024 && 
                <img 
                    onClick={()=>setOpen(!open)} 
                    src="/assets/shared/tablet/icon-hamburger.svg" alt="menu icon" 
                />}

                <Link to="/"><img src="/assets/shared/desktop/logo.svg" alt="logo" /></Link>


                {props.size > 1023 && 
                    <ul className="flex gap-9 font-medium text-white tracking-[2px] text-[13px] ">
                        <li><Link to="/">HOME</Link></li>
                        <li><Link to="/product/headphones">HEADPHONES</Link></li>
                        <li><Link to="/product/speakers">SPEAKERS</Link></li>
                        <li><Link to="/product/earphones">EARPHONES</Link></li>
                    </ul>
                }


                <img onClick={()=>setCartOpen(!cartOpen)} src="/assets/shared/desktop/icon-cart.svg" alt="" />

                {props.size <1024 && 
                <div className="absolute left-0 right-0 top-[57px] bg-white py-[70px] px-6 md:px-10 rounded-b-l shadow-sm duration-500 z-10 " style={{transform: open ? "" : "translateY(-140%)"}}>
                    <ProductNavigator />
                </div>}

                
               {cartOpen && <section className="absolute bg-white p-8 rounded-lg top-16 right-[24px] left-[24px] sm:left-auto md:right-[40px] xl:right-0 border border-grey z-50 sm:w-[375px]">
                    <div className="flex justify-between">
                        <h3>CART</h3>
                        <button className="opacity-60 underline" onClick={props.cleanCart}>Remove all</button>
                    </div>


                    <div className="mt-8 flex flex-col gap-6">
                      {props.cart.length == 0  && <h3 className="p-6 text-center opacity-50 mt-8 text-[13px] uppercase tracking-widest">Empty cart</h3> }
                      {props.cart && cartEl }
                    </div>

                    <div className="flex justify-between mt-8 mb-6">
                        <p className="opacity-60">TOTAL</p>
                        <strong className="text-lg">$ {props.total}</strong>
                    </div>
                    <Link className="py-4 text-center w-full inline-block uppercase tracking-[1px] bg-terra hover:bg-terra-light text-white" onClick={()=>setCartOpen(!cartOpen)} to="/checkout">checkout</Link>
                </section>}
               
            </nav>
        </header>
    )
}
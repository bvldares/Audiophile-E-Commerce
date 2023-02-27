import { useState, useEffect } from "react"
import {Route, Routes} from "react-router-dom"
import data from "./data.json"
import ProductNavigator from "./Components/ProductNavigator"
import ShowcaseProduct from "./Components/ShowcaseProduct"
import Outro from "./Components/Outro"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Home from "./Pages/Home"
import Checkout from "./Pages/Checkout"
import ProductDetail from "./Pages/ProductDetail"
import ProductCategory from "./Pages/Headphones"
import Headphones from "./Pages/Headphones"


export default function App() {
  const[size, setSize] = useState(window.innerWidth)

  useEffect(()=>{
    const handleWidth = () => setSize(window.innerWidth)
    
    window.addEventListener("resize", handleWidth)
  },[size])

  const device = size > 1024 ? "desktop" : size > 768 ? "tablet" : "mobile"


  return(
    <>
    <Header size={size}/>
    <div  className="mx-auto">
      <Routes>
          <Route exact path="/" element={<Home size={device}/>} />
          <Route path="/:productSlug" element={<ProductDetail size={device}/>} />
          <Route path="/product/:productCategory" element={<Headphones size={device} /> }/>
      </Routes>
    </div>
    <Footer />
    
    </>
  )
}


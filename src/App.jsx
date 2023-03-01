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
  const [cartArray, setCartArray] = useState([])

  useEffect(()=>{
    const handleWidth = () => setSize(window.innerWidth)
    window.addEventListener("resize", handleWidth)
  },[size])

  const device = size > 1024 ? "desktop" : size > 768 ? "tablet" : "mobile"

  function addToCart(currentArr, count){
      

    if(cartArray.every(item=>item.id === currentArr.id)){
      setCartArray(prev => prev.map(item=>{
        if(item.id === currentArr.id){
          return {...item, count: item.count + count}
        }}))
    }else{
      setCartArray(prev=> ([...prev, {id:currentArr.id,name:currentArr.name, price: currentArr.price, img:currentArr.image.mobile, count: count}]))
      
    }
    
  }
  










  console.log(cartArray)

  return(
    <div className="bg-light-grey">
    <Header size={size} cart={cartArray} />
    <div  className="mx-auto">
      <Routes>
          <Route exact path="/" element={<Home size={device}/>} />
          <Route path="/:productSlug" element={<ProductDetail size={device} addToCart={addToCart} />} />
          <Route path="/product/:productCategory" element={<Headphones size={device} /> }/>
          <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
    <Footer />
    
    </div>
  )
}


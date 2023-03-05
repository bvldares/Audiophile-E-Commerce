import { useState, useEffect } from "react"
import {Route, Routes} from "react-router-dom"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Home from "./Pages/Home"
import Checkout from "./Pages/Checkout"
import ProductDetail from "./Pages/ProductDetail"
import Headphones from "./Pages/Headphones"
import ScrollComponent from "./Components/ScrollComponent"


export default function App() {

  const[size, setSize] = useState(window.innerWidth)
  const [cartArray, setCartArray] = useState([])
  const [total, setTotal] = useState(0)


  useEffect(()=>{
    const handleWidth = () => setSize(window.innerWidth)
    window.addEventListener("resize", handleWidth)
  },[size])

  useEffect(()=>{
    let sum = 0 
    cartArray.map(item=> sum = sum + item.price * item.count)
    setTotal(sum)
  },[cartArray])

  const device = size > 1024 ? "desktop" : size > 768 ? "tablet" : "mobile"

  function addToCart(currentArr, count){
    const existingEl = cartArray.find(item=> item.id == currentArr.id)
    if(existingEl == undefined) setCartArray(prev=>[...prev, {id:currentArr.id, img: currentArr.image.mobile, name:currentArr.cartname, count:count, price:currentArr.price}])
    else setCartArray(prev => prev.map(item => item.id == currentArr.id ? {...item, count: count}: item))
  }

  function cleanCart(){setCartArray([])}

  return(
    <div className="bg-light-grey">
    <ScrollComponent />
    <Header size={size} cart={cartArray} total={total} cleanCart={cleanCart} />
    <div  className="mx-auto">
      <Routes>
          <Route exact path="/" element={<Home size={device} />} />
          <Route path="/:productSlug" element={<ProductDetail size={device} addToCart={addToCart} />} />
          <Route path="/product/:productCategory" element={<Headphones size={device} /> }/>
          <Route path="/checkout" element={<Checkout total={total} cart={cartArray} clear={cleanCart} />} />
      </Routes>
    </div>
    <Footer />
    </div>
  )
}


import { useState, useEffect } from "react"
import {Route, Routes} from "react-router-dom"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Home from "./Pages/Home"
import Checkout from "./Pages/Checkout"
import ProductDetail from "./Pages/ProductDetail"
import Headphones from "./Pages/Headphones"

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
    cartArray.map(item=> sum = sum + item.price)
    setTotal(sum)
  },[cartArray])

  const device = size > 1024 ? "desktop" : size > 768 ? "tablet" : "mobile"

  function addToCart(currentArr, count){
    setCartArray(prev=> [...prev, {id:currentArr.id, name:currentArr.name, price: currentArr.price, img:currentArr.image.mobile , count: count}])
  }

  function cleanCart(){setCartArray([])}

  return(
    <div className="bg-light-grey">
    <Header size={size} cart={cartArray} total={total} cleanCart={cleanCart} />
    <div  className="mx-auto">
      <Routes>
          <Route exact path="/" element={<Home size={device} />} />
          <Route path="/:productSlug" element={<ProductDetail size={device} addToCart={addToCart} />} />
          <Route path="/product/:productCategory" element={<Headphones size={device} /> }/>
          <Route path="/checkout" element={<Checkout total={total} cart={cartArray} />} />
      </Routes>
    </div>
    <Footer />
    </div>
  )
}


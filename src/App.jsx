import React, {useState, useEffect}from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Home from "./Components/Home"
import Headphones from "./Components/Headphones"
import Footer from "./Components/Footer";
export default function App(){



    return (
        <>
            <Nav />
            <Routes>
                <Route exact path="/" element={<Home/>}></Route>
                <Route path="/headphones" element={<Headphones/>}></Route>
            </Routes>
            <Footer/>
        </>
    )

}
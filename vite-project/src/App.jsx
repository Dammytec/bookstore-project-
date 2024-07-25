import React from "react";

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./internals/login";
import Register from "./internals/register-now";
import Home from "./components/home";
import About from "./components/about";
import Shop from "./components/shop";
import Contact from "./components/contact";
import Orders from "./components/order";
import Search from "./components/search";
import Carts from "./components/carts";
import Checkout from "./components/checkout";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register-now" element={<Register />} />
        <Route  path="/home" element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/orders" element={<Orders/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route path="/carts" element={<Carts/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

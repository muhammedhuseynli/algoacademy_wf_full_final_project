import React, { useState } from "react";
import "./App.css";
import Header from "./js/header.js";
import Footer from "./js/footer.js";
import Basket from "./js/basket.js";
import Home from "./js/home.js";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MobileLegendsPage from "./js/mobileLegendsPage.js";
import Login from "./js/login.js";
import Register from "./js/register.js";

function App() {
  const [basket, setBasket] = useState([]);
  const addToBasket = (product) => {
    setBasket((prevBasket) => [...prevBasket, product]);
  };
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home addToBasket={addToBasket}/>}></Route>
          <Route path="/MobileLegends" element={<MobileLegendsPage addToBasket={addToBasket}/>}></Route>
          <Route path="/basket" element={<Basket basket={basket}/>}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;

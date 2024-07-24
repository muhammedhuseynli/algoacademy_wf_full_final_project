import React from "react";
import "./App.css";
import Header from "./js/header.js";
import Footer from "./js/footer.js";
import Basket from "./js/basket.js";
import Home from "./js/home.js";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/basket" element={<Basket />}></Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

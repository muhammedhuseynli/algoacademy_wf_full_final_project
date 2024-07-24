import React from "react";
import "../css/mainPageGames.css";
import vp1 from "../img/115vp.webp";
import vp2 from "../img/150vp.webp";
import vp3 from "../img/600vp.webp";
import vp4 from "../img/1200vp.webp";
import vp5 from "../img/2200vp.webp";
import vp6 from "../img/3500vp.webp";
import vp7 from "../img/7300vp.webp";



const products = [
  { id: 1, name: "Valorant 44 VP", price: "27.92 TL" ,  img: vp1},
  { id: 2, name: "Valorant 88 VP", price: "125.64 TL",  img: vp2},
  { id: 3, name: "Valorant 133 VP", price: "153.23 TL", img: vp3},
  { id: 4, name: "Valorant 221 VP", price: "251.30 TL", img: vp4},
  { id: 5, name: "Valorant 309 VP", price: "278.12 TL", img: vp5},
  { id: 6, name: "Valorant 354 VP", price: "379.43 TL", img: vp6},
  { id: 7, name: "Valorant 494 VP", price: "502.89 TL", img: vp7},
];

function MobileLegends() {
  return (
    <div>
      <button className="discover1">DISCOVER ALL</button>
      <div className="mobileLegendsBackground">
        <div className="pubg">
          <h2>Mobile Legends Turkiye</h2>
          <p>Mobile Legends ürünleri 7/24 anında teslimat ile sizlerle!</p>
        </div>
      </div>
      <div className="main3">
        {products.map((product) => (
          <div className="uc1" key={product.id}>
            <img src={product.img} alt={product.name} className="elmas" />
            <p>{product.name}</p>
            <h3>{product.price}</h3>
            <button>Add to basket</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MobileLegends;

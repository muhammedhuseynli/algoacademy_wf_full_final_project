import React from "react";
import "../css/mainPageGames.css";
import uc from "../img/uc.webp";

const products = [
  { id: 1, name: "Pubg Mobile 60 UC TR", price: "27.92 TL" },
  { id: 2, name: "Pubg Mobile 325 UC TR", price: "125.64 TL" },
  { id: 3, name: "Pubg Mobile 385 UC TR", price: "153.23 TL" },
  { id: 4, name: "Pubg Mobile 660 UC TR", price: "251.30 TL" },
  { id: 5, name: "Pubg Mobile 720 UC TR", price: "278.12 TL" },
  { id: 6, name: "Pubg Mobile 985 UC TR", price: "379.43 TL" },
  { id: 7, name: "Pubg Mobile 1320 UC TR", price: "502.89 TL" },
];

function PubgMobile() {
  return (
    <div>
      <button className="discover1">DISCOVER ALL</button>
      <div className="pubgBackground">
        <div className="pubg">
          <h2>Pubg Mobile Turkiye</h2>
          <p>Pubg Mobile ürünleri 7/24 anında teslimat ile sizlerle!</p>
        </div>
      </div>
      <div className="main3">
        {products.map((product) => (
          <div className="uc1" key={product.id}>
            <img src={uc} width={176} height={82} alt={product.name} />
            <p>{product.name}</p>
            <h3>{product.price}</h3>
            <button>Add to basket</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PubgMobile;

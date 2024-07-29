import React from "react";
import "../css/mainPageGames.css";
import uc from "../img/uc.webp";
import { useNavigate } from "react-router-dom";
import Login from "./login";

const products = [
  { id: 1, name: "Pubg Mobile 60 UC", price: "27.92 TL", img: uc },
  { id: 2, name: "Pubg Mobile 325 UC", price: "125.64 TL", img: uc },
  { id: 3, name: "Pubg Mobile 385 UC", price: "153.23 TL", img: uc },
  { id: 4, name: "Pubg Mobile 660 UC", price: "251.30 TL", img: uc },
  { id: 5, name: "Pubg Mobile 720 UC", price: "278.12 TL", img: uc },
  { id: 6, name: "Pubg Mobile 985 UC", price: "379.43 TL", img: uc },
  { id: 7, name: "Pubg Mobile 999 UC", price: "502.89 TL", img: uc },
];

function PubgMobile({ addToBasket }) {
  const navigate = useNavigate();
  const handleAddToBasket = (product) => {
    const username = JSON.parse(localStorage.getItem("username")) || false;
    console.log(username);
    if (!username) {
      console.log("Navigating to /login");
      navigate("/login");
    } else {
      console.log("Adding product to basket");
      addToBasket(product);
    }
  };

  return (
    <div>
      <div className="pubgBackground">
        <div className="pubg">
          <h2>Pubg Mobile Turkiye</h2>
          <p>Pubg Mobile ürünleri 7/24 anında teslimat ile sizlerle!</p>
        </div>
      </div>
      <div className="main3">
        {products.map((product) => (
          <div className="uc1" key={product.id}>
            <img src={product.img} width={176} height={82} alt={product.name} />
            <p>{product.name}</p>
            <h3>{product.price}</h3>
            <button onClick={() => handleAddToBasket(product)}>Add to basket</button>
          </div>
        ))}
      </div>
    </div>
  );
}
export default PubgMobile;

import "../css/basket.css";
import Footer from "./footer";
import Header from "./header.js";

function Basket({ basket, removeFromBasket }) {
  const totalPrice = basket.reduce((sum, item) => sum + parseFloat(item.price), 0);

  return (
    <>
    <Header />
    <div className="basketMainDiv">  
      {basket.length === 0 ? (
        <h1>Your basket is empty!</h1>
      ) : (
        <div className="basketContent">
          <h1>Products:</h1>
          <div className="main3 basketMain3">
            {basket.map((item, index) => (
              <div key={index} className="uc1 basketUc1">
                <img src={item.img} alt={item.name} />
                <p>{item.name}</p>
                <h3>{item.price}</h3>
                <button onClick={() => removeFromBasket(item.id)}>Remove</button>
              </div>
            ))}
          </div>
          <div className="totalPrice">
            <h2>Total Price</h2>
            <p>${totalPrice.toFixed(2)}</p>
          </div>
        </div>
      )}
    </div>
    </>
  );
}

export default Basket;

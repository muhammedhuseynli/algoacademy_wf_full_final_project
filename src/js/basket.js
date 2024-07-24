import "../css/basket.css";
import basketIcon from "../icons/basketIcon.svg";

function Basket() {
  return (
    <div className="basketMainDiv">
      <img src={basketIcon} width={64} height={64}></img>
      <h1>Your basket is empty!</h1>
      <p>
        To fill your cart with the products and opportunites of Onsrashop.com,<br></br>
        you may now start discover our products.
      </p>
      <button>Continue Shopping</button>
    </div>
  );
}

export default Basket;

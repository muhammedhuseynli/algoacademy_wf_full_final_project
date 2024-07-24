import "../css/header.css";
import headerImg from "../img/headerImg.png";
import downArrow from "../icons/downArrow.png"
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <header>
        <Link to="/"><img src={headerImg} width={185} height={73} className="header-img" /></Link>
        <input
          type="text"
          placeholder="Search for product, category or brand"
        ></input>
        {/* <i class="fa-regular fa-envelope"></i> */}
        <div class="account">
          <i class="fa-solid fa-user"></i>
          <h5>Account</h5>
          <img src={downArrow} width={16} height={13} className="downArrow"></img>
        </div>
        <Link to="/basket"><i class="fa-solid fa-cart-shopping"></i></Link>
      </header>
    </div>
  );
}

export default Header;

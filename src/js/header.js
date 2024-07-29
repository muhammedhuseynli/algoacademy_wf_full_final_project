import "../css/header.css";
import headerImg from "../img/headerImg.png";
import downArrow from "../icons/downArrow.png";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useEffect } from "react";

function Header() {
  const [name, setName] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const username = JSON.parse(localStorage.getItem("username"));
      setName(username);
    }
  }, []);
  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setName("");
  }
  return (
    <div>
      <header>
        <Link to="/" className="anyLink">
          <img src={headerImg} width={185} height={73} className="header-img" />
        </Link>
        <input
          type="text"
          placeholder="Search for product, category or brand"
          className="headerInput"
        ></input>
        {/* <i class="fa-regular fa-envelope"></i> */}
        <Link to="#" className="anyLink">
          <div
            class="account"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <i class="fa-solid fa-user"></i>
            <h5 id="accountName" className="accountName">{name ? name : "Account"}</h5>
            <img
              src={downArrow}
              width={16}
              height={13}
              className="downArrow"
            ></img>
            {isHovered && (
              <div className="loginAndRegister">
                {!name ? (
                  <>
                    <Link to="/login" className="anyLink" id="login">
                      <h4>Log in</h4>
                    </Link>
                    <hr />
                    <Link to="/register" className="anyLink" id="register">
                      <h4>Register</h4>
                    </Link>
                  </>
                ) : (
                  <Link
                    to="/"
                    className="anyLink logOut"
                    id="logout"
                    onClick={logout}
                  >
                    <h4>Log out</h4>
                  </Link>
                )}
              </div>
            )}
          </div>
        </Link>
        <Link to="/basket" className="anyLink">
          <i class="fa-solid fa-cart-shopping"></i>
        </Link>
      </header>
    </div>
  );
}
export default Header;


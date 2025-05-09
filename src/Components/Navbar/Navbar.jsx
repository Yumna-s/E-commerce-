import React, { useContext, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

import logo from "../../Assets/logo.png";
import cart_icon from "../../Assets/cart_icon.png";
import { ShopContext } from "../../Context/ShopContext";

function Navbar() {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
        <ul className="nav-menu">
          <li
            onClick={() => {
              setMenu("shop");
            }}
          >
            <Link to="/" style={{ textDecoration: "none" }}>
              shop
            </Link>

            {menu === "shop" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("mens");
            }}
          >
            <Link to="/mens" style={{ textDecoration: "none" }}>
              {" "}
              men
            </Link>
            {menu === "mens" ? <hr /> : <> </>}
          </li>
          <li
            onClick={() => {
              setMenu("womens");
            }}
          >
            <Link to="/womens" style={{ textDecoration: "none" }}>
              {" "}
              women
            </Link>
            {menu === "womens" ? <hr /> : <> </>}
          </li>
          <li
            onClick={() => {
              setMenu("kids");
            }}
          >
            <Link to="/kids" style={{ textDecoration: "none" }}>
              {" "}
              kids
            </Link>
            {menu === "kids" ? <hr /> : <> </>}
          </li>
        </ul>
        <div className="nav-login-cart">
          <Link to="/login">
            <button>Login</button>
          </Link>
          <Link to="/cart">
            <img src={cart_icon} alt="" />
          </Link>
          <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

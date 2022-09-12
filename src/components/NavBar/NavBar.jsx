import React from "react";

import Form from "./Form";
import Account from "./Account";
import Cart from "./Cart";
import classes from "./NavBar.module.css";

function Navbar(props) {
  return (
    <nav className={classes.nav}>
      <div className="logo">
        <img src="./images/logo.png" alt="logo" />
      </div>
      <Form
        placeholder="Search for products"
        input="SEARCH"
        style={{ background: "#d9d9d9", borderRadius: "5px" }}
      />
      <Account name="Account" icon={<i className="fa-regular fa-user"></i>} />
      <Cart onShow={props.onShowCart} />
    </nav>
  );
}
export default Navbar;

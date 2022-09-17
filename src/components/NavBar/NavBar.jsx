import React, { useContext } from "react";
import CartContext from "../store/cart-context";

import Form from "./Form";
import Account from "./Account";
import CartBar from "./CartBar";
import classes from "./NavBar.module.css";

function Navbar(props) {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

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
      <CartBar onShow={props.onShowCart} onBadge={numberOfCartItems} />
    </nav>
  );
}
export default Navbar;

import React from "react";
import classes from "./NavBar.module.css";

function Cart(props) {
  return (
    <div className={classes.accountBox} onClick={props.onShow}>
      <i className="fa-solid fa-cart-shopping"></i>Cart
    </div>
  );
}

export default Cart;

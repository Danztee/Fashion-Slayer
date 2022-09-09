import React from "react";
import classes from "./NavBar.module.css";

function Cart() {
  return (
    <div className={classes.accountBox}>
      <i className="fa-solid fa-cart-shopping"></i>Cart
    </div>
  );
}

export default Cart;

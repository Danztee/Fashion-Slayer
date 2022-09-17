import React from "react";
import classes from "./NavBar.module.css";

function CartBar(props) {
  return (
    <div className={classes.accountBox} onClick={props.onShow}>
      <i className="fa-solid fa-cart-shopping"></i>Cart ({props.onBadge})
    </div>
  );
}

export default CartBar;

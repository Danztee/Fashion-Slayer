import React from "react";

import classes from "./Header.module.css";
import Account from "../NavBar/Account";

function Header() {
  return (
    <header className={classes.header}>
      <ul className={classes.listContainer}>
        <li>
          {" "}
          <Account name="All categories" />
        </li>
        <li>shoe</li>
        <li>bags</li>
        <li>Jewelries</li>
        <li>shoe</li>
        <li>
          {" "}
          <Account name="Stock jeans" />
        </li>
        <li>slippers</li>
        <li>
          {" "}
          <Account name="Watches" />
        </li>
        <li>Accessories</li>
      </ul>

      <div className={classes.hero}>
        <img src="./images/background.png" alt="" />
      </div>

      <div className={classes.sliderBtn}>
        <button className={classes.left}>
          <i
            className="fa-solid fa-arrow-left"
            style={{ color: "#fa6e3f" }}
          ></i>
        </button>
        <button className={classes.right}>
          <i
            className="fa-solid fa-arrow-right"
            style={{ color: "#fa6e3f" }}
          ></i>
        </button>
      </div>
    </header>
  );
}

export default Header;

import React from "react";
import classes from "./NavBar.module.css";

function Account(props) {
  return (
    <div className={classes.accountBox}>
      {props.icon}

      <>
        <div className={classes.account} id={classes.show}>
          {props.name}
          <i className="fa-solid fa-chevron-down"></i>
        </div>

        <ul className={classes.dropdown}>
          <li>
            <a href="/" className={classes.link}>
              Web Development
            </a>
          </li>
          <li>
            <a href="/" className={classes.link}>
              React
            </a>
          </li>
          <li>
            <a href="/" className={classes.link}>
              JavaScript
            </a>
          </li>
          <li>
            <a href="/" className={classes.link}>
              CSS Modules
            </a>
          </li>
        </ul>
      </>
    </div>
  );
}

export default Account;

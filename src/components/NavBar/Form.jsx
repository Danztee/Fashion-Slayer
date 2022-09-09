import React from "react";

import classes from "./NavBar.module.css";

function Form(props) {
  return (
    <div>
      <form action="">
        <input
          type="text"
          placeholder={props.placeholder}
          className={classes.input}
          style={props.style}
        />
        <button type="submit" className={classes.btn}>
          {props.input}
        </button>
      </form>
    </div>
  );
}

export default Form;

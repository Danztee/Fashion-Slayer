import React, { useState } from "react";
import classes from "./AddBtn.module.css";

function AddBtn(props) {
  const [hover, setHover] = useState(false);

  const onMouseEnter = () => {
    setHover(true);
  };

  const onMouseLeave = () => {
    setHover(false);
  };

  return (
    <div className={classes.cover} onMouseLeave={onMouseLeave}>
      <div className={classes.btn}>
        {hover && (
          <p
            className={classes.cart}
            style={{ paddingLeft: "5px" }}
            onMouseEnter={onMouseEnter}
            onClick={() => {
              props.onAdd();
              props.onShow();
            }}
          >
            ADD TO CART
          </p>
        )}
        <button className={classes.btnContainer} onMouseEnter={onMouseEnter}>
          +
        </button>
      </div>
    </div>
  );
}

export default AddBtn;

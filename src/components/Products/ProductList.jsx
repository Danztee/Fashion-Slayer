import React from "react";
import classes from "./Card.module.css";
import AddBtn from "./AddBtn";

function ProductList(props) {
  return (
    <li className={classes.ProductList}>
      <img
        src={`./images/${props.image}`}
        alt={props.title}
        style={{ width: "12.5rem" }}
      />
      <p className={classes.title}>{props.title}</p>

      <div className={classes.bottom}>
        <p className={classes.price}>{props.price}</p>
        <ul className={classes.stars}>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-regular fa-star"></i>
          <i className="fa-regular fa-star"></i>
        </ul>
      </div>
      <AddBtn />
    </li>
  );
}

export default ProductList;

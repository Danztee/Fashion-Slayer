import React from "react";
import classes from "./Card.module.css";
import styles from "./OneProducts.module.css";
import AddBtn from "./AddBtn";

function OneProductList(props) {
  return (
    <li className={styles.ProductList}>
      <img
        src={`./images/${props.image}`}
        alt={props.title}
        style={{ width: "11.5rem", borderRadius: "15px 15px 0 0" }}
      />
      <p className={classes.title}>{props.title}</p>

      <div className={classes.bottom}>
        <p className={classes.price}>{props.price}</p>
        <ul className={styles.stars}>
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

export default OneProductList;

import React from "react";
import styles from "./OneProducts.module.css";

function SecProductList(props) {
  return (
    <li className={styles.ProductList}>
      <img
        src={`./images/${props.image}`}
        alt={props.title}
        style={{ width: "14rem", borderRadius: "15px 15px 0 0" }}
      />
    </li>
  );
}

export default SecProductList;

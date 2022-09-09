import React from "react";

import styles from "./OneProducts.module.css";
import classes from "./SecProducts.module.css";
import SecProductList from "./SecProductsList";

function SecProducts() {
  const products = [
    {
      id: 1,
      image: "ad-1.png",
    },
    {
      id: 2,
      image: "ad-2.png",
    },
    {
      id: 3,
      image: "ad-3.png",
    },
    {
      id: 4,
      image: "ad-4.png",
    },
  ];

  return (
    <div style={{ marginTop: "2rem" }} className={styles.card}>
      <div className={classes.header}>
        <p className={styles.headerText}>Don’t Miss Out On These!!!</p>
      </div>

      <ul className={styles.products}>
        {products.map((product) => (
          <SecProductList image={product.image} key={product.id} />
        ))}
      </ul>
    </div>
  );
}

export default SecProducts;

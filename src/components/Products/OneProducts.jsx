import React from "react";

import styles from "./OneProducts.module.css";
import OneProductList from "./OneProductList";

function OneProducts() {
  const products = [
    {
      id: 1,
      image: "mac-1.png",
      title: "MacBook 2012",
      price: "#500, 000",
    },
    {
      id: 2,
      image: "mac-2.png",
      title: "MacBook 2013",
      price: "#600, 000",
    },
    {
      id: 3,
      image: "mac-3.png",
      title: "MacBook 2015",
      price: "#700, 000",
    },
    {
      id: 4,
      image: "mac-4.png",
      title: "MacBook 2018",
      price: "#1, 000, 000",
    },
    {
      id: 5,
      image: "mac-5.png",
      title: "MacBook 2020",
      price: "#1, 250, 000",
    },
  ];

  return (
    <div style={{ marginTop: "2rem" }} className={styles.card}>
      <div className={styles.header}>
        <p className={styles.headerText}>Top Deals | Laptops</p>
        <p className={styles.headerText}>
          SEE ALL <i className="fa-sharp fa-solid fa-chevron-right"></i>
        </p>
      </div>

      <ul className={styles.products}>
        {products.map((product) => (
          <OneProductList
            key={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
          />
        ))}
      </ul>
    </div>
  );
}

export default OneProducts;

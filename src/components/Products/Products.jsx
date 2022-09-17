import React from "react";
import ProductList from "./ProductList";
import classes from "./Card.module.css";

function Products(props) {
  const products = [
    {
      id: 1,
      image: "Rectangle-9.png",
      title: "IPhone 11",
      price: 500000,
    },
    {
      id: 2,
      image: "Rectangle-7.png",
      title: "IPhone 12",
      price: 600000,
    },
    {
      id: 3,
      image: "Rectangle-8.png",
      title: "Huawei x20",
      price: 300000,
    },
    {
      id: 4,
      image: "Rectangle-8.png",
      title: "Huawei x20",
      price: 300000,
    },
    {
      id: 5,
      image: "Rectangle-9.png",
      title: "IPhone 11",
      price: 500000,
    },
    {
      id: 6,
      image: "Rectangle-8.png",
      title: "Huawei x20",
      price: 300000,
    },
    {
      id: 7,
      image: "Rectangle-7.png",
      title: "IPhone 12",
      price: 600000,
    },
    {
      id: 8,
      image: "Rectangle-9.png",
      title: "IPhone 11",
      price: 500000,
    },
  ];

  return (
    <>
      <div className={classes.tabs}>
        <li className={classes.active}>Top Rated</li>
        <li>Top Selling</li>
        <li>Special Products</li>
        <li>newest Products</li>
      </div>
      <ul className={classes.products}>
        {products.map((product) => (
          <ProductList
            key={product.id}
            id={product.id}
            img={`./images/${product.image}`}
            title={product.title}
            price={product.price}
            image={product.image}
            onShow={props.onShowCart}
          />
        ))}
      </ul>
    </>
  );
}

export default Products;

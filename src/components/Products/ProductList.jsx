import React, { useContext } from "react";
import classes from "./Card.module.css";
import AddBtn from "./AddBtn";
import CartContext from "../store/cart-context";

function ProductList(props) {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = () => {
    cartCtx.addItem({
      id: props.id,
      name: props.title,
      amount: 1,
      price: props.price,
      img: props.img,
    });
  };

  const price = `${props.price.toLocaleString("en-NG", {
    style: "currency",
    currency: "NGN",
  })}`;

  return (
    <li className={classes.ProductList}>
      <img
        src={`./images/${props.image}`}
        alt={props.title}
        style={{ width: "14rem" }}
      />
      <p className={classes.title}>{props.title}</p>

      <div className={classes.bottom}>
        <p className={classes.price}>{price}</p>
        <ul className={classes.stars}>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-regular fa-star"></i>
          <i className="fa-regular fa-star"></i>
        </ul>
      </div>
      <AddBtn onAdd={addToCartHandler} onShow={props.onShow} />
    </li>
  );
}

export default ProductList;

import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const price = `${props.price.toLocaleString("en-NG", {
    style: "currency",
    currency: "NGN",
  })}`;

  return (
    <li className={classes["cart-item"]}>
      <div className={classes.body}>
        <img src={`${props.img}`} alt={props.name} style={{ width: "7rem" }} />
        <h2>{props.name}</h2>
      </div>
      <div className={classes.summary}>
        <span className={classes.price}>{price}</span>
        <span className={classes.amount}>x {props.amount}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;

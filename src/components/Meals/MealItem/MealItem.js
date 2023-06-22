import { useContext } from "react";
import CartContext from "../../../store/cart-context";
import classes from "./MealItem.module.css";
import { MealItemForm } from "./MealItemForm";

export const MealItem = (props) => {
  const ctx = useContext(CartContext);

  const addToCartHandler = (quantity) => {
    ctx.addItem({
      id: props.id,
      name: props.name,
      quantity: quantity,
      price: props.price,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{`₹${props.price.toFixed(2)}`}</div>
      </div>
      <div>
        <MealItemForm id={props.id} addToCart={addToCartHandler} />
      </div>
    </li>
  );
};

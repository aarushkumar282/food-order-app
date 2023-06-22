import { useContext } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const ctx = useContext(CartContext);

  const onCartRemoveItemHandler = (id) => {
    ctx.removeItem(id);
  };

  const onCartAddItemHandler = (item) => {
    console.log("item added");
    ctx.addItem({ ...item, quantity: 1 });
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {ctx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.quantity}
          onRemove={onCartRemoveItemHandler.bind(null, item.id)}
          onAdd={onCartAddItemHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onCartClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>₹{ctx.totalAmount.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onCartClose}>
          Close
        </button>
        {ctx.items.length > 0 && (
          <button className={classes.button}>Order</button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;

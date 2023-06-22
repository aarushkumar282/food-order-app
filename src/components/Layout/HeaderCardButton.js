import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from "../Layout/HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const [btnIsHighlited, setBtnIsHighlighted] = useState(false);

  const ctx = useContext(CartContext);
  const { items } = ctx;
  const numberOfItemInCart = ctx.items.reduce((prevNumb, item) => {
    return prevNumb + item.quantity;
  }, 0);

  const btnClasses = `${classes.button} ${btnIsHighlited ? classes.bump : ""}`;

  useEffect(() => {
    if (ctx.items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);
    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onCartShow}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfItemInCart}</span>
    </button>
  );
};

export default HeaderCartButton;

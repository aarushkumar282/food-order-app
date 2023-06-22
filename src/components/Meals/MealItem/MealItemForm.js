import { useRef, useState } from "react";
import { Input } from "../../UI/Input";
import classes from "./MealItemForm.module.css";

export const MealItemForm = (props) => {
  const [qtyIsvalid, setQtyIsValid] = useState(true);
  const qtyInputRef = useRef();

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const enteredQuantity = +qtyInputRef.current.value;
    const quantity = +enteredQuantity;

    if (quantity < 1 || quantity > 5) {
      setQtyIsValid(false);
      return;
    }
    debugger;
    props.addToCart(quantity);
  };

  return (
    <form className={classes.form} onSubmit={onSubmitHandler}>
      <Input
        ref={qtyInputRef}
        label='Amount'
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!setQtyIsValid && <p>Please enter the valid quantity(1-5)</p>}
    </form>
  );
};

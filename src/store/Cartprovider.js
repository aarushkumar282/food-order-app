import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    const updatedTotalAmount =
      state.totalAmount + action.payload.price * action.payload.quantity;

    const existingIndex = state.items.findIndex(
      (item) => item.id === action.payload.id
    );
    const existingCartItem = state.items[existingIndex];
    let updatedItems;
    if (existingIndex !== -1) {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + action.payload.quantity,
      };
      updatedItems = [...state.items];
      updatedItems[existingIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.payload);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "REMOVE") {
    const existingIndex = state.items.findIndex(
      (item) => item.id === action.payload
    );

    const existingCartItem = state.items[existingIndex];
    const updatedTotalAmount = state.totalAmount - existingCartItem.price;
    let updatedItems;
    if (existingCartItem.quantity === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.payload);
    } else {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity - 1,
      };
      updatedItems = [...state.items];
      updatedItems[existingIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartState] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addItemToCartHandler = (item) => {
    console.log("cart trigger");
    dispatchCartState({ type: "ADD_TO_CART", payload: item });
  };
  const removeItemFromCartHandler = (id) => {
    dispatchCartState({ type: "REMOVE", payload: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;

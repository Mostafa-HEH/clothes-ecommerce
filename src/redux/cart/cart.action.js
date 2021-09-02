import { cartTypes } from "./cart.types";

export const ToggleCartHidden = () => ({
  type: cartTypes.TOGGLE_CART_HIDDEN,
});

export const addItem = (state) => ({
  type: cartTypes.ADD_ITEM,
  payload: state,
});

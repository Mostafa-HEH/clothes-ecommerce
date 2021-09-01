import React from "react";

import { CustomButton } from "../custom-button/custom-button.component";
import "./car-dropdown.styles.scss";

export const CartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-items" />
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

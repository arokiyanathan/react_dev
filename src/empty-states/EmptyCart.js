import React, { Component } from "react";
import empty_cart from '../image/empty-cart.png';
const EmptyCart = props => {
  return (
    <div className="empty-cart">
      <img
        src={empty_cart}        alt="empty-cart"
      />
      <h2>You cart is empty!</h2>
    </div>
  );
};

export default EmptyCart;

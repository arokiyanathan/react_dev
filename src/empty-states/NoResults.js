import React, { Component } from "react";
import empty_cart from '../image/empty-cart.png';
const NoResults = () => {
  return (
    <div className="products">
      <div className="no-results">
        <img
          src={empty_cart}
          alt="Nothing"
        />
        <h2>Sorry, no products found!</h2>
        <p>Try different keyword.</p>
      </div>
    </div>
  );
};

export default NoResults;

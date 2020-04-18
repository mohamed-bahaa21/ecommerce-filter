import React from "react";

import './Product.css'

const Product = ({ name, price }) => {
  return (
    <div className="product-card">
      <h1>{name}</h1>
      <h3>Price: {price} $</h3>
    </div>
  );
};

export default Product;

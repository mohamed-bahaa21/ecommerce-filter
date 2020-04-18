import React from "react";

import "./Product.css";

const Product = ({ name, price, img }) => {
  return (
    <div className="product-card">
      <img src={img} />
      <h1>{name}</h1>
      <h3>Price: {price} $</h3>
    </div>
  );
};

export default Product;

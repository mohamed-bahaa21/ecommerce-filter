import React from "react";

import Product from "../Product/Product";
import Products from "../../data/products";
import "./Shop.css"

const Shop = () => {
  return (
    <div>
      <form></form>

      <div className="products-container">
        {Products.products.map((p) => {
          return <Product img={p.img} name={p.name} price={p.price} />;
        })}
      </div>
    </div>
  );
};

export default Shop;

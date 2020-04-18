import React from "react";

import Product from "../Product/Product";
import Products from "../../data/products";

const Shop = () => {
  return (
    <div>
      <form></form>

      <div>
        {Products.products.map((p) => {
          return <Product name={p.name} price={p.price} />;
        })}
      </div>
    </div>
  );
};

export default Shop;

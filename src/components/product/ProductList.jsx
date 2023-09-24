import React from "react";
import "./product.css";
import Product from "./Product";
import Error from "../error/Error";

function ProductList({ products }) {
  return (
    <main className="products">
      {products?.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </main>
  );
}

export default ProductList;

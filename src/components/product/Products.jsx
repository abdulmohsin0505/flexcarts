import React, { useEffect, useState } from "react";
import "./product.css";
import Product from "./Product";
import Error from "../error/Error";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/slices/productsSlice";

function Products() {
  const dispatch = useDispatch();
  const { loading, products, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <main className="products my-4">
      {loading && <h4 className="align-self-center">Loading...</h4>}

      {!loading && error ? <Error message={error} /> : null}

      {!loading && products.length
        ? products.map((product) => {
            return <Product product={product} key={product.id} />;
          })
        : null}
    </main>
  );
}

export default Products;

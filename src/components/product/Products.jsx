import React, { useEffect, useState } from "react";
import axios from "axios";
import "./product.css";
import Product from "./Product";
import Error from "../error/Error";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await axios.get("https://fakestoreapi.com/products");

      if (res.status === 200) {
        setLoading(false);
        setProducts(res.data);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (error) {
    return <Error message={error} />;
  }
  return (
    <main className="products my-4">
      {loading && <h4 className="align-self-center">Loading...</h4>}
      {/* {error && <Error message={error} />} */}
      {Object.keys(products).length !== 0 &&
        products.map((product) => {
          return <Product product={product} key={product.id} />;
        })}
    </main>
  );
}

export default Products;

import React, { useEffect } from "react";
import Filter from "../../components/common/Filter";
import ProductList from "../../components/product/ProductList";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/slices/productsSlice";

function Products() {
  const { loading, products, error } = useSelector(
    (state) => state.allProducts
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  console.log(error);
  return (
    <main className="mt-5 pt-4 text-center">
      <span className="border-info border-bottom d-inline-block fw-bold fs-1">
        Latest Products
      </span>
      <Filter />
      {loading && <h4 className="text-center">Loading...</h4>}

      {!loading && error ? <Error message={error} /> : null}
      {!loading ? <ProductList products={products} /> : null}
    </main>
  );
}

export default Products;

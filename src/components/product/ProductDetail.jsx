import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import { fetchSingleProduct } from "../../redux/slices/productSlice";
import Error from "../error/Error";
import "./product.css";

function ProductDetail() {
  const { productId } = useParams();
  const { loading, product, error } = useSelector((state) => state.product);

  const dispatch = useDispatch();

  useEffect(() => {
    if (productId && productId !== "") dispatch(fetchSingleProduct(productId));
    // return () => {
    //   dispatch(removeProduct())
    // }
  }, [productId, dispatch]);

  if (loading) {
    return (
      <div>
        <h4 className="text-center">Loading...</h4>
      </div>
    );
  }

  if (error) {
    return <Error message={error} />;
  }
  return (
    <main className="container d-flex justify-content-center align-items-center vh-100 product-detail">
      <div className="me-sm-5">
        <img
          src={product?.image}
          alt={product?.category}
          width="250px"
          height="300px"
          className="products-image"
        />
      </div>
      <div className="">
        <h3 className="product-title">{product?.category}</h3>
        <p className="mb-0">{product?.title}</p>
        <strong>Rating {product?.rating && product?.rating.rate}</strong>
        <br />
        <h6>Rs - {product?.price} $</h6>
        <div>
          <Button
          // onClick={() => dispatch(addProduct(product))}
          >
            Buy
          </Button>
          <Link to="/">
            <Button color="success" className="ms-2">
              Back
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default ProductDetail;

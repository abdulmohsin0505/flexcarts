import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";
import toast, { Toaster } from "react-hot-toast";

function Product({ product }) {
  const dispatch = useDispatch();

  const addItemToCart = () => {
    dispatch(addToCart(product));
    toast.success("1 item added to cart");
  };

  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: "#363636",
            color: "#fff",
          },
        }}
      />
      <Card className="product_card shadow pt-3">
        <Link className="product_card_link" to={`/products/${product.id}`}>
          <img
            style={{
              height: "150px",
              width: "150px",
              padding: "4px",
            }}
            src={product?.image}
            alt={product?.title}
            loading="lazy"
          />
          <Card.Body className="text-left">
            <p className="fs-5 fs-bold">{product?.title?.slice(0, 18)}</p>
            <p className=" fs-semibold">Price - {product?.price} $</p>
          </Card.Body>
        </Link>
        <Button onClick={addItemToCart}>Add to Cart</Button>
      </Card>
    </>
  );
}

export default Product;

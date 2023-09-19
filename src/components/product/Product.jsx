import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

function Product({ product }) {
  return (
    <Link className="product_card">
      <Card>
        <img
          style={{
            height: "150px",
            width: "150px",
            padding: "2px",
            alignSelf: "center",
          }}
          src={product?.image}
          alt={product?.title}
          loading="lazy"
        />
        <Card.Body>
          <p className="fs-5 fs-bold">{product?.title?.slice(0, 18)}</p>
          <p className=" fs-semibold">Price - {product?.price} $</p>
        </Card.Body>
        <Button>Buy</Button>
      </Card>
    </Link>
  );
}

export default Product;

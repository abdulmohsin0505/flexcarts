import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Col, Container } from "react-bootstrap";
import { removeFromCart, incQty, decQty } from "../../redux/slices/cartSlice";
import "./cart.css";

function Cart() {
  const { carts } = useSelector((state) => state.carts);
  const dispatch = useDispatch();

  const totalAmount = carts
    ? carts.reduce((total, item) => total + item.price * item.quantity, 0)
    : 0;

  return (
    <Container className="mt-5 pt-3 mb-4">
      <Col>
        {carts.map((cart) => {
          return (
            <div
              key={cart.id}
              className="d-flex justify-content-center align-items-center mt-3 pb-2"
            >
              <div>
                <img
                  src={cart?.image}
                  alt={"productImg"}
                  height="150px"
                  width="150px"
                  className="cart-image"
                />
              </div>
              <div className="ms-3">
                <h6>{cart?.category}</h6>
                <strong className="cart-price">Rs - {cart?.price} $</strong>
              </div>
              <div className="m-sm-5 cart-btn">
                <Button size="sm" onClick={() => dispatch(decQty(cart?.id))}>
                  -
                </Button>
                <strong className="m-1">{cart?.quantity}</strong>
                <Button size="sm" onClick={() => dispatch(incQty(cart?.id))}>
                  +
                </Button>
                <Button
                  size="sm"
                  onClick={() => dispatch(removeFromCart(cart?.id))}
                  className="ms-sm-2 remove-btn btn-danger"
                >
                  Remove
                </Button>
              </div>
            </div>
          );
        })}
        <div className="text-center mt-3 text-success shadow">
          <span className="fw-bold fs-2">
            Total Cart Price RS - {totalAmount.toFixed(2)} $
          </span>
        </div>
      </Col>
    </Container>
  );
}

export default Cart;

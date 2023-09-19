import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Error({ message }) {
  const navigate = useNavigate();
  return (
    <div className="vh-100">
      <div className="container h-100 d-flex flex-column align-items-center justify-content-center">
        <h4>Oops an error occured!</h4>
        <p className="text-danger">{message}</p>
        <Button className="d-inline text-center" onClick={() => navigate(-1)}>
          Back
        </Button>
      </div>
    </div>
  );
}

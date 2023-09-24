import React from "react";
import { Link } from "react-router-dom";
import { useMenu } from "../../context/menuContext";
import { useSelector } from "react-redux";
import "./navbar.css";

function Navbar() {
  const { isSidebarOpen, closeSidebar, openSidebar } = useMenu();
  const { carts } = useSelector((state) => state.carts);

  return (
    <nav className="navbar navbar-expand-md fixed-top shadow header">
      <div className="container-fluid ">
        <Link to="/" id="logo" className="font-monospace text-black">
          Flexcarts
        </Link>

        <div
          className={`
        ${"navigation-bar"} 
        ${isSidebarOpen ? "show hamburger-menu" : "hide"}`}
          onClick={closeSidebar}
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/products">Products</Link>
            </li>
            <li className="nav-item">
              <Link to="/">About</Link>
            </li>
            <li className="nav-item hamburger-cart">
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </div>
        <button
          className={`${isSidebarOpen ? "d-none" : "navbar-toggler"}`}
          onClick={openSidebar}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <button
          className={`${
            !isSidebarOpen ? "d-none" : "navbar-toggler bg-danger"
          }`}
          onClick={closeSidebar}
        >
          <span className="btn-close"></span>
        </button>
        <div className="d-none d-md-block">
          <ul className="navbar-nav">
            <li className="nav-item me-2 ">
              <button className="btn btn-light cart-link">
                <Link to="#" className="cart-link">
                  Login
                </Link>
              </button>
            </li>
            <li className="nav-item me-5">
              <button className="btn btn-light">
                <Link to="/cart" className="cart-link text-dark">
                  Cart{" "}
                  <span className="badge text-bg-danger">{carts.length}</span>
                </Link>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

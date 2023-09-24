import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMenu } from "../../context/menuContext";
import { useSelector, useDispatch } from "react-redux";
import "./navbar.css";
import avatar from "../../assets/images/user.png";
import { logout } from "../../redux/slices/authSlice";

function Navbar() {
  const { isSidebarOpen, closeSidebar, openSidebar } = useMenu();
  const { carts } = useSelector((state) => state.carts);
  const { user } = useSelector((state) => state.auth);
  const [showlogoutBtn, setShowLogoutBtn] = useState(false);
  const dispatch = useDispatch();

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
            <li className="nav-item d-md-none">
              <Link to="/login">Login</Link>
            </li>
            <li className="nav-item  hamburger-cart">
              <Link to="/cart">
                Cart{" "}
                <span className="badge text-bg-danger ms-2">
                  {carts.length}
                </span>
              </Link>
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
            <li className="nav-item me-3">
              <button className="btn btn-light">
                <Link to="/cart" className="cart-link text-dark ">
                  Cart{" "}
                  <span className="badge text-bg-danger ms-2">
                    {carts.length}
                  </span>
                </Link>
              </button>
            </li>
            {user ? (
              <li
                className=" me-4 avatar px-2  rounded position-relative"
                onClick={() => setShowLogoutBtn(!showlogoutBtn)}
              >
                <div className="d-flex align-items-center">
                  <img
                    src={avatar}
                    alt="User Avatar"
                    className="rounded-circle me-2"
                    width="40"
                    height="40"
                  />
                  <span>{user}</span>
                </div>
                {showlogoutBtn ? (
                  <button
                    className="btn btn-light position-absolute bottom-2 px-5 "
                    onClick={() => dispatch(logout())}
                  >
                    Logout
                  </button>
                ) : null}
              </li>
            ) : (
              <li className="nav-item me-2 ">
                <button className="btn btn-light cart-link">
                  <Link to="/login" className="cart-link">
                    Login
                  </Link>
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

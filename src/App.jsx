import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Loading from "./components/loading/Loading";

const Home = lazy(() => import("./pages/Home"));
const Products = lazy(() => import("./pages/products/Products"));
const ProductDetail = lazy(() => import("./components/product/ProductDetail"));
const Cart = lazy(() => import("./components/cart/Cart"));
const Login = lazy(() => import("./pages/login/Login"));

const App = () => {
  return (
    <Router>
      <Navbar />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;

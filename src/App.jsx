import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./components/product/Products";
import ProductDetail from "./components/product/ProductDetail";
import Navbar from "./components/common/Navbar";
import Home from "./pages/Home";
import Cart from "./components/cart/Cart";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;

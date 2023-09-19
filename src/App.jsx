import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./components/product/Products";
import ProductDetail from "./components/product/ProductDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default App;

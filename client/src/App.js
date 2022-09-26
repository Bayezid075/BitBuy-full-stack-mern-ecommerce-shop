import "./App.css";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import Product from "./Pages/Product";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import ProductList from "./Pages/ProductList";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/products/:category" element={<ProductList />} />
      </Routes>
      {/* {user ? <Navigate to="/" /> : <Navigate to="/login" />} */}
    </div>
  );
}

export default App;

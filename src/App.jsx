import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Products from "./components/products/Products";
import Home from "./components/home/Home";
import Navbar from "./components/shared/Navbar";
import About from "./components/about/About";
import ContactUs from "./components/contact/ContactUs";
import { Toaster } from "react-hot-toast";
import Cart from "./components/cart/Cart";
import LogIn from "./components/auth/Login";
import Register from "./components/auth/Register";
import PrivateRoute from "./components/auth/PrivateRoute";
import Checkout from "./components/checkout/Checkout";

function App() {
  return (
    <div>
      <Toaster position="bottom-center" />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/" element={<PrivateRoute publicPage />}>
            <Route path="/login" element={<LogIn />} />
            <Route path="/register" element={<Register />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

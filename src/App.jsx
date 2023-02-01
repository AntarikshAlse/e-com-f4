import { useState } from "react";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Title from "./components/Title";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CartPage from "./CartPage";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/cart" element={<CartPage />} />
          <Route exact path="/" element={<Products />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

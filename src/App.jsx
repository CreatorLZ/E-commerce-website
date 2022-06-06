import React from 'react'
import { Routes, Route, Link, Navigate } from "react-router-dom";
import Home from './Pages/Home';
import ProductList from './Pages/ProductList';
import Login from './Pages/Login';
import Product from './Pages/Product';
import Register from './Pages/Register';
import Cart from './Pages/Cart';


const App = () => {
  const user = true;
  return (
    <Routes>
    <Route path="/" element={<Home />} />

    <Route path="login" element={user ? <Navigate to="/" /> : <Login />} />;

    <Route path="product/:id" element={<Product />} />
    <Route path="products/:category" element={<ProductList />} />
    <Route path="register" element={<Register />} />
    <Route path="cart" element={<Cart />} />
    </Routes>
  );
}

export default App


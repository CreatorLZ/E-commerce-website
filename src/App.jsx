import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import Home from './Pages/Home';
import ProductList from './Pages/ProductList';
import Login from './Pages/Login';
import Product from './Pages/Product';
import Register from './Pages/Register';
import Cart from './Pages/Cart';


const App = () => {
  const user = null;
  return (
    <Routes>
    <Route path="/" exact={true} element={<Home />} />

    <Route path="login" element={user ? <Navigate to="/" /> : <Login />} />;

    <Route path="product/:id" element={<Product />} />

    <Route path="products/:category" element={<ProductList />} />

    <Route path="register" element={user ? <Navigate to="/" /> : <Register />} />;

    <Route path="cart" element={<Cart />} />
    
    </Routes>
  );
}

export default App


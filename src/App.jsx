import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import Home from './Pages/Home';
import ProductList from './Pages/ProductList';
import Login from './Pages/Login';
import Product from './Pages/Product';
import Register from './Pages/Register';
import Cart from './Pages/Cart';
import { useSelector } from 'react-redux';


const App = () => {
  const user = useSelector((state)=> state.user.currentUser);
  
  return (
    <Routes>
    <Route path="/NEW-APP" exact={true} element={<Home />} />

    <Route path="login" element={user ? <Navigate to="/NEW-APP" /> : <Login />} />;

    <Route path="product/:id" element={<Product />} />

    <Route path="products/:category" element={<ProductList />} />

    <Route path="register" element={user ? <Navigate to="/NEW-APP" /> : <Register />} />;

    <Route path="cart" element={<Cart />} />
    
    </Routes>
  );
}

export default App


// App.js
import React, { useState } from 'react';
import {  Route, Routes, useNavigate } from 'react-router-dom';
import Home from './Home/Home';
import Navbar from './Home/NavBar';
import MyCartPage from './MyCart/Mycart';
import Login from './Login/Login';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/')
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const addToCart = (product) => {
    setCartItems(prevItems => [...prevItems, product]);
  };

  return (
    <div className="App">
      {/* Conditionally render Navbar based on login status */}
      {isLoggedIn && (
        <Navbar cartItemsCount={cartItems.length} handleLogout={handleLogout} />
      )}

      {/* Render routes based on login status */}
      <Routes>
        {isLoggedIn ? (
          <>
            <Route path="/home" element={<Home addToCart={addToCart} />} />
            <Route path="/my-cart" element={<MyCartPage cartItems={cartItems} />} />
          </>
        ) : (
          <Route path="/" element={<Login onLogin={handleLogin} />} />
        )}
      </Routes>
    </div>
  );
}

export default App;

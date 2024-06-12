import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import ShoeList from './components/shoeList';
import Cart from './components/cart';
import Payment from './components/Payment';
import shoes from './data/shoes';
import './App.css';

function App() {
  const [showPaymentPage, setShowPaymentPage] = useState(false);
  return (
    <CartProvider>
      <div className='app'>
        <Routes>
          <Route path="/" element={<ShoeList shoes={shoes} />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
        <Cart showPaymentPage={showPaymentPage} setShowPaymentPage={setShowPaymentPage} />
      </div>
    </CartProvider>
  );
}

export default App;



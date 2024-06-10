// src/App.jsx
import React, { useState } from 'react';
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
        {!showPaymentPage && <ShoeList shoes={shoes} />}
        {showPaymentPage && <Payment />}
        <Cart showPaymentPage={showPaymentPage} setShowPaymentPage={setShowPaymentPage} />
      </div>
    </CartProvider>
  );
}

export default App;



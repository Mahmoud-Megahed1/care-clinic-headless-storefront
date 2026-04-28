import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const toggleCart = () => setIsCartOpen(!isCartOpen);
  
  const openCart = () => setIsCartOpen(true);
  
  const closeCart = () => setIsCartOpen(false);

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    openCart(); // Automatically open cart when adding
  };

  const removeFromCart = (productId) => {
    setCartItems((prev) => prev.filter(item => item.id !== productId));
  };

  // Derived state
  const cartTotal = cartItems.reduce((total, item) => {
    // Assuming price is a string like "SAR 450", extract the number
    const priceNum = parseInt(item.price.replace(/[^0-9]/g, ''), 10) || 0;
    return total + (priceNum * item.quantity);
  }, 0);

  return (
    <CartContext.Provider value={{
      isCartOpen,
      cartItems,
      toggleCart,
      openCart,
      closeCart,
      addToCart,
      removeFromCart,
      cartTotal
    }}>
      {children}
    </CartContext.Provider>
  );
};

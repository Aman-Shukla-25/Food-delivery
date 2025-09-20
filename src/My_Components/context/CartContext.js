import React, { createContext, useState, useContext } from 'react';

// Step 1: Create the context
const CartContext = createContext();

// Step 2: Create a provider component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Function to add an item to the cart
  const addItemToCart = (item) => {
    // Check if the item already exists in the cart
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      // If it exists, update the quantity
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      // If it's a new item, add it to the cart with quantity 1
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  // Function to remove an item from the cart
  const removeItemFromCart = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };
  
  // Function to update item quantity (optional but good to have)
  const updateItemQuantity = (itemId, newQuantity) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      ).filter(item => item.quantity > 0) // Remove item if quantity becomes 0
    );
  };
  
  // Naya function: Clear the cart
  const clearCart = () => {
    setCartItems([]);
  };

  // The value that will be provided to consumers
  const contextValue = {
    cartItems,
    addItemToCart,
    removeItemFromCart,
    updateItemQuantity,
    clearCart, // <-- Naya function yahan add kiya gaya
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};

// Step 3: Create a custom hook to use the cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
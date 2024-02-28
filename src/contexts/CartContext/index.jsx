import PropTypes from "prop-types"; // Corrected import for PropTypes
import { createContext, useState, useEffect } from "react";
import { load, save } from "../../components/StorageUtils";



export const CartContext = createContext();


// export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => load("cartItems") || []);

  useEffect(() => {
    save("cartItems", cartItems);
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems((currentItems) => {
      const existingItemIndex = currentItems.findIndex((item) => item.id === product.id);
      if (existingItemIndex > -1) {
        const updatedItems = [...currentItems];
        updatedItems[existingItemIndex].quantity += 1;
        return updatedItems;
      } else {
        return [...currentItems, { ...product, quantity: 1 }];
      }
    });
  };

  const updateItemQuantity = (productId, quantity) => {
    setCartItems((currentItems) => {
      return currentItems.reduce((acc, item) => {
        if (item.id === productId) {
          if (quantity > 0) {
            acc.push({ ...item, quantity });
          } // If quantity is 0, item is removed from cart
        } else {
          acc.push(item);
        }
        return acc;
      }, []);
    });
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const value = { cartItems, addToCart, updateItemQuantity, clearCart };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

// Adding PropTypes for validation
CartProvider.propTypes = {
  children: PropTypes.node.isRequired, // Defines children as required prop of any node (element)
};

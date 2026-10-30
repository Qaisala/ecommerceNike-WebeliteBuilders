import { createContext, useState } from "react";
import all_product from "../Utils/all_product";
// Promo Codes:- SAVE10, SAVE20

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  all_product.forEach((product) => {
    cart[product.id] = 0;
  });
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [promoCode, setPromoCode] = useState("");
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoMessage, setPromoMessage] = useState({ text: "", type: "" });

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 }));
  };

  // Used for the "X" button: completely removes the item (sets to 0)
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ 
      ...prev, 
      [itemId]: 0 
    }));
  };

  // Used for the minus (-) button: stops at 1
  const decreaseQuantity = (itemId) => {
    setCartItems((prev) => ({ 
      ...prev, 
      [itemId]: prev[itemId] > 1 ? prev[itemId] - 1 : 1 
    }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_product.find(
          (product) => product.id === Number(item),
        );
        if (itemInfo) {
          totalAmount += cartItems[item] * itemInfo.new_price;
        }
      }
    }
    return totalAmount;
  };

  // Calculate final total after discount
  const getFinalTotal = () => {
    const subtotal = getTotalCartAmount();
    const discountAmount = (subtotal * discountPercent) / 100;
    return Math.max(0, subtotal - discountAmount).toFixed(2);
  };

  const getDiscountAmount = () => {
    const subtotal = getTotalCartAmount();
    return ((subtotal * discountPercent) / 100).toFixed(2);
  };

  const applyPromoCode = (code) => {
    const cleanCode = code.trim().toUpperCase();
    if (cleanCode === "SAVE10") {
      setDiscountPercent(10);
      setPromoMessage({
        text: "Promo code 'SAVE10' applied (10% OFF)!",
        type: "success",
      });
    } else if (cleanCode === "SAVE20") {
      setDiscountPercent(20);
      setPromoMessage({
        text: "Promo code 'SAVE20' applied (20% OFF)!",
        type: "success",
      });
    } else {
      setDiscountPercent(0);
      setPromoMessage({
        text: "Invalid promo code. Try 'SAVE10'.",
        type: "error",
      });
    }
  };

  const getTotalCartItems = () => {
    let totalItems = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItems += cartItems[item];
      }
    }
    return totalItems;
  };

  const contextValue = {
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
    decreaseQuantity,
    getTotalCartAmount,
    getTotalCartItems,
    promoCode,
    setPromoCode,
    applyPromoCode,
    discountPercent,
    promoMessage,
    getFinalTotal,
    getDiscountAmount,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;

import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import EmptyCart from "../assets/EmptyCart.png";
import { X, Plus, Minus } from "lucide-react";
import { Link } from "react-router-dom";

function Cart() {
  const {
    getTotalCartItems,
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
    decreaseQuantity,
    getTotalCartAmount,
    promoCode,
    setPromoCode,
    applyPromoCode,
    discountPercent,
    promoMessage,
    getFinalTotal,
    getDiscountAmount,
  } = useContext(ShopContext);

  const [inputCode, setInputCode] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleApplyPromo = () => {
    applyPromoCode(inputCode);
  };

  return (
    <div className="max-w-7xl mx-auto mt-30 p-4">
      {getTotalCartItems() === 0 ? (
        <div className="flex items-center justify-center py-20">
          <img src={EmptyCart} alt="Empty shopping cart" className="max-w-xs" />
        </div>
      ) : (
        <div>
          {/* ================= DESKTOP TABLE VIEW ================= */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-162.5">
              <thead>
                <tr className="border-b-2 border-gray-300 text-gray-700 font-bold text-base">
                  <th className="py-3 px-4">Products</th>
                  <th className="py-3 px-4">Title</th>
                  <th className="py-3 px-4">Price</th>
                  <th className="py-3 px-4">Quantity</th>
                  <th className="py-3 px-4">Total</th>
                  <th className="py-3 px-4">Remove</th>
                </tr>
              </thead>
              <tbody>
                {all_product.map((e) => {
                  const quantity =
                    cartItems[e.id] || cartItems[String(e.id)] || 0;

                  if (quantity > 0) {
                    return (
                      <tr
                        key={e.id}
                        className="border-b border-gray-200 text-gray-600 font-medium text-base items-center"
                      >
                        <td className="py-4 px-4">
                          <img
                            src={e.image}
                            alt={e.name}
                            className="w-16 h-16 object-contain"
                          />
                        </td>
                        <td className="py-4 px-4 font-semibold text-gray-800">
                          {e.name}
                        </td>
                        <td className="py-4 px-4">${e.new_price}</td>

                        <td className="py-4 px-4">
                          <div className="flex items-center border border-gray-300 rounded w-max bg-white">
                            <button
                              onClick={() => decreaseQuantity(e.id)}
                              className="p-2 hover:bg-gray-100 text-gray-600 transition-colors cursor-pointer"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="px-3 font-semibold text-gray-800">
                              {quantity}
                            </span>
                            <button
                              onClick={() => addToCart(e.id)}
                              className="p-2 hover:bg-gray-100 text-gray-600 transition-colors cursor-pointer"
                              aria-label="Increase quantity"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                        <td className="py-4 px-4 font-semibold text-gray-800">
                          ${e.new_price * quantity}
                        </td>
                        <td className="py-4 px-4">
                          <X
                            onClick={() => removeFromCart(e.id)}
                            className="cursor-pointer text-gray-500 hover:text-red-500 transition-colors"
                          />
                        </td>
                      </tr>
                    );
                  }
                  return null;
                })}
              </tbody>
            </table>
          </div>

          {/* ================= MOBILE CARD VIEW ================= */}
          <div className="md:hidden flex flex-col gap-4">
            {all_product.map((e) => {
              const quantity = cartItems[e.id] || cartItems[String(e.id)] || 0;

              if (quantity > 0) {
                return (
                  <div
                    key={e.id}
                    className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm flex flex-col gap-3"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <img
                          src={e.image}
                          alt={e.name}
                          className="w-16 h-16 object-contain border border-gray-100 rounded p-1"
                        />
                        <div>
                          <h3 className="font-semibold text-gray-800 text-sm line-clamp-2">
                            {e.name}
                          </h3>
                          <p className="text-gray-500 text-sm mt-0.5">
                            ${e.new_price}
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() => removeFromCart(e.id)}
                        className="text-gray-400 hover:text-red-500 p-1 transition-colors cursor-pointer"
                        aria-label="Remove item"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>

                    <div className="flex justify-between items-center border-t border-gray-100 pt-3 text-sm">
                      <div className="flex items-center border border-gray-300 rounded bg-gray-50">
                        <button
                          onClick={() => decreaseQuantity(e.id)}
                          className="p-1.5 hover:bg-gray-200 text-gray-600 transition-colors cursor-pointer"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-3 font-semibold text-gray-800 text-xs">
                          {quantity}
                        </span>
                        <button
                          onClick={() => addToCart(e.id)}
                          className="p-1.5 hover:bg-gray-200 text-gray-600 transition-colors cursor-pointer"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="text-right">
                        <span className="text-gray-500 text-xs mr-1">
                          Total:
                        </span>
                        <span className="font-bold text-gray-900">
                          ${e.new_price * quantity}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              }
              return null;
            })}
          </div>

          {/* ================= CART TOTALS & PROMO SECTION ================= */}
          <div className="flex my-12">
            <div className="w-full max-w-md mx-auto lg:ml-auto lg:mr-0 lg:w-112.5 flex flex-col gap-4 bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h1 className="text-lg font-bold">Cart Totals</h1>

              {/* Promo code input & apply button */}
              <div className="flex flex-col gap-1.5">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Enter Promo Code"
                    value={inputCode}
                    onChange={(e) => setInputCode(e.target.value)}
                    className="flex-1 h-11 px-3 bg-white border border-gray-300 rounded text-sm outline-none uppercase"
                  />
                  <button
                    onClick={handleApplyPromo}
                    className="h-11 px-5 bg-gray-800 text-white text-sm font-semibold rounded hover:bg-gray-900 transition-colors cursor-pointer"
                  >
                    Apply
                  </button>
                </div>
                {promoMessage.text && (
                  <p
                    className={`text-xs font-medium ${
                      promoMessage.type === "success"
                        ? "text-green-600"
                        : "text-red-500"
                    }`}
                  >
                    {promoMessage.text}
                  </p>
                )}
              </div>

              <hr className="bg-gray-300 border-0 h-0.5 my-1" />

              <div>
                <div className="flex justify-between py-2">
                  <p>Subtotal</p>
                  <p>${getTotalCartAmount()}</p>
                </div>

                {discountPercent > 0 && (
                  <>
                    <hr className="bg-gray-300 border-0 h-0.5 my-2" />
                    <div className="flex justify-between py-2 text-green-600 font-medium">
                      <p>Discount ({discountPercent}%)</p>
                      <p>-${getDiscountAmount()}</p>
                    </div>
                  </>
                )}

                <hr className="bg-gray-300 border-0 h-0.5 my-2" />
                <div className="flex justify-between py-2">
                  <p>Shipping Fee</p>
                  <p>Free</p>
                </div>
                <hr className="bg-gray-300 border-0 h-0.5 my-2" />
                <div className="flex justify-between py-2 text-xl font-semibold">
                  <h3>Total</h3>
                  <h3>${getFinalTotal()}</h3>
                </div>
              </div>

              <Link to="#" className="mt-2">
                <button className="w-full h-14 bg-[#138695] text-white font-semibold rounded-md text-lg cursor-pointer hover:bg-[#0f6b76] transition-colors">
                  PROCEED TO CHECKOUT
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;

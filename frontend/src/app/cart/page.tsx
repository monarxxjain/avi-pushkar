"use client"
import { CartItemCard } from "@/components/cart/CartItemCard";
import { CartItem } from "@/types/cart";
import { generateInstagramCartMessage, getCart } from "@/utils/cart";
import { useEffect, useState } from "react";

export default function Cart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const refreshCart = () => {
    setCartItems(getCart());
  };

  useEffect(() => {
    refreshCart();
  }, []);

  const total = cartItems.reduce(
    (acc, item) => acc + (item.product.price || 0) * item.quantity,
    0
  );

  const handleCopyMessage = () => {
    const msg = generateInstagramCartMessage();
    console.log(msg);
    navigator.clipboard.writeText(msg).then(() => {
      alert("✅ Order details copied!\n\nYou’ll now be redirected to our Instagram profile.\nJust open the DM, paste the message, and hit send!");

      window.open("https://www.instagram.com/avi_pushkar", "_blank");
    });
  };

  return (
    <section className="min-h-screen pt-[8vh] px-6 md:px-20 lg:px-32 py-12">
      <div className="text-center w-full mt-5">
        <div className="inline-block relative">
          <h1 className="text-xl sm:text-3xl border-b border-yellow-700 px-4 pb-2 font-semibold">
            Your Cart
          </h1>
          <div className="absolute -bottom-1 h-2 w-2 bg-yellow-700 rounded-full" />
          <div className="absolute -bottom-1 right-0 h-2 w-2 bg-yellow-700 rounded-full" />
        </div>
      </div>

      {cartItems.length === 0 ? (
        <p className="text-center mt-20 text-lg text-gray-500">
          Your cart is empty.
        </p>
      ) : (
        <div className="mt-10 space-y-8">
          {cartItems.map((item) => (
            <CartItemCard
              key={item.product._id}
              item={item}
              onQuantityChange={refreshCart}
            />
          ))}
        </div>
      )}

      {cartItems.length > 0 && (
        <div className="border-t pt-6 flex justify-between items-center">
          <div className="text-base sm:text-xl font-medium">Total:</div>
          <div className="text-lg sm:text-2xl font-semibold text-yellow-700">₹ {total}</div>
        </div>
      )}

      <button onClick={handleCopyMessage} className="mt-5 mx-auto py-1 sm:py-2 w-full bg-white border border-yellow-600 text-yellow-600 sm:text-xl rounded hover:bg-yellow-600 hover:text-white active:scale-95 cursor-pointer transition-all">
        Place Order
      </button>
    </section>
  );
}
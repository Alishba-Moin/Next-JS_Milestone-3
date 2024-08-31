"use client";

import { useCart } from "../../../context/cart-context";
import Link from "next/link";

const CartPage = () => {
  const { cart, removeFromCart } = useCart();

  const handleRemove = (id: string) => {
    removeFromCart(id);
  };

  return (
    <main className="container mx-auto p-8 bg-gray-100">
      <h1 className="text-5xl font-extrabold mb-8 text-center text-blue-800 font-sans drop-shadow-md"> Shopping Cart </h1>
      {cart.length === 0 ? (
        <div className="text-center text-gray-500 text-lg">
          <p>Your cart is empty</p>
          <Link href="/"
            className="text-blue-700 hover:underline font-medium mt-4 inline-block">
            Go back to shopping
          </Link>
        </div>
      ) : (
        <div>
          <ul className="space-y-8">
            {cart.map((item) => (
              <li
                key={item.id}
                className="bg-white border border-gray-300 p-6 rounded-lg shadow-lg flex justify-between items-center">
                <div className="flex-1">
                  <h2 className="text-3xl font-semibold text-teal-900 font-mono">
                    {item.name} </h2>
                  <p className="text-gray-800 text-lg mb-1">
                    Price:{" "}
                    <span className="text-green-700 font-medium">
                      ${item.price.toFixed(2)}
                    </span>
                  </p>
                  <p className="text-gray-800 text-lg">Quantity: {item.quantity}</p>
                </div>
                <div className="ml-4">
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="bg-red-700 text-white px-5 py-2 rounded-md shadow hover:bg-red-800 transition-colors duration-300"> Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-8 text-center">
            <Link
              href="/checkout"
              className="bg-orange-600 text-white px-8 py-3 rounded-lg shadow hover:bg-orange-800 transition-colors duration-300"> Proceed to Checkout
            </Link>
          </div>
        </div>
      )}
    </main>
  );
};

export default CartPage;

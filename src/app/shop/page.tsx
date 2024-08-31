"use client";

import { useState } from "react";
import Image from "next/image";
import { products } from "../components/product";

const ShopPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="bg-blue-50 min-h-screen">
   <header className="bg-gradient-to-r from-blue-800 via-blue-400 to-blue-800 text-white p-12 shadow-2xl relative">
   <h1 className="text-5xl font-extrabold text-center font-mono">Shop</h1>
        <p className="text-center mt-4 font-mono text-lg">
          Discover the best products for your tech needs
        </p>
      </header>

      <main className="p-8">
        <div className="flex justify-center mb-6">
          <button
            className={`px-4 py-2 mx-2 rounded-lg ${
              selectedCategory === "All"
                ? "bg-blue-700 text-white"
                : "bg-gray-200 text-blue-700"
            }`}
            onClick={() => setSelectedCategory("All")}
          >
            All
          </button>
          <button
            className={`px-4 py-2 mx-2 rounded-lg ${
              selectedCategory === "Electronics"
                ? "bg-blue-700 text-white"
                : "bg-gray-200 text-blue-700"
            }`}
            onClick={() => setSelectedCategory("Electronics")}
          >
            Electronics
          </button>
          <button
            className={`px-4 py-2 mx-2 rounded-lg ${
              selectedCategory === "Accessories"
                ? "bg-blue-700 text-white"
                : "bg-gray-200 text-blue-700"
            }`}
            onClick={() => setSelectedCategory("Accessories")}
          >
            Accessories
          </button>
          <button
            className={`px-4 py-2 mx-2 rounded-lg ${
              selectedCategory === "Furniture"
                ? "bg-blue-700 text-white"
                : "bg-gray-200 text-blue-700"
            }`}
            onClick={() => setSelectedCategory("Furniture")}
          >
            Furniture
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-gray-200 p-4 rounded-lg text-center transform transition-transform hover:scale-105 hover:shadow-2xl"
            >
              <Image
                src={product.src}
                alt={product.name}
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-2xl font-semibold text-blue-800">
                {product.name}
              </h3>
              <p className="text-orange-600 mt-2">${product.price.toFixed(2)}</p>
              <p className="mt-4 text-gray-700">{product.description}</p>
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-blue-800 text-blue-200 p-4 mt-12 text-center">
        <p className="text-sm">&copy; 2024 E-Shop. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ShopPage;

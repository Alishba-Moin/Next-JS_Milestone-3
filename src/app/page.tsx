'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const handleBuyNow = () => {
    router.push('/cart'); 
  };

  return (
    <div className="bg-gray-200 min-h-screen flex flex-col">
   <header className="bg-gradient-to-r from-blue-800 via-blue-600 to-blue-400 text-white p-12 shadow-2xl relative">
  <div className="absolute inset-0 bg-gray-800 opacity-40 blur-md"></div>
  <div className="relative z-10 text-center">
    <h1 className="text-6xl font-extrabold font-sans drop-shadow-lg">
      Welcome to E-Shop</h1>
    <p className="text-lg mt-4 font-sans drop-shadow-md">
    Discover the best products for you! </p>
    <div className="mt-8">
      <Link href="/shop"
        className="bg-orange-600 text-white px-8 py-4 rounded-lg shadow-lg hover:bg-orange-500 transition-transform transform hover:scale-105">
        Shop Now </Link>
    </div>
  </div>
</header>
     <main className="flex-grow p-8">
        <section id="shop" className="bg-slate-300 p-8 rounded-lg shadow-lg my-8">
          <h2 className="text-4xl font-bold mb-6 text-blue-800">New Arrivals</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Example Product Card */}
            <div className="bg-white border border-gray-200 p-4 rounded-lg text-center transform transition-transform hover:scale-105 hover:shadow-2xl">
              <img
                src="/photos/1.jpeg"
                alt="Product 1"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-2xl font-semibold text-gray-800">Product 1</h3>
              <p className="mt-2 text-xl font-semibold text-teal-600">$29.99</p>
              <button
                onClick={handleBuyNow}
                className="mt-4 bg-black text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition-colors"> Buy Now
              </button>
            </div>
              {/* Product Card 2 */}
              <div className="bg-white border border-gray-200 p-4 rounded-lg text-center transform transition-transform hover:scale-105 hover:shadow-2xl">
              <img src="/photos/2.jpg" alt="Product 2" className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="text-2xl font-semibold text-gray-800">Product 2</h3>
              <p className="mt-2 text-xl font-semibold text-teal-600">$49.99</p>
              <button  
              onClick={handleBuyNow}
              className="mt-4 bg-black text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition-colors"> Buy Now
              </button>
            </div>
            {/* Product Card 3 */}
            <div className="bg-white border border-gray-200 p-4 rounded-lg text-center transform transition-transform hover:scale-105 hover:shadow-2xl">
              <img src="/photos/3.jpeg" alt="Product 3" className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="text-2xl font-semibold text-gray-800">Product 3</h3>
              <p className="mt-2 text-xl font-semibold text-teal-600">$39.99</p>
              <button 
              onClick={handleBuyNow}
              className="mt-4 bg-black text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition-colors"> Buy Now
              </button>
            </div>
          </div>
        </section>

        <section className="bg-slate-300 p-8 rounded-lg shadow-lg my-8">
          <h2 className="text-4xl font-bold mb-6 text-blue-800">Best Sellers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Product Card 4 */}
            <div className="bg-white border border-gray-200 p-4 rounded-lg text-center transform transition-transform hover:scale-105 hover:shadow-2xl">
              <img src="/photos/4.jpeg" alt="Product 4" className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="text-2xl font-semibold text-gray-800">Product 4</h3>
              <p className="mt-2 text-xl font-semibold text-teal-600">$59.99</p>
              <button
              onClick={handleBuyNow}
              className="mt-4 bg-black text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition-colors"> Buy Now
              </button>
            </div>
            {/* Product Card 5 */}
            <div className="bg-white border border-gray-200 p-4 rounded-lg text-center transform transition-transform hover:scale-105 hover:shadow-2xl">
              <img src="/photos/5.jpeg" alt="Product 5" className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="text-2xl font-semibold text-gray-800">Product 5</h3>
              <p className="mt-2 text-xl font-semibold text-teal-600">$69.99</p>
              <button 
              onClick={handleBuyNow}
               className="mt-4 bg-black text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition-colors"> Buy Now
              </button>
            </div>
            {/* Product Card 6 */}
            <div className="bg-white border border-gray-200 p-4 rounded-lg text-center transform transition-transform hover:scale-105 hover:shadow-2xl">
              <img src="/photos/6.jpeg" alt="Product 6" className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="text-2xl font-semibold text-gray-800">Product 6</h3>
              <p className="mt-2 text-xl font-semibold text-teal-600">$79.99</p>
              <button 
              onClick={handleBuyNow}
              className="mt-4 bg-black text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition-colors"> Buy Now
              </button>
          </div>
          </div>
        </section>
      </main>

      <footer className="bg-blue-900 text-blue-100 p-4 mt-12">
        <p className="text-center text-sm">&copy; 2024 E-Shop. All rights reserved.</p>
        <div className="text-center mt-4">
          <Link href="/" className="text-blue-100 hover:underline">
            Privacy Policy
          </Link>{" "}
          |{" "}
          <Link href="/" className="text-blue-100 hover:underline">
            Terms of Service
          </Link>
        </div>
      </footer>
    </div>
  );
}

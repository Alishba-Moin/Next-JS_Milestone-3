import Link from "next/link";

const Navbar = () => (
  <header className="bg-blue-900 shadow-lg">
    <nav className="container mx-auto flex justify-between items-center p-6">
      {/* Logo Section */}
      <div>
        <h1 className="text-4xl text-white font-bold font-serif">
          Eco<span className="text-orange-500">Trends</span>
        </h1>
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-8">
        <Link href="/"
          className="text-white text-xl font-semibold hover:text-orange-400 transition-colors duration-300">Home</Link>
        <Link href="/products"
          className="text-white text-lg font-semibold hover:text-orange-400 transition-colors duration-300"> Products</Link>
        <Link href="/blogs"
          className="text-white text-lg font-semibold hover:text-orange-400 transition-colors duration-300"> Blogs </Link>
        <Link href="/cart"
          className="text-white text-lg font-semibold hover:text-orange-400 transition-colors duration-300"> Cart</Link>
      </div>
    </nav>
  </header>
);

export default Navbar;

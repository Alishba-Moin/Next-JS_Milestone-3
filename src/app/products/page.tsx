import Link from 'next/link';
import Image from 'next/image';
import { Product, products } from '../components/product';

export default function ProductsPage() {
    return (
    <main className="container mx-auto px-6 py-12 bg-gray-100">
       <h1 className="text-4xl font-bold text-blue-900 mb-10 text-center font-sans"> Our Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map((product: Product) => (
        <div
            key={product.id}
            className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 transition-transform duration-300 hover:scale-105 hover:shadow-xl">
        <div className="relative mb-6">
        <Image
            src={product.src}
            alt={product.name}
            width={400}
            height={300}
            className="w-full h-48 object-cover rounded-lg transition-transform duration-300 transform hover:scale-110"/>
        </div>
        <div className="flex flex-col space-y-4">
           <h2 className="text-1xl font-semibold text-blue-800">{product.name}</h2>
            <p className="text-gray-700 text-lg">{product.description}</p>
            <p className="text-orange-600 font-bold text-lg">${product.price.toFixed(2)}</p>
                <Link href={`/products/${product.id}`} className="text-blue-600 hover:text-blue-800 font-semibold"> View Details</Link>
        </div>
       </div>
    ))}
      </div>
</main>
    );
}

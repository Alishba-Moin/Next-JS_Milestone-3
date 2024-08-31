"use client";

import { products } from '../../components/product';
import NotFound from './not-found';
import Image from 'next/image';
import { useCart } from '../../../../context/cart-context';
import { useRouter } from 'next/navigation'; 

const ProductDetailPage = ({ params }: { params: { id: string } }) => {
  const product = products.find(p => p.id === params.id);
  const { addToCart } = useCart();
  const router = useRouter();

  if (!product) {
    return <NotFound />;
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1
    });
    router.push('/cart'); 
  };

  return (
    <main className="container mx-auto p-6 bg-gray-50 min-h-screen">
      <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
        <div className="relative">
          <Image
            src={product.src}
            alt={product.name}
            width={600}
            height={400}
            className="w-full h-64 object-cover rounded-t-lg"
          />
        </div>
        <div className="p-6">
          <h1 className="text-3xl font-bold text-blue-800 mb-3">{product.name}</h1>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <p className="text-orange-600 text-2xl font-semibold mb-6">${product.price.toFixed(2)}</p>
          <button
            onClick={handleAddToCart}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300">
            Add to Cart
          </button>
        </div>
      </div>
    </main>
  );
};

export default ProductDetailPage;

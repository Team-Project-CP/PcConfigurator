'use client';

import Image from 'next/image';
import { useParams } from 'next/navigation';
import Header from "../../Header";
import Footer from "../../Footer";
import { useEffect, useState } from 'react';
import { useStore } from '../../context/StoreContext';
import { FaHeart, FaRegHeart, FaBalanceScale, FaShoppingCart } from 'react-icons/fa';

// Product data types
interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  specs: {
    cpu: string;
    gpu: string;
    ram: string;
    storage: string;
    cooling: string;
  };
  images: string[];
}

export default function ProductPage() {
  const params = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const { 
    addToCart, 
    addToFavorites, 
    removeFromFavorites, 
    addToCompare, 
    removeFromCompare,
    isInFavorites, 
    isInCompare 
  } = useStore();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timeout);
  }, []);

  // Here will be product data loading
  useEffect(() => {
    // In a real application, this would be an API request
    setProduct({
      id: params.id as string,
      name: "Gaming PC Pro",
      price: 3499.99,
      description: "Powerful gaming computer for the most demanding games and tasks. Equipped with the latest components and advanced cooling system.",
      specs: {
        cpu: "Intel Core i9-13900K",
        gpu: "NVIDIA GeForce RTX 4090",
        ram: "32GB DDR5",
        storage: "2TB NVMe SSD",
        cooling: "Liquid Cooling System"
      },
      images: [
        "/Gaming-PCs/images/product-1.png",
        "/Gaming-PCs/images/product-2.png",
        "/Gaming-PCs/images/product-3.png"
      ]
    });
  }, [params.id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      description: product.description,
      image: product.images[0],
      specs: product.specs
    });
  };

  const handleFavorite = () => {
    if (isInFavorites(product.id)) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites({
        id: product.id,
        name: product.name,
        price: product.price,
        description: product.description,
        image: product.images[0],
        specs: product.specs
      });
    }
  };

  const handleCompare = () => {
    if (isInCompare(product.id)) {
      removeFromCompare(product.id);
    } else {
      addToCompare({
        id: product.id,
        name: product.name,
        price: product.price,
        description: product.description,
        image: product.images[0],
        specs: product.specs
      });
    }
  };

  return (
    <main className="bg-white text-black">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            {product.images.map((image, index) => (
              <div key={index} className="relative aspect-square">
                <Image
                  src={image}
                  alt={`${product.name} - image ${index + 1}`}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            ))}
          </div>

          {/* Product Information */}
          <div className="space-y-6">
            <div className="flex justify-between items-start">
              <h1 className="text-4xl font-bold">{product.name}</h1>
              <div className="flex gap-2">
                <button
                  onClick={handleFavorite}
                  className="p-2 rounded-full hover:bg-gray-100 transition"
                  title={isInFavorites(product.id) ? "Remove from favorites" : "Add to favorites"}
                >
                  {isInFavorites(product.id) ? (
                    <FaHeart className="text-red-500 text-xl" />
                  ) : (
                    <FaRegHeart className="text-gray-500 text-xl" />
                  )}
                </button>
                <button
                  onClick={handleCompare}
                  className="p-2 rounded-full hover:bg-gray-100 transition"
                  title={isInCompare(product.id) ? "Remove from compare" : "Add to compare"}
                >
                  <FaBalanceScale className={`text-xl ${isInCompare(product.id) ? 'text-purple-600' : 'text-gray-500'}`} />
                </button>
              </div>
            </div>
            
            <p className="text-3xl font-bold text-purple-600">${product.price}</p>
            
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Description</h2>
              <p className="text-gray-600">{product.description}</p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Specifications</h2>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span className="text-gray-600">CPU:</span>
                  <span className="font-medium">{product.specs.cpu}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">GPU:</span>
                  <span className="font-medium">{product.specs.gpu}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">RAM:</span>
                  <span className="font-medium">{product.specs.ram}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Storage:</span>
                  <span className="font-medium">{product.specs.storage}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Cooling:</span>
                  <span className="font-medium">{product.specs.cooling}</span>
                </li>
              </ul>
            </div>

            <button 
              onClick={handleAddToCart}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition flex items-center justify-center gap-2"
            >
              <FaShoppingCart />
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <Footer isVisible={isVisible} />
    </main>
  );
} 
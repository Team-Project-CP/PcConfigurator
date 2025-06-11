'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaTwitch, FaTiktok, FaDiscord, FaHeart, FaRegHeart, FaBalanceScale, FaShoppingCart } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import Header from "../Header";
import Footer from "../Footer";
import { useStore } from '../context/StoreContext';
import { products } from '../data';

// Product data types
interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

interface NewsPoster {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
}

interface ProductCardProps {
  product: Product;
  index: number;
}

interface NewsPosterProps {
  poster: NewsPoster;
  index: number;
}

export default function GamingGearPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [newsPosters, setNewsPosters] = useState<NewsPoster[]>([]);
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

  // Load product data
  useEffect(() => {
    // In a real application, this would be an API request
    setProducts([
      {
        id: "limited-1",
        name: "LIMITED PC #1",
        price: 3499.99,
        description: "RTX 4090, Intel i9, 32GB RAM",
        image: "/Gaming-PCs/images/product-1.png",
        category: "limited"
      },
      {
        id: "limited-2",
        name: "LIMITED PC #2",
        price: 3299.99,
        description: "RTX 4080, Intel i7, 32GB RAM",
        image: "/Gaming-PCs/images/product-2.png",
        category: "limited"
      },
      {
        id: "limited-3",
        name: "LIMITED PC #3",
        price: 2999.99,
        description: "RTX 4070, Intel i7, 16GB RAM",
        image: "/Gaming-PCs/images/product-3.png",
        category: "limited"
      },
      {
        id: "nzxt-1",
        name: "NZXT PC #1",
        price: 2299.99,
        description: "RTX 4070, Ryzen 7, 16GB RAM",
        image: "/Gaming-PCs/images/product-4.png",
        category: "nzxt"
      },
      {
        id: "nzxt-2",
        name: "NZXT PC #2",
        price: 2499.99,
        description: "RTX 4080, Ryzen 9, 32GB RAM",
        image: "/Gaming-PCs/images/product-5.png",
        category: "nzxt"
      },
      {
        id: "nzxt-3",
        name: "NZXT PC #3",
        price: 2699.99,
        description: "RTX 4090, Ryzen 9, 32GB RAM",
        image: "/Gaming-PCs/images/product-6.png",
        category: "nzxt"
      }
    ]);
  }, []);

  // Load news posters data
  useEffect(() => {
    setNewsPosters([
      {
        id: "news-1",
        title: "New Generation of Intel Processors",
        description: "Discover the revolutionary performance improvements in the new Intel Core 14th Generation processors",
        image: "/images/image.png",
        date: "2024-03-15"
      },
      {
        id: "news-2",
        title: "RTX 5000 Series: The Future of Gaming Graphics",
        description: "NVIDIA announces new generation of graphics cards with revolutionary architecture",
        image: "/images/image2.png",
        date: "2024-03-10"
      },
      {
        id: "news-3",
        title: "DDR5: New Memory Standard",
        description: "How new DDR5 modules will change your PC's performance",
        image: "/images/image3.png",
        date: "2024-03-05"
      }
    ]);
  }, []);

  const handleAddToCart = (product: Product) => {
    addToCart(product);
  };

  const handleFavorite = (product: Product) => {
    if (isInFavorites(product.id)) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites(product);
    }
  };

  const handleCompare = (product: Product) => {
    if (isInCompare(product.id)) {
      removeFromCompare(product.id);
    } else {
      addToCompare(product);
    }
  };

  const ProductCard = ({ product, index }: ProductCardProps) => (
    <div 
      className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl animate-slide-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="relative w-full h-48 group">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
          priority={index < 3}
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300" />
      </div>
      
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2 animate-fade-in">{product.name}</h2>
        <p className="text-gray-600 mb-4 animate-fade-in" style={{ animationDelay: '100ms' }}>
          {product.description}
        </p>
        <div className="flex justify-between items-center mb-4">
          <span className="text-2xl font-bold text-purple-600 animate-fade-in" style={{ animationDelay: '200ms' }}>
            ${product.price}
          </span>
          <div className="flex gap-2">
            <button
              onClick={() => handleFavorite(product)}
              className={`p-2 rounded-full transition-all duration-300 hover:scale-110 animate-fade-in ${
                isInFavorites(product.id)
                  ? 'bg-red-100 hover:bg-red-200'
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
              style={{ animationDelay: '400ms' }}
              title={isInFavorites(product.id) ? "Remove from favorites" : "Add to favorites"}
            >
              <FaHeart className={isInFavorites(product.id) ? 'text-red-500' : 'text-gray-500'} />
            </button>
            <button
              onClick={() => handleCompare(product)}
              className={`p-2 rounded-full transition-all duration-300 hover:scale-110 animate-fade-in ${
                isInCompare(product.id)
                  ? 'bg-purple-100 hover:bg-purple-200'
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
              style={{ animationDelay: '500ms' }}
              title={isInCompare(product.id) ? "Remove from compare" : "Add to compare"}
            >
              <FaBalanceScale className={isInCompare(product.id) ? 'text-purple-600' : 'text-gray-500'} />
            </button>
          </div>
        </div>
        <Link 
          href={`/Gaming-PCs/${product.id}`}
          className="block w-full text-center bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg transition-all duration-300 hover:scale-105 animate-fade-in"
          style={{ animationDelay: '600ms' }}
        >
          View Details
        </Link>
      </div>
    </div>
  );

  const NewsPoster = ({ poster, index }: NewsPosterProps) => (
    <div 
      className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl animate-slide-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="relative w-full h-48">
        <Image
          src={poster.image}
          alt={poster.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <div className="text-sm text-gray-500 mb-2">{poster.date}</div>
        <h3 className="text-xl font-bold mb-2">{poster.title}</h3>
        <p className="text-gray-600">{poster.description}</p>
        <button className="mt-4 text-purple-600 hover:text-purple-700 font-semibold transition-colors duration-300">
          Read More →
        </button>
      </div>
    </div>
  );

  return (
    <main className="bg-white text-black min-h-screen">
      <Header />

      {/* Big Welcome Poster */}
      <section className="relative w-full flex justify-center items-center bg-gradient-to-r from-blue-900 to-blue-600 mb-12 rounded-xl overflow-hidden shadow-lg min-h-[320px]">
        <div className="absolute inset-0 opacity-40">
          <Image
            src="/images/image4.png"
            alt="Intel Core Poster"
            fill
            className="object-cover w-full h-full"
            priority
          />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center text-center py-16 px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow mb-4 animate-fade-in">Welcome to the World of Gaming PCs</h2>
          <p className="text-lg md:text-2xl text-white/90 max-w-2xl animate-fade-in" style={{animationDelay: '200ms'}}>Discover the revolutionary performance of the latest Intel Core 14th Gen processors and cutting-edge gaming hardware!</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center animate-fade-in">Gaming PCs</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        <div className="mt-20">
          <h2 className="text-3xl font-bold mb-8 text-center animate-fade-in">Latest News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsPosters.map((poster, index) => (
              <NewsPoster key={poster.id} poster={poster} index={index} />
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(30px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }

        .animate-slide-up {
          animation: slideUp 0.5s ease-out forwards;
        }
      `}</style>

      <Footer isVisible={isVisible} />
    </main>
  );
}

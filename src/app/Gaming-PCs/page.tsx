'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaTwitch, FaTiktok, FaDiscord, FaHeart, FaRegHeart, FaBalanceScale, FaShoppingCart } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import Header from "../Header";
import Footer from "../Footer";
import { useStore } from '../context/StoreContext';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { firestore } from '@/lib/firebase/init';

// Product data types
interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  cpu: string;
  gpu: string;
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
  const [search, setSearch] = useState('');
  const [selectedGPU, setSelectedGPU] = useState('all');
  const [selectedCPU, setSelectedCPU] = useState('all');
  const [sortBy, setSortBy] = useState('default');
  const [loading, setLoading] = useState(true);
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

  // Load product data from Firestore
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let q;
        if (sortBy === 'price-asc') {
          q = query(collection(firestore, 'GamingPCs'), orderBy('price', 'asc'));
        } else if (sortBy === 'price-desc') {
          q = query(collection(firestore, 'GamingPCs'), orderBy('price', 'desc'));
        } else if (sortBy === 'name-asc') {
          q = query(collection(firestore, 'GamingPCs'), orderBy('name', 'asc'));
        } else if (sortBy === 'name-desc') {
          q = query(collection(firestore, 'GamingPCs'), orderBy('name', 'desc'));
        } else if (sortBy === 'cpu-asc') {
          q = query(collection(firestore, 'GamingPCs'), orderBy('cpu', 'asc'));
        } else if (sortBy === 'cpu-desc') {
          q = query(collection(firestore, 'GamingPCs'), orderBy('cpu', 'desc'));
        } else if (sortBy === 'gpu-asc') {
          q = query(collection(firestore, 'GamingPCs'), orderBy('gpu', 'asc'));
        } else if (sortBy === 'gpu-desc') {
          q = query(collection(firestore, 'GamingPCs'), orderBy('gpu', 'desc'));
        } else if (sortBy === 'ram-asc') {
          q = query(collection(firestore, 'GamingPCs'), orderBy('ram', 'asc'));
        } else if (sortBy === 'ram-desc') {
          q = query(collection(firestore, 'GamingPCs'), orderBy('ram', 'desc'));
        } else if (sortBy === 'storage-asc') {
          q = query(collection(firestore, 'GamingPCs'), orderBy('storage', 'asc'));
        } else if (sortBy === 'storage-desc') {
          q = query(collection(firestore, 'GamingPCs'), orderBy('storage', 'desc'));
        } else if (sortBy === 'cooling-asc') {
          q = query(collection(firestore, 'GamingPCs'), orderBy('cooling', 'asc'));
        } else if (sortBy === 'cooling-desc') {
          q = query(collection(firestore, 'GamingPCs'), orderBy('cooling', 'desc'));
        } else {
          q = collection(firestore, 'GamingPCs');
        }
        const querySnapshot = await getDocs(q);
        const productsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as Product[];
        setProducts(productsData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };
    fetchProducts();
  }, [sortBy]);

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

  // Получение уникальных GPU и CPU для фильтров
  const gpuOptions = ['all', ...Array.from(new Set(products.map(p => p.gpu)).values()).filter(Boolean)];
  const cpuOptions = ['all', ...Array.from(new Set(products.map(p => p.cpu)).values()).filter(Boolean)];

  // Фильтрация, поиск (без сортировки на клиенте)
  let filteredProducts = products.filter(product =>
    (selectedGPU === 'all' || product.gpu === selectedGPU) &&
    (selectedCPU === 'all' || product.cpu === selectedCPU) &&
    (product.name || '').toLowerCase().includes(search.toLowerCase())
  );

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
        
        {/* Фильтры, поиск и сортировка */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 justify-center items-center">
          <input
            type="text"
            placeholder="Search by name..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <select value={selectedGPU} onChange={e => setSelectedGPU(e.target.value)} className="px-4 py-2 border rounded-lg">
            {gpuOptions.map(gpu => <option key={gpu} value={gpu}>{gpu === 'all' ? 'All GPUs' : gpu}</option>)}
          </select>
          <select value={selectedCPU} onChange={e => setSelectedCPU(e.target.value)} className="px-4 py-2 border rounded-lg">
            {cpuOptions.map(cpu => <option key={cpu} value={cpu}>{cpu === 'all' ? 'All CPUs' : cpu}</option>)}
          </select>
          <select value={sortBy} onChange={e => setSortBy(e.target.value)} className="px-4 py-2 border rounded-lg">
            <option value="default">Sort by</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="name-asc">Name: A-Z</option>
            <option value="name-desc">Name: Z-A</option>
            <option value="cpu-asc">CPU: A-Z</option>
            <option value="cpu-desc">CPU: Z-A</option>
            <option value="gpu-asc">GPU: A-Z</option>
            <option value="gpu-desc">GPU: Z-A</option>
            <option value="ram-asc">RAM: A-Z</option>
            <option value="ram-desc">RAM: Z-A</option>
            <option value="storage-asc">Storage: A-Z</option>
            <option value="storage-desc">Storage: Z-A</option>
            <option value="cooling-asc">Cooling: A-Z</option>
            <option value="cooling-desc">Cooling: Z-A</option>
          </select>
        </div>

        {/* Список ПК */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
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

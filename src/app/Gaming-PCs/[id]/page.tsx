"use client";

import Image from 'next/image';
import { useParams } from 'next/navigation';
import Header from "../../Header";
import Footer from "../../Footer";
import { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { firestore } from '@/lib/firebase/init';
import { FaHeart, FaRegHeart, FaBalanceScale, FaShoppingCart } from 'react-icons/fa';
import { useStore } from '../../context/StoreContext';

// Product data types
interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  images?: string[];
  image?: string;
  features?: string[];
  specs?: Record<string, string>;
  createdAt?: string;
  updatedAt?: string;
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
    const timeout = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const docRef = doc(firestore, 'GamingPCs', params.id as string);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setProduct({ id: docSnap.id, ...docSnap.data() } as Product);
        } else {
          setProduct(null);
        }
      } catch (error) {
        setProduct(null);
      }
    };
    fetchProduct();
  }, [params.id]);

  if (!product) {
    return <div className="p-8 text-center">Loading or not found...</div>;
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      description: product.description,
      image: product.images && product.images.length > 0 ? product.images[0] : '/images/gaming-pc.png',
      specs: {
        cpu: product.specs?.cpu || '',
        gpu: product.specs?.gpu || '',
        ram: product.specs?.ram || '',
        storage: product.specs?.storage || '',
        cooling: product.specs?.cooling || ''
      }
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
        image: product.images && product.images.length > 0 ? product.images[0] : '/images/gaming-pc.png',
        specs: {
          cpu: product.specs?.cpu || '',
          gpu: product.specs?.gpu || '',
          ram: product.specs?.ram || '',
          storage: product.specs?.storage || '',
          cooling: product.specs?.cooling || ''
        }
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
        image: product.images && product.images.length > 0 ? product.images[0] : '/images/gaming-pc.png',
        specs: {
          cpu: product.specs?.cpu || '',
          gpu: product.specs?.gpu || '',
          ram: product.specs?.ram || '',
          storage: product.specs?.storage || '',
          cooling: product.specs?.cooling || ''
        }
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
            {(product.images && product.images.length > 0
              ? product.images
              : product.image
                ? [product.image]
                : ['/images/gaming-pc.png']
            ).map((image, index) => (
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
          <div className="space-y-4">
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            <p className="text-gray-600 text-lg mb-4">{product.description}</p>
            <p className="text-[#6C38CC] font-bold text-2xl mb-6">${product.price}</p>
            {/* Features */}
            {product.features && product.features.length > 0 && (
              <div>
                <h2 className="text-xl font-semibold mb-2">Features</h2>
                <ul className="list-disc list-inside space-y-1">
                  {product.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}
            {/* Specs */}
            {product.specs && Object.keys(product.specs).length > 0 && (
              <div>
                <h2 className="text-2xl font-semibold mb-2">Specifications</h2>
                <table className="w-full text-sm border rounded-lg overflow-hidden">
                  <tbody>
                    {Object.entries(product.specs).map(([key, value]) => (
                      <tr key={key} className="border-b last:border-b-0">
                        <td className="py-2 px-3 font-medium text-gray-600">{key.toUpperCase()}</td>
                        <td className="py-2 px-3 text-right">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer isVisible={isVisible} />
    </main>
  );
} 
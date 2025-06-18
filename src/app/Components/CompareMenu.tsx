'use client';

import { useStore } from '../context/StoreContext';
import Image from 'next/image';
import { FaTimes } from 'react-icons/fa';
import Link from 'next/link';

export default function CompareMenu() {
  const { compare, removeFromCompare } = useStore();

  if (compare.length === 0) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg p-4 z-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Compare Products ({compare.length}/3)</h3>
          <Link 
            href="/compare" 
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded"
          >
            Compare Now
          </Link>
        </div>
        
        <div className="flex gap-4 overflow-x-auto pb-2">
          {compare.map((product) => (
            <div 
              key={product.id} 
              className="flex items-center gap-2 bg-gray-50 rounded-lg p-2 min-w-[200px]"
            >
              <div className="relative w-16 h-16">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover rounded"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-sm truncate">{product.name}</h4>
                <p className="text-purple-600 font-bold text-sm">${product.price}</p>
              </div>
              <button
                onClick={() => removeFromCompare(product.id)}
                className="p-1 hover:bg-gray-200 rounded-full transition"
                title="Remove from compare"
              >
                <FaTimes className="text-gray-500" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 
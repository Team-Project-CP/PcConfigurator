'use client';

import React from 'react';
import { useStore } from '../context/StoreContext';
import Image from 'next/image';
import Header from '../Header';
import Footer from '../Footer';
import { FaTimes, FaCheck, FaTimes as FaX } from 'react-icons/fa';
import Link from 'next/link';

// Extended interface for specifications
interface ExtendedSpecs {
  cpu: string;
  gpu: string;
  ram: string;
  storage: string;
  cooling: string;
  motherboard?: string;
  psu?: string;
  case?: string;
  os?: string;
  warranty?: string;
  ports?: {
    usb?: string;
    display?: string;
    network?: string;
  };
  dimensions?: string;
  weight?: string;
  features?: string[];
}

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  specs?: ExtendedSpecs;
  [key: string]: any; // For dynamic property access
}

export default function ComparePage() {
  const { compare, removeFromCompare } = useStore();

  // Function to render icon based on value
  const renderFeatureIcon = (value: string | boolean | undefined) => {
    if (value === undefined) return <span className="text-gray-400">N/A</span>;
    if (typeof value === 'boolean') {
      return value ? <FaCheck className="text-green-500" /> : <FaX className="text-red-500" />;
    }
    return value;
  };

  if (compare.length === 0) {
    return (
      <main className="bg-white text-black min-h-screen">
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h1 className="text-3xl font-bold mb-4 animate-fade-in">Compare Products</h1>
          <p className="text-gray-600 mb-8 animate-slide-up">No products to compare. Add some products to compare their features.</p>
          <Link 
            href="/Gaming-PCs" 
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold inline-block transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Browse Products
          </Link>
        </div>
        <Footer isVisible={true} />
      </main>
    );
  }

  // Specification groups for comparison
  const specGroups = [
    {
      title: "Basic Information",
      specs: [
        { key: "name", label: "Model" },
        { key: "price", label: "Price" },
        { key: "description", label: "Description" }
      ]
    },
    {
      title: "Performance",
      specs: [
        { key: "specs.cpu", label: "CPU" },
        { key: "specs.gpu", label: "GPU" },
        { key: "specs.ram", label: "RAM" },
        { key: "specs.storage", label: "Storage" }
      ]
    },
    {
      title: "System",
      specs: [
        { key: "specs.motherboard", label: "Motherboard" },
        { key: "specs.psu", label: "Power Supply" },
        { key: "specs.cooling", label: "Cooling System" },
        { key: "specs.os", label: "Operating System" }
      ]
    },
    {
      title: "Physical",
      specs: [
        { key: "specs.case", label: "Case" },
        { key: "specs.dimensions", label: "Dimensions" },
        { key: "specs.weight", label: "Weight" }
      ]
    },
    {
      title: "Connectivity",
      specs: [
        { key: "specs.ports.usb", label: "USB Ports" },
        { key: "specs.ports.display", label: "Display Ports" },
        { key: "specs.ports.network", label: "Network" }
      ]
    },
    {
      title: "Additional Features",
      specs: [
        { key: "specs.warranty", label: "Warranty" },
        { key: "specs.features", label: "Special Features" }
      ]
    }
  ];

  return (
    <main className="bg-white text-black min-h-screen">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-8 animate-fade-in">
          <h1 className="text-3xl font-bold">Compare Products</h1>
          <Link 
            href="/Gaming-PCs" 
            className="text-purple-600 hover:text-purple-700 font-semibold transition-all duration-300 hover:scale-105"
          >
            Add More Products
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b">
                <th className="p-4 text-left">Product</th>
                {compare.map((product, index) => (
                  <th key={product.id} className="p-4 text-left animate-slide-in" style={{ animationDelay: `${index * 100}ms` }}>
                    <div className="flex flex-col items-center gap-2">
                      <div className="relative w-32 h-32 group">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <h3 className="font-semibold text-center">{product.name}</h3>
                      <p className="text-purple-600 font-bold">${product.price}</p>
                      <button
                        onClick={() => removeFromCompare(product.id)}
                        className="p-1 hover:bg-gray-200 rounded-full transition-all duration-300 hover:scale-110 hover:rotate-90"
                        title="Remove from compare"
                      >
                        <FaTimes className="text-gray-500" />
                      </button>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {specGroups.map((group, groupIndex) => (
                <React.Fragment key={group.title}>
                  <tr className="bg-gray-50 animate-fade-in" style={{ animationDelay: `${groupIndex * 50}ms` }}>
                    <td colSpan={compare.length + 1} className="p-4 font-bold text-lg">
                      {group.title}
                    </td>
                  </tr>
                  {group.specs.map((spec, specIndex) => (
                    <tr key={spec.key} className="border-b animate-slide-up" style={{ animationDelay: `${(groupIndex * 50) + (specIndex * 20)}ms` }}>
                      <td className="p-4 font-semibold">{spec.label}</td>
                      {compare.map((product) => {
                        const value = spec.key.split('.').reduce((obj, key) => obj?.[key], product as any);
                        return (
                          <td key={product.id} className="p-4">
                            {Array.isArray(value) ? (
                              <ul className="list-disc list-inside">
                                {value.map((item, index) => (
                                  <li key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            ) : (
                              <span className="animate-fade-in">
                                {renderFeatureIcon(value as string | boolean | undefined)}
                              </span>
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
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
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideIn {
          from { 
            opacity: 0;
            transform: translateX(-20px);
          }
          to { 
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }

        .animate-slide-up {
          animation: slideUp 0.5s ease-out forwards;
        }

        .animate-slide-in {
          animation: slideIn 0.5s ease-out forwards;
        }
      `}</style>

      <Footer isVisible={true} />
    </main>
  );
} 
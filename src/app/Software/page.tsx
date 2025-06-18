"use client";
import { useState, useEffect } from "react";
import React from 'react';
import Loader from "../loader";
import { FaSearch, FaQuestionCircle, FaUser, FaShoppingCart, FaWindows, FaApple, FaLinux } from "react-icons/fa";
import Link from 'next/link';
import Image from 'next/image';
import Header from "../Header";
import Footer from "../Footer";
import PaymentModal from '@/app/Components/PaymentModal';
import PaymentButton from '@/components/PaymentButton';

interface SoftwareItem {
  id: number;
  name: string;
  price: string;
  icon?: React.ReactElement;
  image?: string;
  description?: string;
}

interface SoftwareCategory {
  title: string;
  items: SoftwareItem[];
}

export default function SoftwarePage() {
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const [selectedSoftware, setSelectedSoftware] = useState<SoftwareItem | null>(null);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [softwareCategories, setSoftwareCategories] = useState<SoftwareCategory[]>([]);

  useEffect(() => {
    getCollection('Software').then(data => {
      if (data) {
        setSoftwareCategories(Object.values(data));
      }
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <Loader />;
  }

  const handleBuyClick = (software: SoftwareItem) => {
    if (software.price.toLowerCase() === 'free') {
      // Handle free software download
      window.open(`/api/download/${software.id}`, '_blank');
    } else {
      setSelectedSoftware(software);
      setIsPaymentModalOpen(true);
    }
  };

  const getPriceValue = (price: string) => {
    return parseFloat(price.replace(/[^0-9.]/g, ''));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      {/* Hero Section */}
      <div className="bg-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Software Solutions</h1>
          <p className="text-xl">Find the perfect software for your needs</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {softwareCategories.map((category, index) => (
          <div key={index} className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">{category.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {category.items.map((item) => (
                <div key={item.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center justify-center mb-4">
                    {item.image ? (
                      <div className="w-24 h-24 relative">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          style={{ objectFit: 'contain' }}
                        />
                      </div>
                    ) : (
                      item.icon
                    )}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-center">{item.name}</h3>
                  <p className="text-gray-600 text-center mb-4">{item.price}</p>
                  <button 
                    onClick={() => handleBuyClick(item)}
                    className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors flex items-center justify-center"
                  >
                    <FaShoppingCart className="mr-2" />
                    {item.price.toLowerCase() === 'free' ? 'Download' : 'Buy Now'}
                  </button>
                  <PaymentButton
                    items={[{
                      name: item.name,
                      description: item.description,
                      price: parseFloat(item.price.replace(/[^0-9.]/g, '')),
                      quantity: 1,
                      image: item.image || ''
                    }]}
                    className="mt-3 w-full"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Payment Modal */}
      {selectedSoftware && (
        <PaymentModal
          isOpen={isPaymentModalOpen}
          onClose={() => setIsPaymentModalOpen(false)}
          amount={getPriceValue(selectedSoftware.price)}
          componentName={selectedSoftware.name}
        />
      )}

      <Footer isVisible={isVisible} />
    </div>
  );
} 
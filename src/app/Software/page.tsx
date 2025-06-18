"use client";
import { useState, useEffect } from "react";
import React from 'react';
import Loader from "../loader";
import { FaSearch, FaQuestionCircle, FaUser, FaShoppingCart, FaWindows, FaApple, FaLinux } from "react-icons/fa";
import Link from 'next/link';
import Image from 'next/image';
import Header from "../Header";
import Footer from "../Footer";
<<<<<<< HEAD
import PaymentModal from '@/app/Components/PaymentModal';
=======
import { getCollection } from '@/lib/firebase/databaseUtils';
>>>>>>> origin/Develop

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
<<<<<<< HEAD
  const [selectedSoftware, setSelectedSoftware] = useState<SoftwareItem | null>(null);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
=======
  const [softwareCategories, setSoftwareCategories] = useState<SoftwareCategory[]>([]);
>>>>>>> origin/Develop

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

<<<<<<< HEAD
  const softwareCategories: SoftwareCategory[] = [
    {
      title: "Operating Systems",
      items: [
        { id: 1, name: "Windows 11 Pro", icon: <FaWindows className="text-4xl text-blue-500" />, price: "$199.99", description: "The latest version of Windows with enhanced security and productivity features" },
        { id: 2, name: "Windows 10 Pro", icon: <FaWindows className="text-4xl text-blue-500" />, price: "$149.99", description: "Professional version of Windows 10 with advanced features" },
        { id: 3, name: "macOS Ventura", icon: <FaApple className="text-4xl text-gray-700" />, price: "$29.99", description: "Latest macOS version with new features and improvements" },
        { id: 4, name: "Ubuntu 22.04 LTS", icon: <FaLinux className="text-4xl text-orange-500" />, price: "Free", description: "Long-term support version of Ubuntu Linux" },
      ]
    },
    {
      title: "Development Tools",
      items: [
        { 
          id: 5,
          name: "Visual Studio 2022", 
          image: "/Software/images/Visual Studio.png",
          price: "$499.99",
          description: "Complete IDE for .NET and C++ development"
        },
        { 
          id: 6,
          name: "PyCharm Professional", 
          image: "/Software/images/PyCharm.png",
          price: "$199.99",
          description: "Professional Python IDE with advanced features"
        },
        { 
          id: 7,
          name: "WebStorm", 
          image: "/Software/images/WebStorm.png",
          price: "$149.99",
          description: "Smart JavaScript IDE for modern web development"
        },
      ]
    },
    {
      title: "Security Software",
      items: [
        { 
          id: 8,
          name: "Norton 360", 
          image: "/Software/images/Norton2.png",
          price: "$49.99/year",
          description: "Complete security solution for your devices"
        },
        { 
          id: 9,
          name: "McAfee Total Protection", 
          image: "/Software/images/McAfee2.png",
          price: "$39.99/year",
          description: "Comprehensive security suite for all your devices"
        },
        { 
          id: 10,
          name: "Bitdefender", 
          image: "/Software/images/Bitdefender3.png",
          price: "$44.99/year",
          description: "Advanced security solution with AI protection"
        },
      ]
    }
  ];

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

=======
>>>>>>> origin/Develop
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
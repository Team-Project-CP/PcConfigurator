"use client";
import { useState, useEffect } from "react";
import React from 'react';
import Loader from "../loader";
import { FaSearch, FaQuestionCircle, FaUser, FaShoppingCart, FaWindows, FaApple, FaLinux, FaDownload } from "react-icons/fa";
import Link from 'next/link';
import Image from 'next/image';

interface SoftwareItem {
  name: string;
  price: string;
  icon?: React.ReactElement;
  image?: string;
}

interface SoftwareCategory {
  title: string;
  items: SoftwareItem[];
}

export default function SoftwarePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <Loader />;
  }

  const softwareCategories: SoftwareCategory[] = [
    {
      title: "Operating Systems",
      items: [
        { name: "Windows 11 Pro", icon: <FaWindows className="text-4xl text-blue-500" />, price: "$199.99" },
        { name: "Windows 10 Pro", icon: <FaWindows className="text-4xl text-blue-500" />, price: "$149.99" },
        { name: "macOS Ventura", icon: <FaApple className="text-4xl text-gray-700" />, price: "$29.99" },
        { name: "Ubuntu 22.04 LTS", icon: <FaLinux className="text-4xl text-orange-500" />, price: "Free" },
      ]
    },
    {
      title: "Development Tools",
      items: [
        { 
          name: "Visual Studio 2022", 
          image: "/Software/images/Visual Studio.png",
          price: "$499.99" 
        },
        { 
          name: "PyCharm Professional", 
          image: "/Software/images/PyCharm.png",
          price: "$199.99" 
        },
        { 
          name: "WebStorm", 
          image: "/Software/images/WebStorm.png",
          price: "$149.99" 
        },
      ]
    },
    {
      title: "Security Software",
      items: [
        { 
          name: "Norton 360", 
          image: "/Software/images/Norton2.png",
          price: "$49.99/year" 
        },
        { 
          name: "McAfee Total Protection", 
          image: "/Software/images/McAfee2.png",
          price: "$39.99/year" 
        },
        { 
          name: "Bitdefender", 
          image: "/Software/images/Bitdefender3.png",
          price: "$44.99/year" 
        },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Banner */}
      <div className="bg-purple-600 text-white text-center text-sm py-2">
        Certified Refurbished Gaming PCs. <Link href="#" className="underline">Shop now &gt;</Link>
      </div>
      
      {/* Navigation Bar */}
      <nav className="text-white bg-black px-8 py-4 flex justify-center items-center">
        {/* logo and links */}
        <div className="flex items-center space-x-8">
          <Link href="/" className="text-2xl font-bold">Domino</Link>
          <div className="hidden md:flex space-x-6">
            <Link href="#" className="hover:text-gray-400">Deals</Link>
            <Link href="#" className="hover:text-gray-400">Gaming PCs</Link>
            <Link href="#" className="hover:text-gray-400">Components</Link>
            <Link href="#" className="hover:text-gray-400">Gaming Gear</Link>
            <Link href="#" className="hover:text-gray-400">Monitors</Link>
            <Link href="/Software" className="hover:text-gray-400">Software</Link>
            <Link href="#" className="hover:text-gray-400">Community</Link>
          </div>
        </div>
        
        {/* icons */}
        <div className="flex space-x-6 ml-auto">
          <FaSearch className="text-xl hover:text-gray-400 cursor-pointer" />
          <FaQuestionCircle className="text-xl hover:text-gray-400 cursor-pointer" />
          <FaUser className="text-xl hover:text-gray-400 cursor-pointer" />
          <FaShoppingCart className="text-xl hover:text-gray-400 cursor-pointer" />
        </div>
      </nav>

      {/* Brands */}
      <div className="bg-gray-100 py-4 flex justify-center space-x-6 items-center">
        <div className="bg-blue-600 text-white px-4 py-2 rounded flex items-center space-x-2 hover:scale-110 transition-transform duration-300 cursor-pointer">
          <span className="font-bold">Windows</span>
          <span className="text-sm">Get to know Windows 11</span>
        </div>
        <span className="font-bold text-black hover:text-[#76B900] transition-colors duration-300 cursor-pointer">NVIDIA</span>
        <span className="font-bold text-black hover:text-[#ED1C24] transition-colors duration-300 cursor-pointer">AMD</span>
        <span className="font-bold text-black hover:text-[#0071C5] transition-colors duration-300 cursor-pointer">Intel</span>
      </div>

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
              {category.items.map((item, itemIndex) => (
                <div key={itemIndex} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
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
                  <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors flex items-center justify-center">
                    <FaDownload className="mr-2" />
                    Download
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 
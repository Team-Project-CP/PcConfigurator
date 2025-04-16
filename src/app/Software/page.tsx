"use client";
import { useState, useEffect } from "react";
import React from 'react';
import Loader from "../loader";
import { FaSearch, FaQuestionCircle, FaUser, FaShoppingCart, FaWindows, FaApple, FaLinux, FaDownload } from "react-icons/fa";
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaTwitch, FaTiktok, FaDiscord } from 'react-icons/fa';

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
          <Link href="#" className="text-2xl font-bold">Domino</Link>
          <div className="hidden md:flex space-x-6">
            <Link href="#" className="hover:text-gray-400">Deals</Link>
            <Link href="#" className="hover:text-gray-400">Gaming PCs</Link>
            <Link href="#" className="hover:text-gray-400">Components</Link>
            <Link href="/Gaming-Gear" className="hover:text-gray-400">Gaming Gear</Link>
            <Link href="/Monitors" className="hover:text-gray-400">Monitors</Link>
            <Link href="/Software" className="hover:text-gray-400">Software</Link>
            <Link href="/Community" className="hover:text-gray-400">Community</Link>
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
      {/* Footer*/}
            <footer className="bg-gray-900 text-white py-12">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row justify-between mb-8">
                  <div className="lg:w-1/2">
                    <h2 className="text-3xl font-bold mb-4">Stay In Touch</h2>
                    <p className="text-gray-400 mb-6">Keep up to date on the latest releases, offers, and news from DOMINO</p>
                  </div>
                  <div className="lg:w-1/2 flex flex-col items-start lg:items-end">
                    <div className="flex space-x-4 mb-4">
                      <select className="bg-gray-800 text-white px-4 py-2 rounded">
                        <option>Language</option>
                        <option>English</option>
                      </select>
                      <select className="bg-gray-800 text-white px-4 py-2 rounded">
                        <option>Country</option>
                        <option>United States</option>
                      </select>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center w-full lg:w-auto">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full sm:w-96 px-4 py-2 rounded-l-md text-black focus:outline-none mb-4 sm:mb-0"
                      />
                      <button className="bg-gray-200 text-gray-900 px-6 py-2 rounded-r-md sm:rounded-l-none hover:bg-gray-300 transition-colors">
                        Notify Me
                      </button>
                    </div>
                  </div>
                </div>
      
                <div className="flex items-center mb-8">
                  <input type="checkbox" id="terms" className="mr-2" />
                  <label htmlFor="terms" className="text-gray-400 text-sm">
                    By signing up you agree to DOMINO{' '}
                    <a href="#" className="underline">Privacy Policy</a> and{' '}
                    <a href="#" className="underline">Terms & Conditions</a>
                  </label>
                </div>
      
                <div className="flex space-x-4 mb-8">
                  <a href="#" className="text-gray-400 hover:text-white"><FaFacebookF size={20} /></a>
                  <a href="#" className="text-gray-400 hover:text-white"><FaTwitter size={20} /></a>
                  <a href="#" className="text-gray-400 hover:text-white"><FaInstagram size={20} /></a>
                  <a href="#" className="text-gray-400 hover:text-white"><FaYoutube size={20} /></a>
                  <a href="#" className="text-gray-400 hover:text-white"><FaTwitch size={20} /></a>
                  <a href="#" className="text-gray-400 hover:text-white"><FaTiktok size={20} /></a>
                  <a href="#" className="text-gray-400 hover:text-white"><FaDiscord size={20} /></a>
                </div>
      
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Contact</h3>
                    <ul className="space-y-2 text-gray-400">
                      <li><a href="#" className="hover:underline">Customer Support</a></li>
                      <li><a href="#" className="hover:underline">Submit a Request</a></li>
                      <li><a href="#" className="hover:underline">Support Center</a></li>
                      <li><a href="#" className="hover:underline">Customer Reviews</a></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-4">About DOMINO</h3>
                    <ul className="space-y-2 text-gray-400">
                      <li><a href="#" className="hover:underline">Company</a></li>
                      <li><a href="#" className="hover:underline">Founder Q & A</a></li>
                      <li><a href="#" className="hover:underline">Careers</a></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Community</h3>
                    <ul className="space-y-2 text-gray-400">
                      <li><a href="#" className="hover:underline">DOMINO Club</a></li>
                      <li><a href="#" className="hover:underline">Podcast</a></li>
                      <li><a href="#" className="hover:underline">Newsroom & Blog</a></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Software</h3>
                    <ul className="space-y-2 text-gray-400">
                      <li><a href="#" className="hover:underline">CAM</a></li>
                      <li><a href="#" className="hover:underline">CAM Feedback</a></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Account</h3>
                    <ul className="space-y-2 text-gray-400">
                      <li><a href="#" className="hover:underline">Manage Your Account</a></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-4">DOMINO Store</h3>
                    <ul className="space-y-2 text-gray-400">
                      <li><a href="#" className="hover:underline">DOMINO Custom Gaming PC</a></li>
                      <li><a href="#" className="hover:underline">Certified Refurbished</a></li>
                      <li><a href="#" className="hover:underline">Gaming PCs</a></li>
                      <li><a href="#" className="hover:underline">PC Parts and Accessories</a></li>
                      <li><a href="#" className="hover:underline">DOMINO for Business</a></li>
                      <li><a href="#" className="hover:underline">Find a Retailer</a></li>
                    </ul>
                  </div>
                </div>
      
                <div className="flex justify-end">
                  <a href="#" className="text-gray-400 hover:underline">FAQ</a>
                </div>
              </div>
            </footer>
    </div>
  );
} 
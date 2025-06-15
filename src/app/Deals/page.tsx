'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '../Header';
import Footer from '../Footer';
import Loader from '../loader';

const DealsPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setIsVisible(true);
    }, 6000);
  }, []);

  // Sample deals data - in a real application, this would come from an API or database
  const deals = [
    {
      id: 1,
      title: 'Gaming PC Bundle',
      description: 'High-performance gaming PC with RGB lighting and premium components',
      originalPrice: 1999.99,
      discountedPrice: 1499.99,
      image: '/images/deals/gaming-pc-bundle.jpg',
      endDate: '2024-04-30',
    },
    {
      id: 2,
      title: 'Gaming Monitor Deal',
      description: '27" 144Hz Gaming Monitor with HDR support',
      originalPrice: 399.99,
      discountedPrice: 299.99,
      image: '/images/deals/gaming-monitor.jpg',
      endDate: '2024-04-25',
    },
    // Add more deals as needed
  ];

  if (loading) return <Loader />;

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-100">
        <div className="container mx-auto px-4 py-8">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-center mb-8 text-gray-800"
          >
            Special Deals & Offers
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deals.map((deal) => (
              <motion.div
                key={deal.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="relative h-48">
                  <img
                    src={deal.image}
                    alt={deal.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full">
                    {Math.round(((deal.originalPrice - deal.discountedPrice) / deal.originalPrice) * 100)}% OFF
                  </div>
                </div>
                
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2 text-gray-800">{deal.title}</h2>
                  <p className="text-gray-600 mb-4">{deal.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-gray-500 line-through">${deal.originalPrice}</span>
                      <span className="text-2xl font-bold text-green-600 ml-2">${deal.discountedPrice}</span>
                    </div>
                  </div>

                  <div className="text-sm text-gray-500 mb-4">
                    Offer ends: {new Date(deal.endDate).toLocaleDateString()}
                  </div>

                  <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                    Get This Deal
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <Footer isVisible={isVisible} />
    </>
  );
};

export default DealsPage; 
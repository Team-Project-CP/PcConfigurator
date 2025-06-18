'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../Header';
import Footer from '../Footer';
import Loader from '../loader';
import { FaTruck, FaShieldAlt, FaUndo, FaHeadset } from 'react-icons/fa';

const DealsPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

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
      image: '/Deals/GamingPCBundle.png',
      endDate: '2024-04-30',
    },
    {
      id: 2,
      title: 'Gaming Monitor Deal',
      description: '27" 144Hz Gaming Monitor with HDR support',
      originalPrice: 399.99,
      discountedPrice: 299.99,
      image: '/Deals/GamingMonitorDeal.png',
      endDate: '2024-04-25',
    },
    {
      id: 3,
      title: 'Gaming Mouse & Keyboard Combo',
      description: 'RGB Mechanical Keyboard and High-DPI Gaming Mouse Set',
      originalPrice: 249.99,
      discountedPrice: 179.99,
      image: '/Deals/MouseKeyboardCombo.png',
      endDate: '2024-04-28',
    },
    {
      id: 4,
      title: 'Gaming Headset Pro',
      description: '7.1 Surround Sound Gaming Headset with Noise-Cancelling Mic',
      originalPrice: 159.99,
      discountedPrice: 119.99,
      image: '/Deals/GamingHeadset.png',
      endDate: '2024-04-27',
    },
    {
      id: 5,
      title: 'Gaming Chair Elite',
      description: 'Ergonomic Gaming Chair with Lumbar Support and Adjustable Armrests',
      originalPrice: 499.99,
      discountedPrice: 349.99,
      image: '/Deals/GamingChair.png',
      endDate: '2024-05-01',
    },
    {
      id: 6,
      title: 'Gaming Mousepad XXL',
      description: 'Extra Large RGB Gaming Mousepad with Non-Slip Base',
      originalPrice: 49.99,
      discountedPrice: 29.99,
      image: '/Deals/GamingMousepad.png',
      endDate: '2024-04-26',
    },
    {
      id: 7,
      title: 'Gaming PC Upgrade Kit',
      description: 'CPU, RAM, and SSD Upgrade Bundle for Gaming PCs',
      originalPrice: 799.99,
      discountedPrice: 599.99,
      image: '/Deals/PCUpgrade Kit.png',
      endDate: '2024-04-29',
    },
    {
      id: 8,
      title: 'Gaming Desk Setup',
      description: 'Complete Gaming Desk with Cable Management and RGB Lighting',
      originalPrice: 349.99,
      discountedPrice: 249.99,
      image: '/Deals/GamingDesk.png',
      endDate: '2024-05-02',
    },
    {
      id: 9,
      title: 'Gaming Console Bundle',
      description: 'Next-Gen Gaming Console with Extra Controller and Popular Game',
      originalPrice: 699.99,
      discountedPrice: 549.99,
      image: '/Deals/ConsoleBundle.png',
      endDate: '2024-04-28',
    }
  ];

  if (loading) return <Loader />;

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-100">
        {/* Banner Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative bg-gradient-to-r from-purple-600 to-blue-600 text-white"
        >
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="container mx-auto px-4 py-16 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Exclusive Gaming Deals</h1>
              <p className="text-lg md:text-xl mb-8 px-4">
                Discover amazing discounts on premium gaming gear, PCs, and accessories.
                Limited time offers with massive savings!
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                >
                  Shop Now
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-colors"
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <div className="bg-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="p-6 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <div className="text-4xl font-bold text-purple-600 mb-2">50%+</div>
                <div className="text-gray-600">Average Savings</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="p-6 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <div className="text-4xl font-bold text-purple-600 mb-2">24/7</div>
                <div className="text-gray-600">Customer Support</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="p-6 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <div className="text-4xl font-bold text-purple-600 mb-2">100%</div>
                <div className="text-gray-600">Satisfaction Guaranteed</div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Deals Section */}
        <div className="container mx-auto px-4 py-8">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800"
          >
            Special Deals & Offers
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {deals.map((deal) => (
                <motion.div
                  key={deal.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ 
                    scale: 1.03,
                    transition: { duration: 0.2 }
                  }}
                  onHoverStart={() => setHoveredCard(deal.id)}
                  onHoverEnd={() => setHoveredCard(null)}
                  className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300"
                >
                  <div className="relative h-64 overflow-hidden">
                    <motion.img
                      src={deal.image}
                      alt={deal.title}
                      className="w-full h-full object-contain bg-gray-50"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold"
                    >
                      {Math.round(((deal.originalPrice - deal.discountedPrice) / deal.originalPrice) * 100)}% OFF
                    </motion.div>
                  </div>
                  
                  <div className="p-6">
                    <h2 className="text-xl font-semibold mb-2 text-gray-800 line-clamp-2">{deal.title}</h2>
                    <p className="text-gray-600 mb-4 line-clamp-2">{deal.description}</p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <span className="text-gray-500 line-through">${deal.originalPrice}</span>
                        <span className="text-2xl font-bold text-green-600 ml-2">${deal.discountedPrice}</span>
                      </div>
                    </div>

                    <div className="text-sm text-gray-500 mb-4">
                      Offer ends: {new Date(deal.endDate).toLocaleDateString()}
                    </div>

                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                    >
                      Get This Deal
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center p-6"
              >
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaTruck className="text-2xl text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Free Shipping</h3>
                <p className="text-gray-600">Free shipping on all orders over $100</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-center p-6"
              >
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaShieldAlt className="text-2xl text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Secure Payment</h3>
                <p className="text-gray-600">100% secure payment processing</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-center p-6"
              >
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaUndo className="text-2xl text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Easy Returns</h3>
                <p className="text-gray-600">30-day money back guarantee</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="text-center p-6"
              >
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaHeadset className="text-2xl text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
                <p className="text-gray-600">Dedicated support team</p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center text-white">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-bold mb-4"
              >
                Stay Updated with Latest Deals
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="mb-8"
              >
                Subscribe to our newsletter and never miss out on exclusive offers and gaming gear deals
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto"
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-3 rounded-full text-gray-900 focus:outline-none"
                />
                <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                  Subscribe
                </button>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="bg-white py-16">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-center mb-12"
            >
              What Our Customers Say
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "John D.",
                  role: "Professional Gamer",
                  text: "Amazing deals on gaming gear! The quality is outstanding and the prices are unbeatable.",
                  rating: 5
                },
                {
                  name: "Sarah M.",
                  role: "Streamer",
                  text: "Best place to get gaming equipment. Fast shipping and great customer service!",
                  rating: 5
                },
                {
                  name: "Mike R.",
                  role: "PC Builder",
                  text: "Found everything I needed for my new gaming setup. The discounts are incredible!",
                  rating: 5
                }
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-gray-50 p-6 rounded-lg"
                >
                  <div className="flex items-center mb-4">
                    <div className="text-yellow-400 flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{testimonial.text}</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer isVisible={isVisible} />
    </>
  );
};

export default DealsPage; 
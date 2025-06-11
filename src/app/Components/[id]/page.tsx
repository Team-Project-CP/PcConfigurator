"use client";

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { FaArrowLeft, FaShoppingCart, FaHeart, FaBalanceScale, FaQuestionCircle } from 'react-icons/fa';
import { components } from '@/lib/data/components';
import PaymentModal from '@/app/Components/PaymentModal';

// Component interface for type safety
interface ComponentSpec {
  id: number;
  category: string;
  name: string;
  price: number;
  image: string;
  description: string;
  specs: string[];
  detailedSpecs: {
    [key: string]: {
      value: string | number | boolean;
      score: number; // Higher score = better spec
      unit?: string;
      description?: string;
    };
  };
  compatibility: {
    socket?: string;
    chipset?: string[];
    ramType?: string;
    formFactor?: string;
    tdp?: number;
  };
}

export default function ComponentDetail() {
  const params = useParams();
  const [component, setComponent] = useState<ComponentSpec | null>(null);
  const [recommendations, setRecommendations] = useState<ComponentSpec[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isComparing, setIsComparing] = useState(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace with real API calls in production
        const componentData = components.find(c => c.id === Number(params.id));
        setComponent(componentData || null);
        
        // Mock recommendations based on compatibility
        const recommendedData = components.filter(c => {
          if (componentData?.category === 'CPU' && c.category === 'Motherboard') {
            return c.compatibility.socket === componentData.compatibility.socket;
          }
          return false;
        });
        setRecommendations(recommendedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [params.id]);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const toggleCompare = () => {
    setIsComparing(!isComparing);
  };

  const toggleTooltip = (key: string) => {
    setActiveTooltip(activeTooltip === key ? null : key);
  };

  if (loading || !component) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation */}
      <nav className="bg-black text-white px-8 py-4">
        <Link href="/Components" className="flex items-center gap-2 text-gray-400 hover:text-white w-fit">
          <FaArrowLeft />
          Back to Components
        </Link>
      </nav>

      {/* Product Details */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column - Image */}
            <div className="aspect-square w-full overflow-hidden">
              <img
                src={component.image}
                alt={component.name}
                className="w-full h-full object-contain p-4"
              />
            </div>

            {/* Right Column - Details */}
            <div>
              <div className="mb-4">
                <span className="inline-block bg-purple-600 text-white px-3 py-1 rounded text-sm">
                  {component.category}
                </span>
              </div>
              <h1 className="text-3xl font-bold mb-4">{component.name}</h1>
              <p className="text-gray-600 mb-6">{component.description}</p>

              {/* Price and Actions */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
                <span className="text-4xl font-bold text-purple-600">
                  ${component.price}
                </span>
                <div className="flex gap-4 w-full sm:w-auto">
                  <button 
                    onClick={toggleFavorite}
                    className={`p-2 rounded flex-1 sm:flex-none ${isFavorite ? 'bg-red-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
                    aria-label={isFavorite ? "Удалить из избранного" : "Добавить в избранное"}
                  >
                    <FaHeart className={`${isFavorite ? 'text-white' : 'text-gray-600'}`} size={20} />
                  </button>
                  <button 
                    onClick={toggleCompare}
                    className={`p-2 rounded flex-1 sm:flex-none ${isComparing ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
                    aria-label={isComparing ? "Удалить из сравнения" : "Добавить к сравнению"}
                  >
                    <FaBalanceScale className={`${isComparing ? 'text-white' : 'text-gray-600'}`} size={20} />
                  </button>
                  <button 
                    onClick={() => setIsPaymentModalOpen(true)}
                    className="flex items-center justify-center gap-2 bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 flex-1 sm:flex-none"
                    aria-label="Add to cart"
                  >
                    <FaShoppingCart />
                    <span className="hidden sm:inline">Add to Cart</span>
                    <span className="sm:hidden">Buy Now</span>
                  </button>
                </div>
              </div>

              {/* Detailed Specifications */}
              <div className="border-t pt-6">
                <h2 className="text-xl font-semibold mb-4">Specifications</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {Object.entries(component.detailedSpecs).map(([key, spec]) => (
                    <div key={key} className="flex flex-col sm:flex-row sm:items-center justify-between p-3 bg-gray-800 rounded-lg gap-2">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-gray-400 min-w-[120px]">{key}</span>
                        {spec.description && (
                          <div className="relative">
                            <button 
                              onClick={() => toggleTooltip(key)}
                              className="text-gray-400 hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-full p-1"
                              aria-label="Show description"
                            >
                              <FaQuestionCircle className="w-4 h-4" />
                            </button>
                            {(activeTooltip === key || window.matchMedia('(hover: hover)').matches) && (
                              <div className={`absolute left-0 ${window.matchMedia('(hover: hover)').matches ? 'bottom-full mb-2 hidden group-hover:block' : 'top-full mt-2'} z-50`}>
                                <div className="bg-white text-gray-900 p-4 rounded-lg shadow-lg max-w-xs">
                                  <div className="text-sm">{spec.description}</div>
                                </div>
                              </div>
                            )}
                          </div>
                        )}
                        <span className="text-white break-words">
                          {typeof spec.value === 'boolean' 
                            ? spec.value ? 'Yes' : 'No'
                            : spec.value}{spec.unit ? ` ${spec.unit}` : ''}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 min-w-[140px]">
                        <div className="w-20 sm:w-24 h-2 bg-gray-700 rounded-full flex-shrink-0">
                          <div 
                            className="h-full rounded-full"
                            style={{ 
                              width: `${spec.score}%`,
                              backgroundColor: spec.score >= 90 ? '#10B981' : 
                                            spec.score >= 80 ? '#3B82F6' : 
                                            spec.score >= 70 ? '#F59E0B' : '#EF4444'
                            }}
                          />
                        </div>
                        <span className="text-sm text-gray-400 whitespace-nowrap">{spec.score}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Compatibility Information */}
              <div className="border-t pt-6 mt-6">
                <h2 className="text-xl font-semibold mb-4">Compatibility</h2>
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(component.compatibility).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-2 border-b">
                      <span className="text-gray-600">{key}:</span>
                      <span className="font-medium">
                        {Array.isArray(value) ? value.join(', ') : value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recommended Components */}
        {recommendations.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Recommended Compatible Components</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {recommendations.map(rec => (
                <Link
                  key={rec.id}
                  href={`/Components/${rec.id}`}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative">
                    <div className="aspect-square w-full overflow-hidden">
                      <img
                        src={rec.image}
                        alt={rec.name}
                        className="w-full h-full object-contain p-4"
                      />
                    </div>
                    <div className="absolute top-2 right-2 bg-purple-600 text-white px-2 py-1 rounded">
                      {rec.category}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">{rec.name}</h3>
                    <p className="text-gray-600 mb-4">{rec.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-purple-600">
                        ${rec.price}
                      </span>
                      <span className="text-sm text-green-600">Compatible</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Payment Modal */}
        {component && (
          <PaymentModal
            isOpen={isPaymentModalOpen}
            onClose={() => setIsPaymentModalOpen(false)}
            amount={component.price}
            componentName={component.name}
          />
        )}
      </div>
    </div>
  );
} 
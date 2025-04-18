"use client";

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { FaArrowLeft, FaShoppingCart, FaHeart, FaBalanceScale } from 'react-icons/fa';

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
      value: string | number;
      score: number;
      unit?: string;
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        // These would be actual API calls in production
        const componentData = await fetch(`/api/components/${params.id}`).then(res => res.json());
        setComponent(componentData);
        
        const recommendedData = await fetch(`/api/components/${params.id}/recommendations`).then(res => res.json());
        setRecommendations(recommendedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [params.id]);

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
            <div>
              <img
                src={component.image}
                alt={component.name}
                className="w-full rounded-lg"
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
              <div className="flex items-center justify-between mb-8">
                <span className="text-4xl font-bold text-purple-600">
                  ${component.price}
                </span>
                <div className="flex gap-4">
                  <button className="p-2 rounded bg-gray-200 hover:bg-gray-300">
                    <FaHeart className="text-gray-600" size={20} />
                  </button>
                  <button className="p-2 rounded bg-gray-200 hover:bg-gray-300">
                    <FaBalanceScale className="text-gray-600" size={20} />
                  </button>
                  <button className="flex items-center gap-2 bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700">
                    <FaShoppingCart />
                    Add to Cart
                  </button>
                </div>
              </div>

              {/* Detailed Specifications */}
              <div className="border-t pt-6">
                <h2 className="text-xl font-semibold mb-4">Specifications</h2>
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(component.detailedSpecs).map(([key, spec]) => (
                    <div key={key} className="flex justify-between py-2 border-b">
                      <span className="text-gray-600">{key}:</span>
                      <span className="font-medium">
                        {spec.value}
                        {spec.unit}
                      </span>
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
                    <img
                      src={rec.image}
                      alt={rec.name}
                      className="w-full h-48 object-cover"
                    />
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
      </div>
    </div>
  );
} 
"use client";

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { FaArrowLeft, FaShoppingCart, FaHeart, FaBalanceScale } from 'react-icons/fa';
import { monitors } from '@/lib/data/monitors';
import PaymentModal from '@/app/Components/PaymentModal';

interface Monitor {
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
      score: number;
      unit?: string;
    };
  };
  compatibility: {
    input?: string;
    size?: string;
  };
}

export default function MonitorDetail() {
  const params = useParams();
  const [monitor, setMonitor] = useState<Monitor | null>(null);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  useEffect(() => {
    const monitorId = parseInt(params.id as string);
    const foundMonitor = monitors.find(m => m.id === monitorId);
    if (foundMonitor) {
      setMonitor(foundMonitor);
    }
  }, [params.id]);

  if (!monitor) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Monitor not found</h1>
          <Link
            href="/Monitors"
            className="text-purple-600 hover:text-purple-700"
          >
            Return to Monitors
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <Link
          href="/Monitors"
          className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-8"
        >
          <FaArrowLeft className="mr-2" />
          Back to Monitors
        </Link>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
            <div className="aspect-square bg-gray-50 rounded-lg overflow-hidden">
              <img
                src={monitor.image}
                alt={monitor.name}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{monitor.name}</h1>
                <p className="text-lg text-gray-500 mt-2">{monitor.category}</p>
              </div>

              <div className="space-y-4">
                <p className="text-gray-600">{monitor.description}</p>
                <div>
                  <h3 className="font-semibold mb-2">Specifications:</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    {monitor.specs.map((spec, index) => (
                      <li key={index}>{spec}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-4 border-t">
                  <span className="text-2xl md:text-3xl font-bold text-purple-600">
                    ${monitor.price}
                  </span>
                  <button
                    onClick={() => setIsPaymentModalOpen(true)}
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700"
                  >
                    <FaShoppingCart className="mr-2" />
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Modal */}
        <PaymentModal
          isOpen={isPaymentModalOpen}
          onClose={() => setIsPaymentModalOpen(false)}
          amount={monitor.price}
          componentName={monitor.name}
        />
      </div>
    </div>
  );
}

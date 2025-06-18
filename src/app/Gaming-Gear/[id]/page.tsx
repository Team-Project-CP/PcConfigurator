"use client";

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { FaArrowLeft, FaShoppingCart } from 'react-icons/fa';
import PaymentModal from '@/app/Components/PaymentModal';

interface GamingGear {
  id: number;
  name: string;
  price: string;
  description: string;
  image: string;
  category: string;
}

export default function GamingGearDetail() {
  const params = useParams();
  const [gear, setGear] = useState<GamingGear | null>(null);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  useEffect(() => {
    // Здесь должна быть загрузка данных об игровом оборудовании
    // Временные данные для примера
    setGear({
      id: 1,
      name: "Canvas 27 FHD 165Hz + Monitor Arm - Single",
      price: "239.99",
      description: "Bundle Canvas 27 FHD 165Hz and Monitor Arm",
      image: "/Gaming-Gear/OneMonitorArm.png",
      category: "Monitor Bundles"
    });
  }, [params.id]);

  if (!gear) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Gaming Gear not found</h1>
          <Link
            href="/Gaming-Gear"
            className="text-purple-600 hover:text-purple-700"
          >
            Return to Gaming Gear
          </Link>
        </div>
      </div>
    );
  }

  const price = parseFloat(gear.price.replace(/[^0-9.]/g, ''));

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <Link
          href="/Gaming-Gear"
          className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-8"
        >
          <FaArrowLeft className="mr-2" />
          Back to Gaming Gear
        </Link>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
            <div className="aspect-square bg-gray-50 rounded-lg overflow-hidden">
              <img
                src={gear.image}
                alt={gear.name}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{gear.name}</h1>
                <p className="text-lg text-gray-500 mt-2">{gear.category}</p>
              </div>

              <div className="space-y-4">
                <p className="text-gray-600">{gear.description}</p>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-4 border-t">
                  <span className="text-2xl md:text-3xl font-bold text-purple-600">
                    ${gear.price}
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
          amount={price}
          componentName={gear.name}
        />
      </div>
    </div>
  );
} 
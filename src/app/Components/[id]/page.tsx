"use client";

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { FaArrowLeft, FaShoppingCart, FaHeart, FaBalanceScale, FaQuestionCircle } from 'react-icons/fa';
import { components } from '@/lib/data/components';
import PaymentModal from '@/app/Components/PaymentModal';
import { doc, getDoc } from "firebase/firestore";
import { firestore } from "@/lib/firebase/init";
import Header from "../../Header";
import Footer from "../../Footer";

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

export default function ComponentDetails() {
  const { id } = useParams();
  const [component, setComponent] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [recommendations, setRecommendations] = useState<ComponentSpec[]>([]);
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isComparing, setIsComparing] = useState(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  useEffect(() => {
    if (!id) return;
    const fetchComponent = async () => {
      const docRef = doc(firestore, "Components", id as string);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setComponent({ id: docSnap.id, ...docSnap.data() });
      }
      setLoading(false);
    };
    fetchComponent();
  }, [id]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Mock recommendations based on compatibility
        const recommendedData = components.filter(c => {
          if (component?.category === 'CPU' && c.category === 'Motherboard') {
            return c.compatibility.socket === component.compatibility.socket;
          }
          return false;
        });
        setRecommendations(recommendedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [component]);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const toggleCompare = () => {
    setIsComparing(!isComparing);
  };

  const toggleTooltip = (key: string) => {
    setActiveTooltip(activeTooltip === key ? null : key);
  };

  if (loading) return <div className="p-8 text-center">Loading...</div>;
  if (!component) return <div className="p-8 text-center">Component not found</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-purple-100">
      <Header />
      <div className="container mx-auto px-4 py-12 flex justify-center">
        <div className="bg-white rounded-2xl shadow-2xl p-8 flex flex-col md:flex-row gap-10 w-full max-w-4xl">
          <img
            src={component.image}
            alt={component.name}
            className="w-64 h-64 object-contain rounded-xl border shadow-md bg-gray-50"
          />
          <div className="flex-1 flex flex-col">
            <h1 className="text-3xl font-bold mb-2">{component.name}</h1>
            <p className="text-gray-500 mb-4">{component.description}</p>
            <div className="mb-6">
              <span className="text-2xl font-bold text-purple-600">${component.price}</span>
            </div>
            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-2">Specifications</h2>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                {component.specs?.map((spec, idx) => (
                  <li key={idx}>{spec}</li>
                ))}
              </ul>
            </div>
            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-2">Detailed Specs</h2>
              <table className="w-full text-sm border rounded-lg overflow-hidden">
                <tbody>
                  {component.detailedSpecs &&
                    Object.entries(component.detailedSpecs).map(([key, value]) => (
                      <tr key={key} className="border-b last:border-b-0">
                        <td className="py-2 px-3 font-medium text-gray-600">{key}</td>
                        <td className="py-2 px-3 text-right">{value.value} {value.unit || ""}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-2">Compatibility</h2>
              <ul className="text-gray-700">
                {component.compatibility &&
                  Object.entries(component.compatibility).map(([key, value]) => (
                    <li key={key}>
                      <span className="font-medium">{key}:</span> {Array.isArray(value) ? value.join(", ") : value}
                    </li>
                  ))}
              </ul>
            </div>
            <button className="mt-8 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg shadow transition">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <Footer isVisible={true} />
    </div>
  );
} 
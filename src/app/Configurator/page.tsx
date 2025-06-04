"use client";
import { useState, useEffect } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { FaDesktop, FaMemory, FaHdd, FaMicrochip } from "react-icons/fa";
import PCViewer from "./PCViewer";

interface Component {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface SelectedComponents {
  cpu: Component | null;
  gpu: Component | null;
  ram: Component | null;
  storage: Component | null;
  motherboard: Component | null;
  case: Component | null;
}

export default function Configurator() {
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedComponents, setSelectedComponents] = useState<SelectedComponents>({
    cpu: null,
    gpu: null,
    ram: null,
    storage: null,
    motherboard: null,
    case: null
  });

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setIsVisible(true);
    }, 1000);
  }, []);

  const components = {
    cpu: [
      { id: 1, name: "Intel Core i9-13900K", price: 589.99, image: "/cpu1.png" },
      { id: 2, name: "AMD Ryzen 9 7950X", price: 699.99, image: "/cpu2.png" },
      { id: 3, name: "Intel Core i7-13700K", price: 399.99, image: "/cpu3.png" }
    ] as Component[],
    gpu: [
      { id: 1, name: "NVIDIA RTX 4090", price: 1599.99, image: "/gpu1.png" },
      { id: 2, name: "AMD Radeon RX 7900 XTX", price: 999.99, image: "/gpu2.png" },
      { id: 3, name: "NVIDIA RTX 4080", price: 1199.99, image: "/gpu3.png" }
    ] as Component[],
    ram: [
      { id: 1, name: "Corsair Dominator 32GB", price: 199.99, image: "/ram1.png" },
      { id: 2, name: "G.Skill Trident Z 64GB", price: 299.99, image: "/ram2.png" },
      { id: 3, name: "Crucial Ballistix 16GB", price: 89.99, image: "/ram3.png" }
    ] as Component[]
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Header />
      
      <div className={`container mx-auto px-4 py-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text">
          PC Configurator
        </h1>
        
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* 3D Preview */}
          <div className="xl:col-span-2 bg-white rounded-xl shadow-xl p-6 transform hover:scale-[1.02] transition-transform duration-300">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">3D Preview</h2>
            <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg overflow-hidden shadow-inner">
              <PCViewer selectedComponents={selectedComponents} />
            </div>
          </div>

          {/* Component Selection */}
          <div className="bg-white rounded-xl shadow-xl p-6 transform hover:scale-[1.02] transition-transform duration-300">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Component Selection</h2>
            
            {/* CPU Selection */}
            <div className="mb-8">
              <div className="flex items-center mb-3">
                <FaMicrochip className="text-purple-600 mr-2 text-xl" />
                <h3 className="text-xl font-semibold text-gray-800">CPU</h3>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {components.cpu.map((cpu) => (
                  <div
                    key={cpu.id}
                    className={`border-2 rounded-lg p-4 cursor-pointer transition-all duration-300 transform hover:scale-[1.02] ${
                      selectedComponents.cpu?.id === cpu.id
                        ? 'border-purple-600 bg-purple-50 shadow-md'
                        : 'border-gray-200 hover:border-purple-400'
                    }`}
                    onClick={() => setSelectedComponents({...selectedComponents, cpu})}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-gray-800">{cpu.name}</h4>
                        <p className="text-gray-600">${cpu.price}</p>
                      </div>
                      <img src={cpu.image} alt={cpu.name} className="w-16 h-16 object-contain" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* GPU Selection */}
            <div className="mb-8">
              <div className="flex items-center mb-3">
                <FaDesktop className="text-purple-600 mr-2 text-xl" />
                <h3 className="text-xl font-semibold text-gray-800">GPU</h3>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {components.gpu.map((gpu) => (
                  <div
                    key={gpu.id}
                    className={`border-2 rounded-lg p-4 cursor-pointer transition-all duration-300 transform hover:scale-[1.02] ${
                      selectedComponents.gpu?.id === gpu.id
                        ? 'border-purple-600 bg-purple-50 shadow-md'
                        : 'border-gray-200 hover:border-purple-400'
                    }`}
                    onClick={() => setSelectedComponents({...selectedComponents, gpu})}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-gray-800">{gpu.name}</h4>
                        <p className="text-gray-600">${gpu.price}</p>
                      </div>
                      <img src={gpu.image} alt={gpu.name} className="w-16 h-16 object-contain" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RAM Selection */}
            <div className="mb-8">
              <div className="flex items-center mb-3">
                <FaMemory className="text-purple-600 mr-2 text-xl" />
                <h3 className="text-xl font-semibold text-gray-800">RAM</h3>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {components.ram.map((ram) => (
                  <div
                    key={ram.id}
                    className={`border-2 rounded-lg p-4 cursor-pointer transition-all duration-300 transform hover:scale-[1.02] ${
                      selectedComponents.ram?.id === ram.id
                        ? 'border-purple-600 bg-purple-50 shadow-md'
                        : 'border-gray-200 hover:border-purple-400'
                    }`}
                    onClick={() => setSelectedComponents({...selectedComponents, ram})}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-gray-800">{ram.name}</h4>
                        <p className="text-gray-600">${ram.price}</p>
                      </div>
                      <img src={ram.image} alt={ram.name} className="w-16 h-16 object-contain" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="mt-8 bg-white rounded-xl shadow-xl p-6 transform hover:scale-[1.02] transition-transform duration-300">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Summary</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Selected Components:</h3>
              <ul className="space-y-3">
                {Object.entries(selectedComponents).map(([key, component]) => (
                  component && (
                    <li key={key} className="flex justify-between items-center bg-gray-50 p-3 rounded-lg">
                      <span className="capitalize text-gray-700">{key}:</span>
                      <span className="text-gray-800 font-medium">{component.name} - ${component.price}</span>
                    </li>
                  )
                ))}
              </ul>
            </div>
            <div className="flex flex-col items-end justify-center">
              <p className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text">
                Total: $
                {Object.values(selectedComponents)
                  .filter((component): component is Component => component !== null)
                  .reduce((sum, component) => sum + component.price, 0)
                  .toFixed(2)}
              </p>
              <button className="mt-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Save Configuration
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer isVisible={isVisible} />
    </div>
  );
} 
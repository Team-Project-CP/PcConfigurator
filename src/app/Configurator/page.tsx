"use client";
import { useState, useEffect } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { FaDesktop, FaMemory, FaHdd, FaMicrochip, FaServer, FaFan, FaPowerOff } from "react-icons/fa";
import PCViewer from "./PCViewer";

interface Component {
  id: number;
  name: string;
  price: number;
  image: string;
  description?: string;
}

interface SelectedComponents {
  cpu: Component | null;
  gpu: Component | null;
  ram: Component | null;
  storage: Component | null;
  motherboard: Component | null;
  case: Component | null;
  cooling: Component | null;
  psu: Component | null;
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
    case: null,
    cooling: null,
    psu: null
  });

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setIsVisible(true);
    }, 1000);
  }, []);

  const components = {
    cpu: [
      { 
        id: 1, 
        name: "Intel Core i9-13900K", 
        price: 589.99, 
        image: "https://m.media-amazon.com/images/I/51OrTOYrXtL.jpg",
        description: "24 cores, 32 threads, up to 5.8 GHz"
      },
      { 
        id: 2, 
        name: "AMD Ryzen 9 7950X", 
        price: 699.99, 
        image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2023/1/pr_2023_1_25_12_54_39_334_03.jpg",
        description: "16 cores, 32 threads, up to 5.7 GHz"
      },
      { 
        id: 3, 
        name: "Intel Core i7-13700K", 
        price: 399.99, 
        image: "https://m.media-amazon.com/images/I/61VbK4JqFBL._AC_SL1500_.jpg",
        description: "16 cores, 24 threads, up to 5.4 GHz"
      }
    ] as Component[],
    gpu: [
      { 
        id: 1, 
        name: "NVIDIA RTX 4090", 
        price: 1599.99, 
        image: "https://m.media-amazon.com/images/I/51c1zFDNVmL.jpg",
        description: "24GB GDDR6X, 450W TDP"
      },
      { 
        id: 2, 
        name: "AMD Radeon RX 7900 XTX", 
        price: 999.99, 
        image: "https://imagedelivery.net/g48cOmePXkt3VrLWURlstg/79cb5cfb-5de0-487c-b78a-4d89b123f100/public",
        description: "24GB GDDR6, 355W TDP"
      },
      { 
        id: 3, 
        name: "NVIDIA RTX 4080", 
        price: 1199.99, 
        image: "https://cdn.benchmark.pl/uploads/products/15247/nvidia-geforce-rtx-4080-fe.jpg",
        description: "16GB GDDR6X, 320W TDP"
      }
    ] as Component[],
    ram: [
      { 
        id: 1, 
        name: "Corsair Dominator 32GB", 
        price: 199.99, 
        image: "https://image.ceneostatic.pl/data/products/148493357/p-pamiec-ram-corsair-dominator-rgb-ddr5-32gb-6000mhz-cl36-cmt32gx5m2d6000z36.jpg",
        description: "DDR5 6000MHz, CL36"
      },
      { 
        id: 2, 
        name: "G.Skill Trident Z 64GB", 
        price: 299.99, 
        image: "https://m.media-amazon.com/images/I/61WZdLnrPkL._AC_UF1000,1000_QL80_.jpg",
        description: "DDR5 6400MHz, CL32"
      },
      { 
        id: 3, 
        name: "Crucial Ballistix 16GB", 
        price: 89.99, 
        image: "https://kozak.pl/userdata/public/gfx/1613/Pamiec-RAM-DDR4-Crucial-Ballistix-16GB.jpg",
        description: "DDR4 3600MHz, CL16"
      }
    ] as Component[],
    storage: [
      {
        id: 1,
        name: "Samsung 990 Pro 2TB",
        price: 249.99,
        image: "https://allegro.stati.pl/AllegroIMG/PRODUCENCI/SAMSUNG/990-PRO/MZ-V9P2T0BW/samsung-dysk-ssd-m2-990-pro-2tb-widok-przod-bok-01.jpg",
        description: "PCIe 4.0 NVMe, 7450MB/s read"
      },
      {
        id: 2,
        name: "WD Black SN850X 1TB",
        price: 149.99,
        image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2022/9/pr_2022_9_15_7_46_28_479_03.jpg",
        description: "PCIe 4.0 NVMe, 7300MB/s read"
      }
    ] as Component[],
    motherboard: [
      {
        id: 1,
        name: "ASUS ROG Maximus Z790",
        price: 499.99,
        image: "https://www.pcomp3000.pl/images/products/2005108/b0bbb7cbaa215a8e3484a064d0990318.jpg",
        description: "Intel Z790, DDR5, PCIe 5.0"
      },
      {
        id: 2,
        name: "MSI MEG X670E ACE",
        price: 449.99,
        image: "https://storage-asset.msi.com/global/picture/image/feature/mb/X670/meg/MEG-X670E-ACE/meg-kv.png",
        description: "AMD X670E, DDR5, PCIe 5.0"
      }
    ] as Component[],
    case: [
      {
        id: 1,
        name: "Lian Li O11 Dynamic EVO",
        price: 169.99,
        image: "https://proline.pl/imgart/o11dexl-w-8.jpg",
        description: "Mid Tower, Tempered Glass"
      },
      {
        id: 2,
        name: "Fractal Design Meshify 2",
        price: 149.99,
        image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2022/7/pr_2022_7_1_13_20_19_344_00.jpg",
        description: "Full Tower, Mesh Front"
      }
    ] as Component[],
    cooling: [
      {
        id: 1,
        name: "NZXT Kraken X73",
        price: 199.99,
        image: "https://a.allegroimg.com/original/1149db/ef7a6d9b4f19b409d1a76dbff5d2/CHLODZENIE-WODNE-NZXT-KRAKEN-X73-RGB-3x120mm",
        description: "360mm AIO Liquid Cooler"
      },
      {
        id: 2,
        name: "Noctua NH-D15",
        price: 99.99,
        image: "https://image.ceneostatic.pl/data/products/30690095/i-noctua-nh-d15.jpg",
        description: "Dual Tower Air Cooler"
      }
    ] as Component[],
    psu: [
      {
        id: 1,
        name: "Corsair HX1200",
        price: 249.99,
        image: "https://assets.corsair.com/image/upload/f_auto,q_auto/content/CP-9020140-EU-HX1200-01.png",
        description: "1200W, 80+ Platinum"
      },
      {
        id: 2,
        name: "Seasonic PRIME TX-1000",
        price: 199.99,
        image: "https://sklep.hard-pc.pl/galerie/z/zasilacz-seasonic-prime-tx-10_41089.webp",
        description: "1000W, 80+ Titanium"
      }
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
          <div className="xl:col-span-1 bg-white rounded-xl shadow-xl p-6 transform hover:scale-[1.02] transition-transform duration-300">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">3D Preview</h2>
            <div className="h-[600px] bg-gray-100 rounded-lg overflow-hidden shadow-inner">
              <PCViewer selectedComponents={selectedComponents} />
            </div>
          </div>

          {/* Component Selection */}
          <div className="xl:col-span-2 bg-white rounded-xl shadow-xl p-6 transform hover:scale-[1.02] transition-transform duration-300">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Component Selection</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* CPU Selection */}
              <div className="mb-6">
                <div className="flex items-center mb-3">
                  <FaMicrochip className="text-purple-600 mr-2 text-xl" />
                  <h3 className="text-xl font-semibold text-gray-800">CPU</h3>
                </div>
                <div className="space-y-4">
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
                          <p className="text-sm text-gray-500 mt-1">{cpu.description}</p>
                        </div>
                        <img src={cpu.image} alt={cpu.name} className="w-16 h-16 object-contain" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* GPU Selection */}
              <div className="mb-6">
                <div className="flex items-center mb-3">
                  <FaDesktop className="text-purple-600 mr-2 text-xl" />
                  <h3 className="text-xl font-semibold text-gray-800">GPU</h3>
                </div>
                <div className="space-y-4">
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
                          <p className="text-sm text-gray-500 mt-1">{gpu.description}</p>
                        </div>
                        <img src={gpu.image} alt={gpu.name} className="w-16 h-16 object-contain" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* RAM Selection */}
              <div className="mb-6">
                <div className="flex items-center mb-3">
                  <FaMemory className="text-purple-600 mr-2 text-xl" />
                  <h3 className="text-xl font-semibold text-gray-800">RAM</h3>
                </div>
                <div className="space-y-4">
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
                          <p className="text-sm text-gray-500 mt-1">{ram.description}</p>
                        </div>
                        <img src={ram.image} alt={ram.name} className="w-16 h-16 object-contain" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Storage Selection */}
              <div className="mb-6">
                <div className="flex items-center mb-3">
                  <FaHdd className="text-purple-600 mr-2 text-xl" />
                  <h3 className="text-xl font-semibold text-gray-800">Storage</h3>
                </div>
                <div className="space-y-4">
                  {components.storage.map((storage) => (
                    <div
                      key={storage.id}
                      className={`border-2 rounded-lg p-4 cursor-pointer transition-all duration-300 transform hover:scale-[1.02] ${
                        selectedComponents.storage?.id === storage.id
                          ? 'border-purple-600 bg-purple-50 shadow-md'
                          : 'border-gray-200 hover:border-purple-400'
                      }`}
                      onClick={() => setSelectedComponents({...selectedComponents, storage})}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-gray-800">{storage.name}</h4>
                          <p className="text-gray-600">${storage.price}</p>
                          <p className="text-sm text-gray-500 mt-1">{storage.description}</p>
                        </div>
                        <img src={storage.image} alt={storage.name} className="w-16 h-16 object-contain" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Motherboard Selection */}
              <div className="mb-6">
                <div className="flex items-center mb-3">
                  <FaServer className="text-purple-600 mr-2 text-xl" />
                  <h3 className="text-xl font-semibold text-gray-800">Motherboard</h3>
                </div>
                <div className="space-y-4">
                  {components.motherboard.map((motherboard) => (
                    <div
                      key={motherboard.id}
                      className={`border-2 rounded-lg p-4 cursor-pointer transition-all duration-300 transform hover:scale-[1.02] ${
                        selectedComponents.motherboard?.id === motherboard.id
                          ? 'border-purple-600 bg-purple-50 shadow-md'
                          : 'border-gray-200 hover:border-purple-400'
                      }`}
                      onClick={() => setSelectedComponents({...selectedComponents, motherboard})}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-gray-800">{motherboard.name}</h4>
                          <p className="text-gray-600">${motherboard.price}</p>
                          <p className="text-sm text-gray-500 mt-1">{motherboard.description}</p>
                        </div>
                        <img src={motherboard.image} alt={motherboard.name} className="w-16 h-16 object-contain" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Case Selection */}
              <div className="mb-6">
                <div className="flex items-center mb-3">
                  <FaDesktop className="text-purple-600 mr-2 text-xl" />
                  <h3 className="text-xl font-semibold text-gray-800">Case</h3>
                </div>
                <div className="space-y-4">
                  {components.case.map((case_) => (
                    <div
                      key={case_.id}
                      className={`border-2 rounded-lg p-4 cursor-pointer transition-all duration-300 transform hover:scale-[1.02] ${
                        selectedComponents.case?.id === case_.id
                          ? 'border-purple-600 bg-purple-50 shadow-md'
                          : 'border-gray-200 hover:border-purple-400'
                      }`}
                      onClick={() => setSelectedComponents({...selectedComponents, case: case_})}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-gray-800">{case_.name}</h4>
                          <p className="text-gray-600">${case_.price}</p>
                          <p className="text-sm text-gray-500 mt-1">{case_.description}</p>
                        </div>
                        <img src={case_.image} alt={case_.name} className="w-16 h-16 object-contain" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cooling Selection */}
              <div className="mb-6">
                <div className="flex items-center mb-3">
                  <FaFan className="text-purple-600 mr-2 text-xl" />
                  <h3 className="text-xl font-semibold text-gray-800">Cooling</h3>
                </div>
                <div className="space-y-4">
                  {components.cooling.map((cooling) => (
                    <div
                      key={cooling.id}
                      className={`border-2 rounded-lg p-4 cursor-pointer transition-all duration-300 transform hover:scale-[1.02] ${
                        selectedComponents.cooling?.id === cooling.id
                          ? 'border-purple-600 bg-purple-50 shadow-md'
                          : 'border-gray-200 hover:border-purple-400'
                      }`}
                      onClick={() => setSelectedComponents({...selectedComponents, cooling})}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-gray-800">{cooling.name}</h4>
                          <p className="text-gray-600">${cooling.price}</p>
                          <p className="text-sm text-gray-500 mt-1">{cooling.description}</p>
                        </div>
                        <img src={cooling.image} alt={cooling.name} className="w-16 h-16 object-contain" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* PSU Selection */}
              <div className="mb-6">
                <div className="flex items-center mb-3">
                  <FaPowerOff className="text-purple-600 mr-2 text-xl" />
                  <h3 className="text-xl font-semibold text-gray-800">Power Supply</h3>
                </div>
                <div className="space-y-4">
                  {components.psu.map((psu) => (
                    <div
                      key={psu.id}
                      className={`border-2 rounded-lg p-4 cursor-pointer transition-all duration-300 transform hover:scale-[1.02] ${
                        selectedComponents.psu?.id === psu.id
                          ? 'border-purple-600 bg-purple-50 shadow-md'
                          : 'border-gray-200 hover:border-purple-400'
                      }`}
                      onClick={() => setSelectedComponents({...selectedComponents, psu})}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-gray-800">{psu.name}</h4>
                          <p className="text-gray-600">${psu.price}</p>
                          <p className="text-sm text-gray-500 mt-1">{psu.description}</p>
                        </div>
                        <img src={psu.image} alt={psu.name} className="w-16 h-16 object-contain" />
                      </div>
                    </div>
                  ))}
                </div>
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
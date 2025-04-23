"use client";
import { useState, useEffect } from "react";
import { FaSearch, FaQuestionCircle, FaUser, FaShoppingCart, FaFilter, FaSort, FaEye, FaBalanceScale, FaHeart, FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaTwitch, FaTiktok, FaDiscord } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import Link from 'next/link';
import { components } from '@/lib/data/components';

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

// Sort options for component list
interface SortOption {
  value: string;
  label: string;
}

// Mock API calls (replace with real API later)
const fetchComponents = async (filters: {
  category?: string;
  priceRange?: [number, number];
  search?: string;
}): Promise<ComponentSpec[]> => {
  return components as ComponentSpec[];
};

const fetchComponentById = async (id: number): Promise<ComponentSpec | null> => {
  return components.find((c: ComponentSpec) => c.id === id) || null;
};

const fetchRecommendations = async (component: ComponentSpec): Promise<ComponentSpec[]> => {
  return components.filter((c: ComponentSpec) => {
    if (component.category === 'CPU' && c.category === 'Motherboard') {
      return c.compatibility.socket === component.compatibility.socket;
    }
    return false;
  });
};

export default function Components() {
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 2000]);
  const [exactMinPrice, setExactMinPrice] = useState<string>('0');
  const [exactMaxPrice, setExactMaxPrice] = useState<string>('2000');
  const [showPriceInput, setShowPriceInput] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("featured");
  const [showQuickView, setShowQuickView] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState<ComponentSpec | null>(null);
  const [compareList, setCompareList] = useState<ComponentSpec[]>([]);
  const [showCompare, setShowCompare] = useState(false);
  const [wishlist, setWishlist] = useState<ComponentSpec[]>([]);
  const [recommendations, setRecommendations] = useState<ComponentSpec[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setIsVisible(true);
    }, 1000);
  }, []);

  const categories = ["all", "CPU", "GPU", "RAM", "Storage", "Motherboard", "PSU", "Cooling"];
  const sortOptions = [
    { value: "featured", label: "Featured" },
    { value: "price-asc", label: "Price: Low to High" },
    { value: "price-desc", label: "Price: High to Low" },
    { value: "name-asc", label: "Name: A to Z" },
    { value: "name-desc", label: "Name: Z to A" }
  ];

  const handleSort = (components: ComponentSpec[]): ComponentSpec[] => {
    switch (sortBy) {
      case "price-asc":
        return [...components].sort((a, b) => a.price - b.price);
      case "price-desc":
        return [...components].sort((a, b) => b.price - a.price);
      case "name-asc":
        return [...components].sort((a, b) => a.name.localeCompare(b.name));
      case "name-desc":
        return [...components].sort((a, b) => b.name.localeCompare(a.name));
      default:
        return components;
    }
  };

  const filteredComponents = handleSort(
    components.filter(component => {
      const matchesCategory = selectedCategory === "all" || component.category === selectedCategory;
      const matchesPrice = component.price >= priceRange[0] && component.price <= priceRange[1];
      const matchesSearch = component.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           component.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesPrice && matchesSearch;
    })
  );

  const toggleCompare = (component: ComponentSpec) => {
    if (compareList.find(item => item.id === component.id)) {
      setCompareList(compareList.filter(item => item.id !== component.id));
    } else if (compareList.length < 3) {
      setCompareList([...compareList, component]);
    }
  };

  const toggleWishlist = (component: ComponentSpec) => {
    if (wishlist.find(item => item.id === component.id)) {
      setWishlist(wishlist.filter(item => item.id !== component.id));
    } else {
      setWishlist([...wishlist, component]);
    }
  };

  const handleExactPriceSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const min = Math.max(0, parseInt(exactMinPrice) || 0);
    const max = Math.min(10000, parseInt(exactMaxPrice) || 2000);
    setPriceRange([min, max]);
    setShowPriceInput(false);
  };

  const handlePriceInputChange = (value: string, isMin: boolean) => {
    const numValue = parseInt(value) || 0;
    if (isMin) {
      setExactMinPrice(value);
      if (numValue > parseInt(exactMaxPrice)) {
        setExactMaxPrice(value);
      }
    } else {
      setExactMaxPrice(value);
      if (numValue < parseInt(exactMinPrice)) {
        setExactMinPrice(value);
      }
    }
  };

  // Function to determine which spec is better in comparison
  const getComparisonClass = (spec1: any, spec2: any) => {
    if (!spec1 || !spec2) return '';
    return spec1.score > spec2.score ? 'text-green-500 font-bold' : 
           spec1.score < spec2.score ? 'text-red-500' : 'text-gray-600';
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Banner */}
      <div className={`bg-purple-600 text-white text-center text-sm py-2 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
        Certified Refurbished Gaming PCs. <a href="#" className="underline">Shop now &gt;</a>
      </div>

      {/* Navigation */}
      <nav className={`text-white bg-black px-8 py-4 flex justify-center items-center transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
        <div className="flex items-center space-x-8">
          <span className="text-2xl font-bold">Domino</span>
          <div className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-gray-400">Deals</a>
            <a href="#" className="hover:text-gray-400">Gaming PCs</a>
            <a href="/Components" className="text-purple-500">Components</a>
            <a href="/Gaming-Gear" className="hover:text-gray-400">Gaming Gear</a>
            <a href="/Monitors" className="hover:text-gray-400">Monitors</a>
            <a href="/Software" className="hover:text-gray-400">Software</a>
            <a href="/Community" className="hover:text-gray-400">Community</a>
          </div>
        </div>

        <div className="flex space-x-6 ml-auto">
          <FaSearch className="text-xl hover:text-gray-400 cursor-pointer" />
          <FaQuestionCircle className="text-xl hover:text-gray-400 cursor-pointer" />
          <FaUser className="text-xl hover:text-gray-400 cursor-pointer" />
          <FaShoppingCart className="text-xl hover:text-gray-400 cursor-pointer" />
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">PC Components</h1>
          <p className="text-gray-600">Build your dream PC with our premium selection of components</p>
        </div>

        {/* Filters, Sort, and Search */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1">
            <div className="relative">
              <input
                type="text"
                placeholder="Search components..."
                className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <FaSearch className="absolute right-3 top-3 text-gray-400" />
            </div>
          </div>
          <div className="flex gap-4">
            <select
              className="px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>
            <select
              className="px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              {sortOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Price Range Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <label className="block text-sm font-medium text-gray-700">
              Price Range: ${priceRange[0]} - ${priceRange[1]}
            </label>
            <button
              onClick={() => setShowPriceInput(!showPriceInput)}
              className="text-purple-600 text-sm hover:text-purple-700"
            >
              {showPriceInput ? 'Use Slider' : 'Enter Exact Price'}
            </button>
          </div>
          
          {showPriceInput ? (
            <form onSubmit={handleExactPriceSubmit} className="flex gap-4 items-center">
              <div className="flex items-center gap-2">
                <span>$</span>
                <input
                  type="number"
                  min="0"
                  max="10000"
                  value={exactMinPrice}
                  onChange={(e) => handlePriceInputChange(e.target.value, true)}
                  className="w-24 px-2 py-1 border rounded"
                />
              </div>
              <span>-</span>
              <div className="flex items-center gap-2">
                <span>$</span>
                <input
                  type="number"
                  min="0"
                  max="10000"
                  value={exactMaxPrice}
                  onChange={(e) => handlePriceInputChange(e.target.value, false)}
                  className="w-24 px-2 py-1 border rounded"
                />
              </div>
              <button
                type="submit"
                className="bg-purple-600 text-white px-4 py-1 rounded hover:bg-purple-700"
              >
                Apply
              </button>
            </form>
          ) : (
            <div className="flex gap-4 items-center">
              <input
                type="range"
                min="0"
                max="2000"
                value={priceRange[0]}
                onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                className="w-full"
              />
              <input
                type="range"
                min="0"
                max="2000"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                className="w-full"
              />
            </div>
          )}
        </div>

        {/* Compare Bar */}
        {compareList.length > 0 && (
          <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg p-4 z-50">
            <div className="container mx-auto flex items-center justify-between">
              <div className="flex gap-4">
                {compareList.map(item => (
                  <div key={item.id} className="flex items-center gap-2">
                    <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded" />
                    <span>{item.name}</span>
                    <button onClick={() => toggleCompare(item)} className="text-gray-500 hover:text-gray-700">
                      <IoClose size={20} />
                    </button>
                  </div>
                ))}
              </div>
              <button
                onClick={() => setShowCompare(true)}
                className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
              >
                Compare ({compareList.length})
              </button>
            </div>
          </div>
        )}

        {/* Components Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredComponents.map(component => (
            <Link
              key={component.id}
              href={`/Components/${component.id}`}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative">
                <div className="aspect-square w-full overflow-hidden">
                  <img
                    src={component.image}
                    alt={component.name}
                    className="w-full h-full object-contain p-4"
                  />
                </div>
                <div className="absolute top-2 right-2 bg-purple-600 text-white px-2 py-1 rounded">
                  {component.category}
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{component.name}</h3>
                <p className="text-gray-600 mb-4">{component.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-purple-600">
                    ${component.price}
                  </span>
                  <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
                    View Details
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Quick View Modal */}
      {showQuickView && selectedComponent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full mx-4 p-6">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-bold">{selectedComponent.name}</h2>
              <button
                onClick={() => setShowQuickView(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <IoClose size={24} />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="aspect-square w-full overflow-hidden">
                <img
                  src={selectedComponent.image}
                  alt={selectedComponent.name}
                  className="w-full h-full object-contain p-4"
                />
              </div>
              <div>
                <p className="text-gray-600 mb-4">{selectedComponent.description}</p>
                <div className="mb-4">
                  <h3 className="font-semibold mb-2">Specifications:</h3>
                  <ul className="list-disc list-inside text-gray-600">
                    {selectedComponent.specs.map((spec, index) => (
                      <li key={index}>{spec}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-bold text-purple-600">
                    ${selectedComponent.price}
                  </span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => toggleWishlist(selectedComponent)}
                      className={`p-2 rounded ${
                        wishlist.find(item => item.id === selectedComponent.id)
                          ? "bg-red-500 text-white"
                          : "bg-gray-200 text-gray-600"
                      }`}
                    >
                      <FaHeart size={20} />
                    </button>
                    <button
                      onClick={() => toggleCompare(selectedComponent)}
                      className={`p-2 rounded ${
                        compareList.find(item => item.id === selectedComponent.id)
                          ? "bg-purple-600 text-white"
                          : "bg-gray-200 text-gray-600"
                      }`}
                    >
                      <FaBalanceScale size={20} />
                    </button>
                  </div>
                </div>
                <button className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Compare Modal with Enhanced Comparison */}
      {showCompare && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg max-w-6xl w-full mx-4 p-6">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-bold">Compare Components</h2>
              <button
                onClick={() => setShowCompare(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <IoClose size={24} />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {compareList.map(component => (
                <div key={component.id} className="border rounded-lg p-4">
                  <div className="aspect-square w-full overflow-hidden">
                    <img
                      src={component.image}
                      alt={component.name}
                      className="w-full h-full object-contain p-4"
                    />
                  </div>
                  <Link
                    href={`/Components/${component.id}`}
                    className="text-xl font-semibold mb-2 hover:text-purple-600 transition-colors"
                  >
                    {component.name}
                  </Link>
                  <p className="text-gray-600 mb-4">{component.description}</p>
                  
                  {/* Detailed Specifications Comparison */}
                  <div className="mb-4">
                    {Object.entries(component.detailedSpecs).map(([key, spec]) => {
                      const comparisonClass = getComparisonClass(
                        spec,
                        compareList.find(c => c.id !== component.id)?.detailedSpecs[key]
                      );
                      return (
                        <div key={key} className="flex justify-between py-1">
                          <span className="text-gray-600">{key}:</span>
                          <span className={comparisonClass}>
                            {spec.value}{spec.unit || ''}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                  
                  <div className="text-2xl font-bold text-purple-600 mb-4">
                    ${component.price}
                  </div>
                  <button className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700">
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Stay In Touch Section (Footer) */}
      <div className={`bg-gray-900 text-white py-12 transition-all duration-1000 delay-2600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Section: Heading, Description, Email Input, and Dropdowns */}
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

          {/* Checkbox Section */}
          <div className="flex items-center mb-8">
            <input type="checkbox" id="terms" className="mr-2" />
            <label htmlFor="terms" className="text-gray-400 text-sm">
              By signing up you agree to DOMINO{' '}
              <a href="#" className="underline">Privacy Policy</a> and{' '}
              <a href="#" className="underline">Terms & Conditions</a>
            </label>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mb-8">
            <a href="#" className="text-gray-400 hover:text-white"><FaFacebookF size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-white"><FaTwitter size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-white"><FaInstagram size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-white"><FaYoutube size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-white"><FaTwitch size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-white"><FaTiktok size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-white"><FaDiscord size={20} /></a>
          </div>

          {/* Links Grid */}
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

          {/* FAQ Link */}
          <div className="flex justify-end">
            <a href="#" className="text-gray-400 hover:underline">FAQ</a>
          </div>
        </div>
      </div>
    </div>
  );
} 
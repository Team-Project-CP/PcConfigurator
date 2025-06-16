"use client";
import { useState, useEffect } from "react";
import { FaSearch, FaQuestionCircle, FaUser, FaShoppingCart, FaFilter, FaSort, FaEye, FaBalanceScale, FaHeart, FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaTwitch, FaTiktok, FaDiscord } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import Link from 'next/link';
import { components } from '@/lib/data/components';
import Header from "../Header";
import Footer from "../Footer";

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
  const [detailedFilters, setDetailedFilters] = useState<{
    [key: string]: {
      min?: number;
      max?: number;
      value?: string | boolean;
    };
  }>({});
  const [selectedManufacturer, setSelectedManufacturer] = useState<string>("");
  const [showManufacturerFilter, setShowManufacturerFilter] = useState(false);

  // Define manufacturers for each category
  const manufacturers = {
    CPU: ["Intel", "AMD"],
    GPU: ["NVIDIA", "AMD", "Intel"],
    RAM: ["Corsair", "G.Skill", "Crucial", "Kingston", "Team Group"],
    Storage: ["Samsung", "Western Digital", "Crucial", "Seagate", "Kingston"],
    Motherboard: ["ASUS", "MSI", "Gigabyte", "ASRock", "EVGA"],
    PSU: ["Corsair", "EVGA", "Seasonic", "be quiet!", "Thermaltake"],
    Cooling: ["NZXT", "Corsair", "be quiet!", "Noctua", "Arctic"]
  };

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

  // Get available detailed specs for the selected category
  const getAvailableDetailedSpecs = () => {
    if (selectedCategory === "all") return [];
    const categoryComponents = components.filter(c => c.category === selectedCategory);
    if (categoryComponents.length === 0) return [];

    const specs = new Set<string>();
    categoryComponents.forEach(component => {
      Object.keys(component.detailedSpecs).forEach(spec => {
        specs.add(spec);
      });
    });
    return Array.from(specs);
  };

  // Update detailed filters
  const updateDetailedFilter = (spec: string, value: any, type: 'min' | 'max' | 'value') => {
    setDetailedFilters(prev => ({
      ...prev,
      [spec]: {
        ...prev[spec],
        [type]: value
      }
    }));
  };

  // Filter components based on detailed specifications
  const filterByDetailedSpecs = (component: ComponentSpec) => {
    if (Object.keys(detailedFilters).length === 0) return true;

    return Object.entries(detailedFilters).every(([spec, filter]) => {
      const componentSpec = component.detailedSpecs[spec];
      if (!componentSpec) return false;

      if (typeof componentSpec.value === 'number') {
        if (filter.min !== undefined && componentSpec.value < filter.min) return false;
        if (filter.max !== undefined && componentSpec.value > filter.max) return false;
      } else if (typeof componentSpec.value === 'boolean') {
        if (filter.value !== undefined && componentSpec.value !== filter.value) return false;
      } else if (typeof componentSpec.value === 'string') {
        if (filter.value && typeof filter.value === 'string' && 
            !componentSpec.value.toLowerCase().includes(filter.value.toLowerCase())) return false;
      }
      return true;
    });
  };

  // Filter components by manufacturer
  const filterByManufacturer = (component: ComponentSpec) => {
    if (!selectedManufacturer) return true;
    return component.name.toLowerCase().includes(selectedManufacturer.toLowerCase());
  };

  // Update filtered components to include manufacturer filter
  const filteredComponents = handleSort(
    components.filter(component => {
      const matchesCategory = selectedCategory === "all" || component.category === selectedCategory;
      const matchesPrice = component.price >= priceRange[0] && component.price <= priceRange[1];
      const matchesSearch = component.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           component.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesDetailedSpecs = filterByDetailedSpecs(component);
      const matchesManufacturer = filterByManufacturer(component);
      return matchesCategory && matchesPrice && matchesSearch && matchesDetailedSpecs && matchesManufacturer;
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
      
      <Header />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">PC Components</h1>
          <p className="text-gray-600">Build your dream PC with our premium selection of components</p>
        </div>

        {/* Filters, Sort, and Search */}
        <div className="flex flex-col gap-4 mb-8">
          {/* Search and Sort Controls */}
          <div className="flex flex-col sm:flex-row gap-4">
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
            <div className="flex flex-col sm:flex-row gap-4">
              <select
                className="w-full sm:w-auto px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={selectedCategory}
                onChange={(e) => {
                  setSelectedCategory(e.target.value);
                  setDetailedFilters({});
                }}
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>
              <select
                className="w-full sm:w-auto px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-500"
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
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Price Range: ${priceRange[0]} - ${priceRange[1]}
              </label>
              <button
                onClick={() => setShowPriceInput(!showPriceInput)}
                className="text-purple-600 text-sm hover:text-purple-700 w-full sm:w-auto text-center"
              >
                {showPriceInput ? 'Use Slider' : 'Enter Exact Price'}
              </button>
            </div>
            
            {showPriceInput ? (
              <form onSubmit={handleExactPriceSubmit} className="flex flex-col sm:flex-row gap-4 items-center">
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <span>$</span>
                  <input
                    type="number"
                    min="0"
                    max="10000"
                    value={exactMinPrice}
                    onChange={(e) => handlePriceInputChange(e.target.value, true)}
                    className="w-full px-2 py-1 border rounded"
                  />
                </div>
                <span className="hidden sm:inline">-</span>
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <span>$</span>
                  <input
                    type="number"
                    min="0"
                    max="10000"
                    value={exactMaxPrice}
                    onChange={(e) => handlePriceInputChange(e.target.value, false)}
                    className="w-full px-2 py-1 border rounded"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-purple-600 text-white px-4 py-1 rounded hover:bg-purple-700"
                >
                  Apply
                </button>
              </form>
            ) : (
              <div className="flex flex-col sm:flex-row gap-4 items-center">
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

          {/* Detailed Filters */}
          {selectedCategory !== "all" && (
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Detailed Filters</h3>
              
              {/* Manufacturer Filter */}
              <div className="mb-6">
                <button
                  onClick={() => setShowManufacturerFilter(!showManufacturerFilter)}
                  className="flex items-center justify-between w-full p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-300"
                >
                  <span className="font-medium">Manufacturer</span>
                  <svg
                    className={`w-5 h-5 transform transition-transform duration-300 ${
                      showManufacturerFilter ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                <div
                  className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 mt-2 overflow-hidden transition-all duration-300 ${
                    showManufacturerFilter ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  {manufacturers[selectedCategory as keyof typeof manufacturers]?.map((manufacturer) => (
                    <button
                      key={manufacturer}
                      onClick={() => setSelectedManufacturer(selectedManufacturer === manufacturer ? "" : manufacturer)}
                      className={`p-2 rounded-lg text-sm transition-all duration-300 transform hover:scale-105 ${
                        selectedManufacturer === manufacturer
                          ? 'bg-purple-600 text-white'
                          : 'bg-gray-50 text-gray-700 hover:bg-purple-50'
                      }`}
                    >
                      {manufacturer}
                    </button>
                  ))}
                </div>
              </div>

              {/* Existing Detailed Specs Filters */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {getAvailableDetailedSpecs().map(spec => {
                  const categoryComponents = components.filter(c => c.category === selectedCategory);
                  const specValues = categoryComponents.map(c => c.detailedSpecs[spec]?.value);
                  const isNumeric = specValues.every(v => typeof v === 'number');
                  const isBoolean = specValues.every(v => typeof v === 'boolean');
                  const isString = specValues.every(v => typeof v === 'string');

                  if (isNumeric) {
                    const min = Math.min(...specValues as number[]);
                    const max = Math.max(...specValues as number[]);
                    const description = categoryComponents[0]?.detailedSpecs[spec]?.description;
                    return (
                      <div key={spec} className="space-y-2 transform transition-all duration-300 hover:scale-105 group relative">
                        <div className="flex items-center gap-2">
                          <label className="block text-sm font-medium text-gray-700">{spec}</label>
                          {description && (
                            <div className="relative">
                              <FaQuestionCircle className="text-gray-400 hover:text-purple-500 cursor-help transition-colors duration-300" />
                              <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-64 p-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
                                {description}
                                <div className="absolute left-1/2 -translate-x-1/2 top-full w-2 h-2 bg-gray-900 transform rotate-45"></div>
                              </div>
                            </div>
                          )}
                        </div>
                        <div className="flex gap-2">
                          <input
                            type="number"
                            placeholder="Min"
                            className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                            value={detailedFilters[spec]?.min || ''}
                            onChange={(e) => updateDetailedFilter(spec, parseFloat(e.target.value), 'min')}
                          />
                          <input
                            type="number"
                            placeholder="Max"
                            className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                            value={detailedFilters[spec]?.max || ''}
                            onChange={(e) => updateDetailedFilter(spec, parseFloat(e.target.value), 'max')}
                          />
                        </div>
                      </div>
                    );
                  } else if (isBoolean) {
                    const description = categoryComponents[0]?.detailedSpecs[spec]?.description;
                    return (
                      <div key={spec} className="space-y-2 transform transition-all duration-300 hover:scale-105 group relative">
                        <div className="flex items-center gap-2">
                          <label className="block text-sm font-medium text-gray-700">{spec}</label>
                          {description && (
                            <div className="relative">
                              <FaQuestionCircle className="text-gray-400 hover:text-purple-500 cursor-help transition-colors duration-300" />
                              <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-64 p-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
                                {description}
                                <div className="absolute left-1/2 -translate-x-1/2 top-full w-2 h-2 bg-gray-900 transform rotate-45"></div>
                              </div>
                            </div>
                          )}
                        </div>
                        <select
                          className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                          value={typeof detailedFilters[spec]?.value === 'boolean' 
                            ? detailedFilters[spec]?.value.toString() 
                            : ''}
                          onChange={(e) => {
                            const value = e.target.value;
                            if (value === '') {
                              updateDetailedFilter(spec, undefined, 'value');
                            } else {
                              updateDetailedFilter(spec, value === 'true', 'value');
                            }
                          }}
                        >
                          <option value="">Any</option>
                          <option value="true">Yes</option>
                          <option value="false">No</option>
                        </select>
                      </div>
                    );
                  } else if (isString) {
                    const description = categoryComponents[0]?.detailedSpecs[spec]?.description;
                    // Get unique values for this spec
                    const uniqueValues = Array.from(new Set(
                      categoryComponents
                        .map(c => c.detailedSpecs[spec]?.value)
                        .filter((value): value is string => typeof value === 'string')
                    )).sort();

                    return (
                      <div key={spec} className="space-y-2 transform transition-all duration-300 hover:scale-105 group relative">
                        <div className="flex items-center gap-2">
                          <label className="block text-sm font-medium text-gray-700">{spec}</label>
                          {description && (
                            <div className="relative">
                              <FaQuestionCircle className="text-gray-400 hover:text-purple-500 cursor-help transition-colors duration-300" />
                              <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-64 p-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
                                {description}
                                <div className="absolute left-1/2 -translate-x-1/2 top-full w-2 h-2 bg-gray-900 transform rotate-45"></div>
                              </div>
                            </div>
                          )}
                        </div>
                        <select
                          className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                          value={typeof detailedFilters[spec]?.value === 'string' ? detailedFilters[spec]?.value : ''}
                          onChange={(e) => updateDetailedFilter(spec, e.target.value || undefined, 'value')}
                        >
                          <option value="">Any</option>
                          {uniqueValues.map((value) => (
                            <option key={value} value={value}>
                              {value}
                            </option>
                          ))}
                        </select>
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            </div>
          )}
        </div>

        {/* Compare Bar */}
        {compareList.length > 0 && (
          <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg p-4 z-40">
            <div className="container mx-auto">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
                  {compareList.map(item => (
                    <div key={item.id} className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg">
                      <img src={item.image} alt={item.name} className="w-8 h-8 object-contain" />
                      <span className="text-sm line-clamp-1 max-w-[150px]">{item.name}</span>
                      <button onClick={() => toggleCompare(item)} className="text-gray-500 hover:text-gray-700">
                        <IoClose size={16} />
                      </button>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => setShowCompare(true)}
                  className="w-full sm:w-auto bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 text-sm md:text-base"
                >
                  Compare ({compareList.length})
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Components Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {filteredComponents.map(component => (
            <div
              key={component.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <Link href={`/Components/${component.id}`} className="block">
                <div className="relative">
                  <div className="aspect-square w-full overflow-hidden">
                    <img
                      src={component.image}
                      alt={component.name}
                      className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute top-2 right-2 bg-purple-600 text-white px-2 py-1 rounded text-sm transition-all duration-300 group-hover:bg-purple-700">
                    {component.category}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg md:text-xl font-semibold mb-2 line-clamp-2 transition-colors duration-300 group-hover:text-purple-600">{component.name}</h3>
                  <p className="text-gray-600 mb-4 text-sm md:text-base line-clamp-2 transition-colors duration-300 group-hover:text-gray-800">{component.description}</p>
                </div>
              </Link>
              <div className="px-4 pb-4">
                <div className="flex flex-col gap-3">
                  <div className="flex justify-between items-center">
                    <span className="text-xl md:text-2xl font-bold text-purple-600 transition-all duration-300 group-hover:scale-105">
                      ${component.price}
                    </span>
                    <div className="flex gap-2">
                      <button 
                        onClick={() => toggleWishlist(component)}
                        className={`p-2 rounded-full transition-all duration-300 transform hover:scale-110 ${
                          wishlist.find(item => item.id === component.id)
                            ? "bg-red-500 text-white"
                            : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                        }`}
                      >
                        <FaHeart size={18} />
                      </button>
                      <button 
                        onClick={() => toggleCompare(component)}
                        className={`p-2 rounded-full transition-all duration-300 transform hover:scale-110 ${
                          compareList.find(item => item.id === component.id)
                            ? "bg-purple-600 text-white"
                            : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                        }`}
                      >
                        <FaBalanceScale size={18} />
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <button 
                      onClick={() => {
                        // Add to cart functionality here
                      }}
                      className="flex-1 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 text-sm md:text-base"
                    >
                      <FaShoppingCart size={16} />
                      Add to Cart
                    </button>
                    <Link
                      href={`/Components/${component.id}`}
                      className="flex-1 bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 text-sm md:text-base"
                    >
                      <FaEye size={16} />
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick View Modal */}
      {showQuickView && selectedComponent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center">
              <h2 className="text-xl md:text-2xl font-bold">{selectedComponent?.name}</h2>
              <button
                onClick={() => setShowQuickView(false)}
                className="text-gray-500 hover:text-gray-700 p-2"
              >
                <IoClose size={24} />
              </button>
            </div>
            <div className="p-4 md:p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="aspect-square w-full overflow-hidden bg-gray-50 rounded-lg">
                  <img
                    src={selectedComponent?.image}
                    alt={selectedComponent?.name}
                    className="w-full h-full object-contain p-4"
                  />
                </div>
                <div className="space-y-4">
                  <p className="text-gray-600">{selectedComponent?.description}</p>
                  <div>
                    <h3 className="font-semibold mb-2">Specifications:</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      {selectedComponent?.specs.map((spec, index) => (
                        <li key={index}>{spec}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-4 border-t">
                    <span className="text-2xl md:text-3xl font-bold text-purple-600">
                      ${selectedComponent?.price}
                    </span>
                    <div className="flex gap-2">
                      <button
                        onClick={() => selectedComponent && toggleWishlist(selectedComponent)}
                        className={`p-2 rounded-full transition-all duration-300 ${
                          selectedComponent && wishlist.find(item => item.id === selectedComponent.id)
                            ? "bg-red-500 text-white"
                            : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                        }`}
                      >
                        <FaHeart size={20} />
                      </button>
                      <button
                        onClick={() => selectedComponent && toggleCompare(selectedComponent)}
                        className={`p-2 rounded-full transition-all duration-300 ${
                          selectedComponent && compareList.find(item => item.id === selectedComponent.id)
                            ? "bg-purple-600 text-white"
                            : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                        }`}
                      >
                        <FaBalanceScale size={20} />
                      </button>
                    </div>
                  </div>
                  <button className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors text-sm md:text-base">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Compare Modal */}
      {showCompare && compareList.length > 0 && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg w-full max-w-6xl max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center">
              <h2 className="text-xl md:text-2xl font-bold">Compare Components</h2>
              <button
                onClick={() => setShowCompare(false)}
                className="text-gray-500 hover:text-gray-700 p-2"
              >
                <IoClose size={24} />
              </button>
            </div>
            <div className="p-4 md:p-6 overflow-x-auto">
              <div className="min-w-[800px]">
                <div className="grid grid-cols-4 gap-4">
                  {/* Header */}
                  <div className="col-span-1"></div>
                  {compareList.map(component => (
                    <div key={component.id} className="text-center">
                      <div className="aspect-square w-full overflow-hidden bg-gray-50 rounded-lg mb-4">
                        <img
                          src={component.image}
                          alt={component.name}
                          className="w-full h-full object-contain p-4"
                        />
                      </div>
                      <h3 className="font-semibold mb-2 line-clamp-2">{component.name}</h3>
                      <p className="text-purple-600 font-bold">${component.price}</p>
                    </div>
                  ))}
                  {/* Fill empty slots */}
                  {[...Array(3 - compareList.length)].map((_, index) => (
                    <div key={`empty-${index}`} className="text-center">
                      <div className="aspect-square w-full bg-gray-50 rounded-lg mb-4 flex items-center justify-center">
                        <span className="text-gray-400">No component selected</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Specifications Comparison */}
                <div className="mt-8 space-y-4">
                  {Object.keys(compareList[0]?.detailedSpecs || {}).map(spec => (
                    <div key={spec} className="grid grid-cols-4 gap-4 items-center">
                      <div className="font-medium text-gray-700">{spec}</div>
                      {compareList.map(component => (
                        <div key={`${component.id}-${spec}`} className="text-center">
                          {component.detailedSpecs[spec]?.value}
                          {component.detailedSpecs[spec]?.unit && (
                            <span className="text-gray-500 ml-1">
                              {component.detailedSpecs[spec]?.unit}
                            </span>
                          )}
                        </div>
                      ))}
                      {/* Fill empty slots */}
                      {[...Array(3 - compareList.length)].map((_, index) => (
                        <div key={`empty-spec-${index}`} className="text-center text-gray-400">
                          -
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Stay In Touch Section (Footer) */}
      <Footer isVisible={isVisible} />
      
    </div>
  );
} 
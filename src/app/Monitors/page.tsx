"use client";
import { useState } from "react";
import type { Monitor } from "@/lib/data/monitors";
import { monitors } from "@/lib/data/monitors";
import { FaHeart, FaBalanceScale, FaShoppingCart } from "react-icons/fa";

export default function MonitorsPage() {
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [compareList, setCompareList] = useState<number[]>([]);
  const [sortBy, setSortBy] = useState<string>("default");
  const [search, setSearch] = useState<string>("");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(1000);

  const toggleWishlist = (id: number) => {
    setWishlist(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };
  const toggleCompare = (id: number) => {
    setCompareList(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  const filtered: Monitor[] = monitors
    .filter(m => categoryFilter === "all" || m.category === categoryFilter)
    .filter(m => m.name.toLowerCase().includes(search.toLowerCase()))
    .filter(m => m.price >= minPrice && m.price <= maxPrice);

  const sorted: Monitor[] = [...filtered].sort((a, b) => {
    if (sortBy === "price-asc") return a.price - b.price;
    if (sortBy === "price-desc") return b.price - a.price;
    if (sortBy === "name") return a.name.localeCompare(b.name);
    return 0;
  });

  const categories = Array.from(new Set(monitors.map(m => m.category)));
  const compared = monitors.filter(m => compareList.includes(m.id));

  return (
    <main className="min-h-screen bg-[#0B0B0F] text-white px-6 py-12 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
        <h1 className="text-4xl font-bold">Monitors</h1>
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-[#16161D] border border-gray-700 rounded px-4 py-2 text-white"
          />
          <select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)} className="bg-[#16161D] border border-gray-700 rounded px-4 py-2 text-white">
            <option value="all">All Categories</option>
            {categories.map(cat => (<option key={cat} value={cat}>{cat}</option>))}
          </select>
          <input type="number" value={minPrice} onChange={(e) => setMinPrice(Number(e.target.value))} placeholder="Min Price" className="bg-[#16161D] border border-gray-700 rounded px-4 py-2 text-white w-28" />
          <input type="number" value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))} placeholder="Max Price" className="bg-[#16161D] border border-gray-700 rounded px-4 py-2 text-white w-28" />
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="bg-[#16161D] border border-gray-700 rounded px-4 py-2 text-white">
            <option value="default">Sort By</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="name">Name A-Z</option>
          </select>
        </div>
      </div>

      {compared.length >= 2 && (
        <section className="bg-[#16161D] p-6 rounded-xl mb-10">
          <h2 className="text-2xl font-bold mb-4">Compare Monitors</h2>
          <div className="overflow-auto">
            <table className="min-w-full text-left text-sm">
              <thead>
                <tr className="text-gray-400">
                  <th className="p-2">Model</th>
                  <th className="p-2">Price</th>
                  <th className="p-2">Resolution</th>
                  <th className="p-2">Refresh Rate</th>
                  <th className="p-2">Panel</th>
                  <th className="p-2"></th>
                </tr>
              </thead>
              <tbody>
                {compared.map(m => (
                  <tr key={m.id} className="border-t border-gray-700">
                    <td className="p-2 font-semibold">{m.name}</td>
                    <td className="p-2 text-[#6C38CC] font-bold">${m.price}</td>
                    <td className="p-2">{m.detailedSpecs?.Resolution?.value}</td>
                    <td className="p-2">{m.detailedSpecs?.RefreshRate?.value} {m.detailedSpecs?.RefreshRate?.unit}</td>
                    <td className="p-2">{m.detailedSpecs?.Panel?.value}</td>
                    <td className="p-2">
                      <button onClick={() => toggleCompare(m.id)} className="text-red-500 hover:text-red-400">Remove</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {sorted.map((monitor) => (
          <div key={monitor.id} className="bg-[#16161D] p-6 rounded-2xl shadow-md">
            <img src={monitor.image} alt={monitor.name} className="w-full h-40 object-contain mb-4" />
            <h2 className="text-xl font-semibold">{monitor.name}</h2>
            <p className="text-gray-400 text-sm mb-2">{monitor.description}</p>
            <p className="text-[#6C38CC] font-bold">${monitor.price}</p>
            <div className="flex items-center gap-4 mt-4">
              <button onClick={() => toggleWishlist(monitor.id)}>
                <FaHeart className={wishlist.includes(monitor.id) ? "text-red-500" : "text-gray-500"} />
              </button>
              <button onClick={() => toggleCompare(monitor.id)}>
                <FaBalanceScale className={compareList.includes(monitor.id) ? "text-blue-500" : "text-gray-500"} />
              </button>
              <button className="ml-auto bg-[#6C38CC] px-4 py-1 rounded hover:bg-purple-700">
                <FaShoppingCart className="inline-block mr-2" /> Buy
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
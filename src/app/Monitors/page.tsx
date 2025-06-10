"use client";
import { useState } from "react";
import type { Monitor } from "@/lib/data/monitors";
import { monitors } from "@/lib/data/monitors";
import { FaHeart, FaBalanceScale, FaShoppingCart } from "react-icons/fa";
import Link from "next/link";
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";

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
    <main className="bg-white text-black">
      {/* <Header /> */}

      <section className="py-16 px-6 lg:px-20">
        <h1 className="text-3xl font-bold mb-6 text-center">Monitors</h1>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-10">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border px-4 py-2 rounded text-black"
          />
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="border px-4 py-2 rounded text-black"
          >
            <option value="all">All Categories</option>
            {categories.map(cat => (<option key={cat} value={cat}>{cat}</option>))}
          </select>
          <input type="number" value={minPrice} onChange={(e) => setMinPrice(Number(e.target.value))} placeholder="Min Price" className="border px-4 py-2 rounded text-black w-28" />
          <input type="number" value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))} placeholder="Max Price" className="border px-4 py-2 rounded text-black w-28" />
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="border px-4 py-2 rounded text-black">
            <option value="default">Sort By</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="name">Name A-Z</option>
          </select>
        </div>

        {compared.length >= 2 && (
          <section className="bg-gray-100 p-6 rounded-xl mb-10">
            <h2 className="text-2xl font-bold mb-4">Compare Monitors</h2>
            <div className="overflow-auto">
              <table className="min-w-full text-left text-sm">
                <thead>
                  <tr className="text-gray-600">
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
                    <tr key={m.id} className="border-t border-gray-300">
                      <td className="p-2 font-semibold text-black">{m.name}</td>
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
            <div
              key={monitor.id}
              className="border rounded-2xl p-6 shadow-lg flex flex-col justify-between h-full bg-white transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <Link href={`/Monitors/${monitor.id}`} className="block">
                <img
                  src={monitor.image}
                  alt={monitor.name}
                  className="w-full h-48 object-contain mb-4 transition-transform duration-300 hover:scale-105"
                />
                <h3 className="text-xl font-semibold mb-2 text-black">{monitor.name}</h3>
                <p className="text-sm text-gray-500">{monitor.description}</p>
              </Link>
              <div className="flex items-center justify-between mt-4">
                <p className="font-bold text-[#6C38CC]">${monitor.price}</p>
                <div className="flex gap-3">
                  <button onClick={() => toggleWishlist(monitor.id)}>
                    <FaHeart className={wishlist.includes(monitor.id) ? "text-red-500" : "text-gray-400"} />
                  </button>
                  <button onClick={() => toggleCompare(monitor.id)}>
                    <FaBalanceScale className={compareList.includes(monitor.id) ? "text-blue-500" : "text-gray-400"} />
                  </button>
                  <button className="bg-[#6C38CC] text-white px-3 py-1 rounded hover:bg-purple-700 transition-transform hover:scale-105">
                    <FaShoppingCart className="inline-block mr-1" /> Buy
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* <Footer /> */}
    </main>
  );}
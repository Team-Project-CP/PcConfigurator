'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell
} from 'recharts';

/**
 * Sample data for sales chart
 * @type {Array<{name: string, sales: number}>}
 */
const salesData = [
  { name: 'Jan', sales: 4000 },
  { name: 'Feb', sales: 3000 },
  { name: 'Mar', sales: 5000 },
  { name: 'Apr', sales: 2780 },
  { name: 'May', sales: 1890 },
  { name: 'Jun', sales: 2390 },
];

/**
 * Sample data for orders status distribution
 * @type {Array<{name: string, value: number}>}
 */
const ordersByStatus = [
  { name: 'Completed', value: 400 },
  { name: 'Processing', value: 300 },
  { name: 'Pending', value: 200 },
  { name: 'Cancelled', value: 100 },
];

/**
 * Colors for pie chart segments
 * @type {string[]}
 */
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

/**
 * Sample data for top products chart
 * @type {Array<{name: string, sales: number}>}
 */
const topProducts = [
  { name: 'Product A', sales: 400 },
  { name: 'Product B', sales: 300 },
  { name: 'Product C', sales: 200 },
  { name: 'Product D', sales: 100 },
];

/**
 * Admin Dashboard Component
 * 
 * This component renders the main admin dashboard with various charts and statistics.
 * It includes:
 * - Sales overview chart
 * - Orders status distribution
 * - Top products chart
 * - Key performance indicators
 * 
 * @component
 * @returns {JSX.Element} The rendered admin dashboard
 */
export default function AdminPage() {
  // State for active navigation tab
  const [activeTab, setActiveTab] = useState('dashboard');
  // State for time range filter
  const [timeRange, setTimeRange] = useState('week');

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="flex flex-col md:flex-row">
        {/* Sidebar Navigation */}
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-64 bg-white dark:bg-gray-800 shadow-lg h-screen fixed"
        >
          <div className="p-4">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Admin Panel</h1>
          </div>
          <nav className="mt-4">
            {/* Navigation Links */}
            <Link 
              href="/admin"
              className={`block px-4 py-2 transition-colors duration-200 ${
                activeTab === 'dashboard' 
                  ? 'bg-blue-500 text-white' 
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
              onClick={() => setActiveTab('dashboard')}
            >
              Dashboard
            </Link>
            <Link 
              href="/admin/products"
              className={`block px-4 py-2 transition-colors duration-200 ${
                activeTab === 'products' 
                  ? 'bg-blue-500 text-white' 
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
              onClick={() => setActiveTab('products')}
            >
              Products
            </Link>
            <Link 
              href="/admin/orders"
              className={`block px-4 py-2 transition-colors duration-200 ${
                activeTab === 'orders' 
                  ? 'bg-blue-500 text-white' 
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
              onClick={() => setActiveTab('orders')}
            >
              Orders
            </Link>
            <Link 
              href="/admin/users"
              className={`block px-4 py-2 transition-colors duration-200 ${
                activeTab === 'users' 
                  ? 'bg-blue-500 text-white' 
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
              onClick={() => setActiveTab('users')}
            >
              Users
            </Link>
          </nav>
        </motion.div>

        {/* Main Content Area */}
        <div className="flex-1 md:ml-64 p-8">
          {/* Header with Time Range Selector */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">Dashboard</h1>
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="border dark:border-gray-600 p-2 rounded bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
            >
              <option value="week">Last Week</option>
              <option value="month">Last Month</option>
              <option value="year">Last Year</option>
            </select>
          </div>

          {/* Key Performance Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* Total Sales Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
            >
              <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium">Total Sales</h3>
              <p className="text-2xl font-bold text-gray-800 dark:text-white mt-2">$24,500</p>
              <p className="text-green-500 text-sm mt-2">↑ 12% from last period</p>
            </motion.div>

            {/* Total Orders Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
            >
              <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium">Total Orders</h3>
              <p className="text-2xl font-bold text-gray-800 dark:text-white mt-2">1,234</p>
              <p className="text-green-500 text-sm mt-2">↑ 8% from last period</p>
            </motion.div>

            {/* Active Users Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
            >
              <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium">Active Users</h3>
              <p className="text-2xl font-bold text-gray-800 dark:text-white mt-2">892</p>
              <p className="text-green-500 text-sm mt-2">↑ 5% from last period</p>
            </motion.div>

            {/* Average Order Value Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
            >
              <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium">Average Order Value</h3>
              <p className="text-2xl font-bold text-gray-800 dark:text-white mt-2">$198</p>
              <p className="text-red-500 text-sm mt-2">↓ 3% from last period</p>
            </motion.div>
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Sales Overview Chart */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
            >
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Sales Overview</h3>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={salesData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="name" stroke="#6B7280" />
                    <YAxis stroke="#6B7280" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#1F2937',
                        border: 'none',
                        borderRadius: '0.5rem',
                        color: '#fff'
                      }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="sales" 
                      stroke="#3B82F6" 
                      fill="#93C5FD" 
                      fillOpacity={0.3}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

            {/* Orders Status Distribution Chart */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
            >
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Orders by Status</h3>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={ordersByStatus}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {ordersByStatus.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#1F2937',
                        border: 'none',
                        borderRadius: '0.5rem',
                        color: '#fff'
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </motion.div>
          </div>

          {/* Top Products Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
          >
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Top Products</h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={topProducts}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="name" stroke="#6B7280" />
                  <YAxis stroke="#6B7280" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1F2937',
                      border: 'none',
                      borderRadius: '0.5rem',
                      color: '#fff'
                    }}
                  />
                  <Bar dataKey="sales" fill="#3B82F6" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 
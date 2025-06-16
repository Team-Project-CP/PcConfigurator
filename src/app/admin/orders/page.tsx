'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Order {
  id: number;
  customerName: string;
  date: string;
  status: 'pending' | 'processing' | 'completed' | 'cancelled';
  total: number;
}

const testOrders: Order[] = [
  { id: 1, customerName: 'John Doe', date: '2024-03-15', status: 'completed', total: 2499.99 },
  { id: 2, customerName: 'Jane Smith', date: '2024-03-16', status: 'processing', total: 1599.99 },
  { id: 3, customerName: 'Mike Johnson', date: '2024-03-16', status: 'pending', total: 899.99 },
  { id: 4, customerName: 'Sarah Wilson', date: '2024-03-15', status: 'cancelled', total: 1999.99 },
];

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>(testOrders);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  const handleStatusChange = (orderId: number, newStatus: Order['status']) => {
    setOrders(orders.map(order => 
      order.id === orderId ? { ...order, status: newStatus } : order
    ));
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="p-8"
    >
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">Orders Management</h1>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Order ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Customer</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Total</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {orders.map((order, index) => (
                <motion.tr
                  key={order.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                >
                  <td className="px-6 py-4 whitespace-nowrap text-gray-800 dark:text-white">#{order.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-800 dark:text-white">{order.customerName}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-800 dark:text-white">{order.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <select
                      value={order.status}
                      onChange={(e) => handleStatusChange(order.id, e.target.value as Order['status'])}
                      className={`rounded px-2 py-1 text-sm transition-colors duration-200 ${
                        order.status === 'completed' ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300' :
                        order.status === 'processing' ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300' :
                        order.status === 'cancelled' ? 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-300' :
                        'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-300'
                      }`}
                    >
                      <option value="pending">Pending</option>
                      <option value="processing">Processing</option>
                      <option value="completed">Completed</option>
                      <option value="cancelled">Cancelled</option>
                    </select>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-800 dark:text-white">${order.total}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <motion.button 
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setSelectedOrder(order)}
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-300"
                    >
                      View Details
                    </motion.button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      <AnimatePresence>
        {selectedOrder && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg w-full max-w-md"
            >
              <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Order Details</h2>
              <div className="space-y-2">
                <p className="text-gray-800 dark:text-white">
                  <span className="font-semibold">Order ID:</span> #{selectedOrder.id}
                </p>
                <p className="text-gray-800 dark:text-white">
                  <span className="font-semibold">Customer:</span> {selectedOrder.customerName}
                </p>
                <p className="text-gray-800 dark:text-white">
                  <span className="font-semibold">Date:</span> {selectedOrder.date}
                </p>
                <p className="text-gray-800 dark:text-white">
                  <span className="font-semibold">Status:</span> {selectedOrder.status}
                </p>
                <p className="text-gray-800 dark:text-white">
                  <span className="font-semibold">Total:</span> ${selectedOrder.total}
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedOrder(null)}
                className="mt-4 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition-colors duration-200 w-full"
              >
                Close
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
} 
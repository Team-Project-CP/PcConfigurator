'use client';

import { useFirebase } from '@/providers/FirebaseProvider';

/**
 * ConfigList component
 *
 * Displays a list of user configurations in a responsive grid layout.
 * Fetches configuration data from the Firebase context and shows loading state while fetching.
 * Each configuration card displays the name, description, total price, and visibility status (public/private).
 *
 * @returns {JSX.Element} The rendered list of configuration cards.
 */
export default function ConfigList() {
  // Get configs and loading state from Firebase context
  const { configs, loading } = useFirebase();

  // Show loading message while configurations are being fetched
  if (loading) {
    return <div>Loading configurations...</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {Object.entries(configs).map(([id, config]) => (
        <div key={id} className="border rounded-lg p-4 shadow-sm">
          <h2 className="text-xl font-bold mb-2">{config.name}</h2>
          <p className="text-gray-600 mb-2">{config.description}</p>
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold">
              ${config.totalPrice}
            </span>
            <span className={`px-2 py-1 rounded ${
              config.isPublic ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
            }`}>
              {config.isPublic ? 'Public' : 'Private'}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
} 
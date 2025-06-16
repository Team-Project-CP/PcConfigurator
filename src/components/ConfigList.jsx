'use client';

import { useFirebase } from '@/providers/FirebaseProvider';

export default function ConfigList() {
  const { configs, loading } = useFirebase();

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
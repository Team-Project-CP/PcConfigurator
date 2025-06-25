'use client';

import { useState, useEffect } from 'react';
import { useFirebase } from '@/providers/FirebaseProvider';
import { subscribeToConfig, updateConfig, addCollaborator } from '@/lib/firebase/databaseUtils';

/**
 * CollaborativeConfig component
 *
 * Provides a collaborative configuration editor where multiple users can view and edit a shared configuration in real-time.
 * Allows adding collaborators by user ID and editing configuration details if the user has permission.
 *
 * @param {Object} props - Component props
 * @param {string} props.configId - The unique identifier of the configuration to collaborate on.
 * @returns {JSX.Element} The collaborative configuration editor UI.
 */
export default function CollaborativeConfig({ configId }) {
  // State for the current configuration object
  const [config, setConfig] = useState(null);
  // State for the new collaborator input field
  const [newCollaborator, setNewCollaborator] = useState('');
  // State to toggle editing mode
  const [isEditing, setIsEditing] = useState(false);
  // Firebase authentication context
  const { auth } = useFirebase();

  // Subscribe to real-time updates for the configuration
  useEffect(() => {
    const unsubscribe = subscribeToConfig(configId, (data) => {
      setConfig(data);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [configId]);

  /**
   * Handles updating the configuration in the database.
   * Only allows if the current user is a collaborator.
   * @param {Object} updates - The updated configuration fields.
   */
  const handleUpdate = async (updates) => {
    if (!config || !auth.currentUser) return;
    
    const isCollaborator = config.collaborators.includes(auth.currentUser.uid);
    if (!isCollaborator) {
      alert('You do not have permission to edit this configuration');
      return;
    }

    await updateConfig(configId, updates);
    setIsEditing(false);
  };

  /**
   * Handles adding a new collaborator to the configuration.
   */
  const handleAddCollaborator = async () => {
    if (!newCollaborator) return;
    
    await addCollaborator(configId, newCollaborator);
    setNewCollaborator('');
  };

  // Show loading state while configuration is being fetched
  if (!config) return <div>Loading...</div>;

  return (
    <div className="p-4">
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">{config.name}</h2>
        <p className="text-gray-600">{config.description}</p>
      </div>

      {isEditing ? (
        <div className="space-y-4">
          <input
            type="text"
            value={config.name}
            onChange={(e) => setConfig({ ...config, name: e.target.value })}
            className="border p-2 rounded"
          />
          <textarea
            value={config.description}
            onChange={(e) => setConfig({ ...config, description: e.target.value })}
            className="border p-2 rounded w-full"
          />
          <div className="flex space-x-2">
            <button
              onClick={() => handleUpdate(config)}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Save
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="bg-gray-500 text-white px-4 py-2 rounded"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="flex space-x-2">
            <button
              onClick={() => setIsEditing(true)}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Edit
            </button>
          </div>

          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Collaborators</h3>
            <div className="flex space-x-2">
              <input
                type="text"
                value={newCollaborator}
                onChange={(e) => setNewCollaborator(e.target.value)}
                placeholder="Enter user ID"
                className="border p-2 rounded"
              />
              <button
                onClick={handleAddCollaborator}
                className="bg-green-500 text-white px-4 py-2 rounded"
              >
                Add Collaborator
              </button>
            </div>
            <div className="mt-2">
              {config.collaborators.map((userId) => (
                <div key={userId} className="text-sm text-gray-600">
                  {userId}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 
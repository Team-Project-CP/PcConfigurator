'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { database } from '@/lib/firebase/init';
import { ref, onValue, off } from 'firebase/database';

const FirebaseContext = createContext();

/**
 * FirebaseProvider component
 *
 * Provides Firebase Realtime Database data (configs, components) and loading state to the React context tree.
 * Subscribes to real-time updates for 'configs' and 'components' nodes in the database.
 *
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components to be wrapped by the provider.
 * @returns {JSX.Element} The provider wrapping its children with Firebase context.
 */
export function FirebaseProvider({ children }) {
  // State for all configurations from the database
  const [configs, setConfigs] = useState({});
  // State for all components from the database
  const [components, setComponents] = useState({});
  // Loading state for initial data fetch
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Subscribe to changes in 'configs' node
    const configsRef = ref(database, 'configs');
    onValue(configsRef, (snapshot) => {
      setConfigs(snapshot.val() || {});
      setLoading(false);
    });

    // Subscribe to changes in 'components' node
    const componentsRef = ref(database, 'components');
    onValue(componentsRef, (snapshot) => {
      setComponents(snapshot.val() || {});
    });

    // Cleanup subscriptions on unmount
    return () => {
      off(configsRef);
      off(componentsRef);
    };
  }, []);

  // Context value provided to consumers
  const value = {
    configs,
    components,
    loading,
  };

  return (
    <FirebaseContext.Provider value={value}>
      {children}
    </FirebaseContext.Provider>
  );
}

/**
 * useFirebase hook
 *
 * Custom hook to access Firebase context (configs, components, loading state).
 * Must be used within a FirebaseProvider.
 *
 * @returns {{configs: Object, components: Object, loading: boolean}} Firebase context value
 */
export const useFirebase = () => {
  const context = useContext(FirebaseContext);
  if (context === undefined) {
    throw new Error('useFirebase must be used within a FirebaseProvider');
  }
  return context;
}; 
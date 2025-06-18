'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { database } from '@/lib/firebase/init';
import { ref, onValue, off } from 'firebase/database';

const FirebaseContext = createContext();

export function FirebaseProvider({ children }) {
  const [configs, setConfigs] = useState({});
  const [components, setComponents] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Подписываемся на изменения в конфигурациях
    const configsRef = ref(database, 'configs');
    onValue(configsRef, (snapshot) => {
      setConfigs(snapshot.val() || {});
      setLoading(false);
    });

    // Подписываемся на изменения в компонентах
    const componentsRef = ref(database, 'components');
    onValue(componentsRef, (snapshot) => {
      setComponents(snapshot.val() || {});
    });

    // Отписываемся при размонтировании
    return () => {
      off(configsRef);
      off(componentsRef);
    };
  }, []);

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

export const useFirebase = () => {
  const context = useContext(FirebaseContext);
  if (context === undefined) {
    throw new Error('useFirebase must be used within a FirebaseProvider');
  }
  return context;
}; 
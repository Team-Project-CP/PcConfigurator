/**
 * StoreContext.tsx
 *
 * Provides a React context for managing cart, favorites, and compare lists in the application.
 * Includes a provider component and a custom hook for accessing and updating store state.
 *
 * - StoreProvider: Wraps the app and provides cart/favorites/compare state and actions.
 * - useStore: Custom hook to access the store context.
 */

'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  specs?: {
    cpu: string;
    gpu: string;
    ram: string;
    storage: string;
    cooling: string;
  };
}

interface StoreContextType {
  cart: Product[];
  favorites: Product[];
  compare: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  addToFavorites: (product: Product) => void;
  removeFromFavorites: (productId: string) => void;
  addToCompare: (product: Product) => void;
  removeFromCompare: (productId: string) => void;
  isInCart: (productId: string) => boolean;
  isInFavorites: (productId: string) => boolean;
  isInCompare: (productId: string) => boolean;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

/**
 * StoreProvider component
 *
 * Provides cart, favorites, and compare state and actions to the React context tree.
 * Loads and saves state to localStorage for persistence.
 *
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components to be wrapped by the provider.
 * @returns {JSX.Element} The provider wrapping its children with store context.
 */
export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<Product[]>([]);
  const [favorites, setFavorites] = useState<Product[]>([]);
  const [compare, setCompare] = useState<Product[]>([]);

  // Load data from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    const savedFavorites = localStorage.getItem('favorites');
    const savedCompare = localStorage.getItem('compare');

    if (savedCart) setCart(JSON.parse(savedCart));
    if (savedFavorites) setFavorites(JSON.parse(savedFavorites));
    if (savedCompare) setCompare(JSON.parse(savedCompare));
  }, []);

  // Save to localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('favorites', JSON.stringify(favorites));
    localStorage.setItem('compare', JSON.stringify(compare));
  }, [cart, favorites, compare]);

  const addToCart = (product: Product) => {
    setCart(prev => [...prev, product]);
  };

  const removeFromCart = (productId: string) => {
    setCart(prev => prev.filter(item => item.id !== productId));
  };

  const addToFavorites = (product: Product) => {
    setFavorites(prev => [...prev, product]);
  };

  const removeFromFavorites = (productId: string) => {
    setFavorites(prev => prev.filter(item => item.id !== productId));
  };

  const addToCompare = (product: Product) => {
    if (compare.length < 3) {
      setCompare(prev => [...prev, product]);
    }
  };

  const removeFromCompare = (productId: string) => {
    setCompare(prev => prev.filter(item => item.id !== productId));
  };

  const isInCart = (productId: string) => {
    return cart.some(item => item.id === productId);
  };

  const isInFavorites = (productId: string) => {
    return favorites.some(item => item.id === productId);
  };

  const isInCompare = (productId: string) => {
    return compare.some(item => item.id === productId);
  };

  return (
    <StoreContext.Provider value={{
      cart,
      favorites,
      compare,
      addToCart,
      removeFromCart,
      addToFavorites,
      removeFromFavorites,
      addToCompare,
      removeFromCompare,
      isInCart,
      isInFavorites,
      isInCompare,
    }}>
      {children}
    </StoreContext.Provider>
  );
}

/**
 * useStore hook
 *
 * Custom hook to access the store context (cart, favorites, compare, and actions).
 * Must be used within a StoreProvider.
 *
 * @returns {StoreContextType} Store context value
 */
export function useStore() {
  const context = useContext(StoreContext);
  if (context === undefined) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
} 
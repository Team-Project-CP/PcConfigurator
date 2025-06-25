import { database } from './init';
import { 
  ref, 
  set, 
  get, 
  update, 
  remove, 
  push,
  query, 
  orderByChild, 
  equalTo,
  onValue,
  off
} from 'firebase/database';
import { firestore } from './init';
import { collection, addDoc, getDocs } from 'firebase/firestore';

/**
 * databaseUtils.js
 *
 * Utility functions for interacting with Firebase Realtime Database and Firestore.
 * Includes user, configuration, and component management, as well as real-time subscriptions.
 */

// Работа с пользователями
/**
 * Creates a new user in the Realtime Database.
 * @param {string} userId - The unique user ID.
 * @param {Object} userData - The user data to store.
 * @returns {Promise<boolean>} True if successful, false otherwise.
 */
export const createUser = async (userId, userData) => {
  try {
    await set(ref(database, `users/${userId}`), {
      ...userData,
      role: 'user',
      createdAt: new Date().toISOString()
    });
    return true;
  } catch (error) {
    console.error('Error creating user:', error);
    return false;
  }
};

/**
 * Updates the role of a user in the Realtime Database.
 * @param {string} userId - The user ID.
 * @param {string} role - The new role to assign.
 * @returns {Promise<boolean>} True if successful, false otherwise.
 */
export const updateUserRole = async (userId, role) => {
  try {
    await update(ref(database, `users/${userId}`), { role });
    return true;
  } catch (error) {
    console.error('Error updating user role:', error);
    return false;
  }
};

// Работа с конфигурациями
/**
 * Creates a new configuration for a user.
 * @param {string} userId - The user ID.
 * @param {Object} configData - The configuration data.
 * @returns {Promise<string|null>} The new config ID or null on error.
 */
export const createConfig = async (userId, configData) => {
  try {
    const configRef = push(ref(database, 'configs'));
    const configId = configRef.key;
    
    await set(configRef, {
      ...configData,
      id: configId,
      userId,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      collaborators: [userId]
    });
    
    return configId;
  } catch (error) {
    console.error('Error creating config:', error);
    return null;
  }
};

/**
 * Updates an existing configuration.
 * @param {string} configId - The configuration ID.
 * @param {Object} updates - The fields to update.
 * @returns {Promise<boolean>} True if successful, false otherwise.
 */
export const updateConfig = async (configId, updates) => {
  try {
    await update(ref(database, `configs/${configId}`), {
      ...updates,
      updatedAt: new Date().toISOString()
    });
    return true;
  } catch (error) {
    console.error('Error updating config:', error);
    return false;
  }
};

/**
 * Adds a collaborator to a configuration.
 * @param {string} configId - The configuration ID.
 * @param {string} userId - The user ID to add as collaborator.
 * @returns {Promise<boolean>} True if successful, false otherwise.
 */
export const addCollaborator = async (configId, userId) => {
  try {
    const configRef = ref(database, `configs/${configId}`);
    const snapshot = await get(configRef);
    const config = snapshot.val();
    
    if (!config.collaborators.includes(userId)) {
      await update(configRef, {
        collaborators: [...config.collaborators, userId]
      });
    }
    return true;
  } catch (error) {
    console.error('Error adding collaborator:', error);
    return false;
  }
};

// Работа с компонентами
/**
 * Adds a new component to the database.
 * @param {Object} componentData - The component data.
 * @returns {Promise<string|null>} The new component ID or null on error.
 */
export const addComponent = async (componentData) => {
  try {
    const componentRef = push(ref(database, 'components'));
    const componentId = componentRef.key;
    
    await set(componentRef, {
      ...componentData,
      id: componentId,
      createdAt: new Date().toISOString()
    });
    
    return componentId;
  } catch (error) {
    console.error('Error adding component:', error);
    return null;
  }
};

// Добавить тестовый компонент в коллекцию Components (Firestore)
/**
 * Adds a test component to the Firestore 'Components' collection.
 * @returns {Promise<string|null>} The new document ID or null on error.
 */
export const addTestComponentFirestore = async () => {
  const testComponent = {
    category: "CPU",
    name: "Intel Core i9-13900K",
    price: 550,
    image: "https://example.com/cpu.jpg",
    description: "High-end Intel CPU",
    specs: ["24 cores", "32 threads", "3.0 GHz base", "5.8 GHz boost"],
    detailedSpecs: {
      cores: { value: 24, score: 10 },
      threads: { value: 32, score: 10 },
      baseClock: { value: "3.0 GHz", score: 8 },
      boostClock: { value: "5.8 GHz", score: 10 }
    },
    compatibility: {
      socket: "LGA 1700"
    }
  };
  try {
    const docRef = await addDoc(collection(firestore, "Components"), testComponent);
    return docRef.id;
  } catch (error) {
    console.error("Error adding test component to Firestore:", error);
    return null;
  }
};

/**
 * Gets all documents from a Firestore collection.
 * @param {string} collectionName - The Firestore collection name.
 * @returns {Promise<Array>} Array of documents or empty array on error.
 */
export const getCollectionFirestore = async (collectionName) => {
  try {
    const querySnapshot = await getDocs(collection(firestore, collectionName));
    const data = [];
    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() });
    });
    return data;
  } catch (error) {
    console.error(`Error getting collection ${collectionName} from Firestore:`, error);
    return [];
  }
};

/**
 * Gets all configurations for a user from the Realtime Database.
 * @param {string} userId - The user ID.
 * @returns {Promise<Object|null>} The user's configs or null on error.
 */
export const getUserConfigs = async (userId) => {
  try {
    const configsRef = ref(database, 'configs');
    const configsQuery = query(configsRef, orderByChild('userId'), equalTo(userId));
    const snapshot = await get(configsQuery);
    return snapshot.val();
  } catch (error) {
    console.error('Error getting user configs:', error);
    return null;
  }
};

/**
 * Gets all collaborative configurations for a user.
 * @param {string} userId - The user ID.
 * @returns {Promise<Object|null>} The collaborative configs or null on error.
 */
export const getCollaborativeConfigs = async (userId) => {
  try {
    const configsRef = ref(database, 'configs');
    const configsQuery = query(configsRef, orderByChild('collaborators'), equalTo(userId));
    const snapshot = await get(configsQuery);
    return snapshot.val();
  } catch (error) {
    console.error('Error getting collaborative configs:', error);
    return null;
  }
};

// Реал-тайм подписки
/**
 * Subscribes to real-time updates for a specific configuration.
 * @param {string} configId - The configuration ID.
 * @param {function(Object):void} callback - Callback to receive config data.
 * @returns {function} Unsubscribe function.
 */
export const subscribeToConfig = (configId, callback) => {
  const configRef = ref(database, `configs/${configId}`);
  onValue(configRef, (snapshot) => {
    callback(snapshot.val());
  });
  return () => off(configRef);
};

/**
 * Subscribes to real-time updates for all configs of a user.
 * @param {string} userId - The user ID.
 * @param {function(Object):void} callback - Callback to receive configs data.
 * @returns {function} Unsubscribe function.
 */
export const subscribeToUserConfigs = (userId, callback) => {
  const configsRef = ref(database, 'configs');
  const configsQuery = query(configsRef, orderByChild('userId'), equalTo(userId));
  onValue(configsQuery, (snapshot) => {
    callback(snapshot.val());
  });
  return () => off(configsQuery);
};

/**
 * Gets all items from a collection in the Realtime Database.
 * @param {string} collectionName - The collection name.
 * @returns {Promise<Object|null>} The collection data or null on error.
 */
export const getCollection = async (collectionName) => {
  try {
    const snapshot = await get(ref(database, collectionName));
    return snapshot.val();
  } catch (error) {
    console.error(`Error getting collection ${collectionName}:`, error);
    return null;
  }
}; 
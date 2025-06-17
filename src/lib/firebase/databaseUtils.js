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

// Работа с пользователями
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

// Получить все элементы из коллекции (Firestore)
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

// Получение данных
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
export const subscribeToConfig = (configId, callback) => {
  const configRef = ref(database, `configs/${configId}`);
  onValue(configRef, (snapshot) => {
    callback(snapshot.val());
  });
  return () => off(configRef);
};

export const subscribeToUserConfigs = (userId, callback) => {
  const configsRef = ref(database, 'configs');
  const configsQuery = query(configsRef, orderByChild('userId'), equalTo(userId));
  onValue(configsQuery, (snapshot) => {
    callback(snapshot.val());
  });
  return () => off(configsQuery);
};

// Получить все элементы из коллекции
export const getCollection = async (collectionName) => {
  try {
    const snapshot = await get(ref(database, collectionName));
    return snapshot.val();
  } catch (error) {
    console.error(`Error getting collection ${collectionName}:`, error);
    return null;
  }
}; 
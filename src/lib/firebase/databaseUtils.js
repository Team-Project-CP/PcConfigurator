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
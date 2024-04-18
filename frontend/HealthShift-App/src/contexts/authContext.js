import React, { createContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
  const [user, setUser] = useState();

  useEffect(() => {
    async function loadStorage() {
      const storage = await AsyncStorage.getItem('user');
      console.log('LOADSTORAGE')
      if(storage){
        setUser(JSON.parse(storage))
      } 
    }
    loadStorage();
  }, []);

  return (
    <AuthContext.Provider value={{ user, signed: !!user }}>{children}</AuthContext.Provider>
  );
}




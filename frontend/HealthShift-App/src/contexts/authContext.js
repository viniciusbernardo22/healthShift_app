import React, { createContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import firebase from '../services/firebase';
import { Alert } from 'react-native';
import { RemoveUser, SaveUser, USER_KEY } from '../services/globalstorage';

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isAuthLoading, setIsAuthLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  
  useEffect(() => {
    async function loadStorage() {
      
      const storage = await AsyncStorage.getItem(USER_KEY);
      console.log('storage: ', storage);
      if (storage) {
        setUser(JSON.parse(storage));
        setIsLoading(false)
      }
      setIsLoading(false)

    }
    loadStorage();
  }, []);

  useEffect(() => {
    console.log('root: ', user);
    console.log('isLoading: ', isLoading)
  }, [user, isLoading]);

  async function signUp(email, senha) {
    setIsAuthLoading(true);
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, senha)
      .then(() => {
        const user = { email };
        setUser(user);
        SaveUser(user);

        setIsAuthLoading(false);
      })
      .catch((e) => {
        Alert.alert(
          'Atenção',
          'Ocorreu algum erro durante o processo de cadastro.'
        );
        setIsAuthLoading(false);
      });
  }

  async function signIn(email, senha) {
    setIsAuthLoading(true);
    firebase
      .auth()
      .signInWithEmailAndPassword(email, senha)
      .then(() => {
        setIsAuthLoading(false);
        const user = { email };

        setUser(user);
        SaveUser(user);
      })
      .catch(() => {
        setIsAuthLoading(false);

        Alert.alert(
          'Atenção',
          'Ocorreu algum erro durante o processo de login.'
        );
      });
  }

  function signOut(){
    setUser(null);
    RemoveUser();
  }
  return (
    <AuthContext.Provider
      value={{ signed: !!user, user, signUp, signIn, signOut, isAuthLoading, isLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
}

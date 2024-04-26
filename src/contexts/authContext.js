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

  function setLoaders(state) {
    setIsLoading(state);
    setIsAuthLoading(state);
  }

  useEffect(() => {
    async function loadStorage() {
      const storage = await AsyncStorage.getItem(USER_KEY);
      if (storage) {
        setUser(JSON.parse(storage));
        setIsLoading(false);
      }
      setIsLoading(false);
    }
    loadStorage();
  }, []);

  async function signUp(email, senha) {
    setLoaders(true);
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, senha)
      .then(() => {
        const user = { email };
        setUser(user);
        SaveUser(user);

        setLoaders(false);
      })
      .catch((e) => {
        Alert.alert(
          'Atenção',
          'Ocorreu algum erro durante o processo de cadastro.'
        );
        setLoaders(false);
      });
  }

  async function signIn(email, senha) {
    setLoaders(true);

    firebase
      .auth()
      .signInWithEmailAndPassword(email, senha)
      .then(() => {
        setLoaders(false);

        const user = { email };

        setUser(user);
        SaveUser(user);
      })
      .catch(() => {
        setLoaders(false);

        Alert.alert(
          'Atenção',
          'Ocorreu algum erro durante o processo de login.'
        );
      });
  }

  function signOut() {
    setUser(null);
    RemoveUser();
  }
  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        signUp,
        signIn,
        signOut,
        isAuthLoading,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

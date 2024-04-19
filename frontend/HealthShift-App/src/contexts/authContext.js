import React, { createContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import firebase from '../services/firebase';
import { Alert } from 'react-native';
import { SaveUser, USER_KEY } from '../services/globalstorage';

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
      }
    }
    loadStorage();
  }, []);

  useEffect(() => {
    console.log('root: ', user);
  }, [user]);

  async function signUp(email, senha) {
    setIsAuthLoading(true);
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, senha)
      .then(() => {
        const user = { user: { email } };
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
        const user = { user: { email } };
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

  return (
    <AuthContext.Provider
      value={{ signed: !!user, user, signUp, signIn, isAuthLoading, isLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
}

import React, { useContext } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';
import { AuthContext } from '../contexts/authContext';
import { themes } from '../themes/basedThemes';

function Routes() {
  const { signed, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fff',
        }}
      >
        <ActivityIndicator size='large' color={themes.mainColor} />
      </View>
    );
  }
  return signed ? <AppRoutes /> : <AuthRoutes />;
}


export default Routes;

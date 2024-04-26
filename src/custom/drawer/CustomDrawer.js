import React, { useContext } from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { AuthContext } from '../../contexts/authContext';
import { themes } from '../../themes/basedThemes';
export default function CustomDrawer(props) {
  const { signOut, user } = useContext(AuthContext);

  const getUsername = (email) => {
    const indexOfAt = email.indexOf('@');
    const username = email.substring(0, indexOfAt);
    return indexOfAt !== -1 ? username : '';
  };

  return (
    <DrawerContentScrollView {...props}>
      <View
        style={{
          width: '100%',
          height: 85,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 30,
        }}
      >
        <Image
          source={require('../../assets/perfil.png')}
          style={{ width: 65, height: 65 }}
        />

        <Text
          style={{
            color: '#000',
            fontSize: 17,
            marginTop: 5,
            marginBottom: 35,
          }}
        >
          {' '}
          Bem vindo
          {user && (
            <Text style={styles.userTxt}> {getUsername(user.email)}</Text>
          )}{' '}
          !!
        </Text>
      </View>

      <DrawerItemList {...props} />

      <View style={{ flex: 1, alignItems: 'center', marginTop: 30 }}>
        <View style={{ width: '50%', borderRadius: 10, overflow: 'hidden' }}>
          <Button onPress={signOut} title='Sair' color={themes.mainColor} />
        </View>
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 10,
  },
  userTxt: {
    color: themes.mainColor,
    fontWeight: 'bold',
  },
});

import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../screens/Home/home';
import Detail from '../screens/Detail/detail';
const AppDrawer = createDrawerNavigator();

function AppRoutes() {
  return (
    <>
      <AppDrawer.Navigator screenOptions={{ drawerType: 'front' }}>
        <AppDrawer.Screen name='Home' component={Home} />
        <AppDrawer.Screen
          name='Detalhes'
          component={Detail}
          options={{
            drawerItemStyle: { height: 0 },
            headerShown: false,
          }}
        />
      </AppDrawer.Navigator>
    </>
  );
}

export default AppRoutes;

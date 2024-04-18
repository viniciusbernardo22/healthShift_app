import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../screens/Home/home';
import Detail from '../screens/Detail/detail';
import CustomDrawer from '../custom/drawer/CustomDrawer';

const AppDrawer = createDrawerNavigator();

function AppRoutes() {
  return (
    <>
      <AppDrawer.Navigator
        drawerContent={CustomDrawer}
      >
        <AppDrawer.Screen name='Home' component={Home} />
        <AppDrawer.Screen
          name='Detalhes'
          component={Detail}
          
          options={{
            drawerItemStyle: { height: 0 },
            title: 'Detalhes'
          }}
        />
      </AppDrawer.Navigator>
    </>
  );
}

export default AppRoutes;

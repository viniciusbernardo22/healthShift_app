import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../screens/Home/home';
import Detail from '../screens/Detail/detail';
import CustomDrawer from '../custom/drawer/CustomDrawer';
import ShiftProvider from '../contexts/shiftContext';
import Turnos from '../screens/Turnos/turnos';
const AppDrawer = createDrawerNavigator();

function AppRoutes() {
  return (
    <ShiftProvider>
      <AppDrawer.Navigator drawerContent={CustomDrawer}>
        <AppDrawer.Screen name='Home' component={Home} />
        <AppDrawer.Screen
          name='Detalhes'
          component={Detail}
          options={{
            drawerItemStyle: { height: 0 },
            title: 'Detalhes',
          }}
        />
        <AppDrawer.Screen
          name='Turnos'
          component={Turnos}
          options={{
            title: 'Meus turnos',
          }}
        />
      </AppDrawer.Navigator>
    </ShiftProvider>
  );
}

export default AppRoutes;

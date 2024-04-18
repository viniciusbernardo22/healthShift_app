import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../screens/Home/home';

const AppDrawer = createDrawerNavigator();

function AppRoutes() {
  return (
    <AppDrawer.Navigator>
      <AppDrawer.Screen name='Home' component={Home} />
      <AppDrawer.Screen name='Perfil' component={Home} />
      <AppDrawer.Screen name='Turnos' component={Home} />
    </AppDrawer.Navigator>
  );
}

export default AppRoutes;

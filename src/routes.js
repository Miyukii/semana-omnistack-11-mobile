import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import IncidentsScreen from './pages/Incidents';
import DetailScreen from './pages/Detail';

const AppStack = createStackNavigator();

export default function Routes(){
  return(
    <NavigationContainer> 
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="Incidents" component={IncidentsScreen} />
        <AppStack.Screen name="Detail" component={DetailScreen} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
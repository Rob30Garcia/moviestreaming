import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { View, Text } from 'react-native';

import HomeScreen from '../../src/Screens/Home';
import ProfileScreen from '../../src/Screens/Profile';
import RecentsScreen from '../../src/Screens/Recents';

const Tab = createMaterialBottomTabNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#02ad94"
        inactiveColor="#dedede"
        style={{backgroundColor: '#000'}}
        barStyle={{backgroundColor: '#0f0f0f', padding: 4}}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Recents" component={RecentsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
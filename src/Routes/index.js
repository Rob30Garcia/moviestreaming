import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

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
        <Tab.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            tabBarLabel:'',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name='home' color={color} size={28}/>
            )
          }}
        />

        <Tab.Screen 
          name="Profile" 
          component={ProfileScreen} 
          options={{
            tabBarLabel:'',
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name='camera-metering-spot' color={color} size={28}/>
            ),
          }}
        />

        <Tab.Screen 
          name="Recents" 
          component={RecentsScreen} 
          options={{
            tabBarLabel:'',
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name='account' color={color} size={28}/>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
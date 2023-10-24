import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{headerShown: false}}>
          {props => <BottomTabNavigator {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Wallet" options={{headerShown: false}}>
          {props => <BottomTabNavigator {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Profile" options={{headerShown: false}}>
          {props => <BottomTabNavigator {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Auth/Login';
import Splash from '../screens/Auth/Splash';
import Signup from '../screens/Auth/Signup';
import QualifiedDoctors from '../screens/Onboarding/QualifiedDoctors';
import Bestchemist from '../screens/Onboarding/Bestchemist';
import EasyAppointment from '../screens/Onboarding/EasyAppointment';
import {faL} from '@fortawesome/free-solid-svg-icons';
import Home from '../screens/Home/Home';
import VerifyOtp from '../screens/Auth/VerifyOtp';
import ForgotPassword from '../screens/Auth/ForgotPassword';
import ResetPassword from '../screens/Auth/ResetPassword';
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

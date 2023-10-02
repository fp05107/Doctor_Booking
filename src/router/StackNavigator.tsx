import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Auth/Login';
import Splash from '../screens/Auth/Splash';
import Signup from '../screens/Auth/Signup';
import QualifiedDoctors from '../screens/Onboarding/QualifiedDoctors';
import Bestchemist from '../screens/Onboarding/Bestchemist';
import EasyAppointment from '../screens/Onboarding/EasyAppointment';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" options={{headerShown: false}}>
          {props => <Splash {...props} />}
        </Stack.Screen>
        <Stack.Screen name="SignUp" options={{headerShown: false}}>
          {props => <Signup {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Login" options={{headerShown: false}}>
          {props => <Login {...props} />}
        </Stack.Screen>
        <Stack.Screen name="QualifiedDoctors" options={{headerShown: false}}>
          {props => <QualifiedDoctors {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Bestchemist" options={{headerShown: false}}>
          {props => <Bestchemist {...props} />}
        </Stack.Screen>
        <Stack.Screen name="EasyAppointment" options={{headerShown: false}}>
          {props => <EasyAppointment {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

import React, {useState} from 'react';
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

const Stack = createStackNavigator();

const StackNavigator = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<Boolean>(false);
  const [loaded, setLoaded] = useState<Boolean>(true);

  if (loaded) {
    return (
      <NavigationContainer>
        {!isLoggedIn ? (
          <Stack.Navigator>
            <Stack.Screen name="Login" options={{headerShown: false}}>
              {props => <Login {...props} />}
            </Stack.Screen>
            <Stack.Screen name="SignUp" options={{headerShown: false}}>
              {props => <Signup {...props} />}
            </Stack.Screen>
            <Stack.Screen
              name="VerifyOtp"
              options={{headerShown: false}}>
              {props => <VerifyOtp {...props} />}
            </Stack.Screen>
          
          </Stack.Navigator>
        ) : (
          <Stack.Navigator>
            <Stack.Screen
              name="QualifiedDoctors"
              options={{headerShown: false}}>
              {props => <QualifiedDoctors {...props} />}
            </Stack.Screen>
            <Stack.Screen
              name="Home"
              options={{headerShown: false}}>
              {props => <Home {...props} />}
            </Stack.Screen>
            <Stack.Screen name="Bestchemist" options={{headerShown: false}}>
              {props => <Bestchemist {...props} />}
            </Stack.Screen>
            <Stack.Screen name="EasyAppointment" options={{headerShown: false}}>
              {props => <EasyAppointment {...props} />}
            </Stack.Screen>
          </Stack.Navigator>
        )}
      </NavigationContainer>
    );
  } else {
    return <Splash />;
  }
};

export default StackNavigator;

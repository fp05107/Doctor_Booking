import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home/Home';
import Profile from '../screens/Profile/Profile';
import Chat from '../screens/Chat/Chat';

const Tab = createBottomTabNavigator();


const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#00FFFF',
        tabBarActiveBackgroundColor: '#0D0D0D',
        tabBarInactiveBackgroundColor: '#0D0D0D',
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../../assets/BottomTabIcons/home.png')}
              style={{width: 25, height: 25, tintColor: color}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../../assets/BottomTabIcons/wallet.png')}
              style={{width: 25, height: 25, tintColor: color}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../../assets/BottomTabIcons/profile.png')}
              style={{width: 20, height: 25, tintColor: color}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

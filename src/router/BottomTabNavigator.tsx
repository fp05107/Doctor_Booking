import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home/Home';
import Wallet from '../screens/Wallet/Wallet';
import Location from '../screens/Location/Location';
import Shop from '../screens/Shop/Shop';
import Profile from '../screens/Profile/Profile';

const Tab = createBottomTabNavigator();

type BottomTabNavigationProp = {
  navigation: any;
};

const BottomTabNavigator = ({navigation}: BottomTabNavigationProp) => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#00FFFF',
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
        name="Wallet"
        component={Wallet}
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
        name="Location"
        component={Location}
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../../assets/BottomTabIcons/location.png')}
              style={{width: 20, height: 27, tintColor: color}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Shop"
        component={Shop}
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../../assets/BottomTabIcons/shop.png')}
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

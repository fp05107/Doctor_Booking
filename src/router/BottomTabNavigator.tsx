import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home/Home';
import {Image} from 'native-base';

const Tab = createBottomTabNavigator();

type BottomTabNavigationProp = {
  navigation: any;
};

const BottomTabNavigator = ({navigation}: BottomTabNavigationProp) => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../../assets/BottomTabIcons/home.png')}
              style={{width: 50, height: 50, tintColor: 'red'}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

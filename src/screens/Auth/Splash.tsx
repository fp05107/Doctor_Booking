import {ImageBackground} from 'react-native';
import React, {useEffect} from 'react';
import {StackNavigationProp} from '@react-navigation/stack'; // Import the necessary type

// Define the type for the navigation prop
type SplashNavigationProp = {
  navigation: any;
};

const Splash = ({navigation}: SplashNavigationProp) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('SignUp');
    }, 0);
  });
  return (
    <ImageBackground
      style={{flex: 1}}
      source={require('../../../assets/BackgroundImages/splashbg.png')}></ImageBackground>
  );
};

export default Splash;

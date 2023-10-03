import {ImageBackground} from 'react-native';
import React from 'react';

const Splash = () => {
  return (
    <ImageBackground
      style={{flex: 1}}
      source={require('../../../assets/BackgroundImages/splashbg.png')}></ImageBackground>
  );
};

export default Splash;

import {View, Text} from 'react-native';
import React from 'react';

type HomeNavigationProp = {
  navigation: any;
};

const Home = ({navigation}: HomeNavigationProp) => {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

export default Home;

import 'react-native-gesture-handler';
import {View, Text} from 'react-native';
import React from 'react';
import StackNavigator from './src/router/StackNavigator';
import {NativeBaseProvider} from 'native-base';

const App = () => {
  return (
    <NativeBaseProvider>
      <StackNavigator />
    </NativeBaseProvider>
  );
};

export default App;

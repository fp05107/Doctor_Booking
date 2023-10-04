import {View, Text, ImageBackground} from 'react-native';
import React from 'react';
import {Box, ScrollView} from 'native-base';
import Globals from '../../config/constants.config';

type ResetPasswordProps = {
  navigation: any;
};
const ResetPassword = ({navigation}: ResetPasswordProps) => {
  return (
    <ScrollView>
      <ImageBackground
        style={{flex: 1, height: Globals.windowHeight}}
        source={require('../../../assets/BackgroundImages/allscreenbg.png')}>
        <Box w={'95%'} alignSelf={'center'} mt={10} p={5} alignItems={'center'}>
          <Text>ForgotPassword</Text>
        </Box>
      </ImageBackground>
    </ScrollView>
  );
};

export default ResetPassword;

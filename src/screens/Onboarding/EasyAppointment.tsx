import {View, ImageBackground, Image} from 'react-native';
import React from 'react';
import {Box, Heading, Pressable, ScrollView, Text} from 'native-base';
import Globals from '../../config/constants.config';
import {COLORS} from '../../config/colors.config';
import LinearGradient from 'react-native-linear-gradient';

type EasyAppointmentProp = {
  navigation: any;
};

const EasyAppointment = ({navigation}: EasyAppointmentProp) => {
  const handleSkipPress = () => {
    navigation.navigate('Home');
  };
  return (
    <ScrollView>
      <ImageBackground
        style={{flex: 1, height: Globals.windowHeight}}
        source={require('../../../assets/BackgroundImages/allscreenbg.png')}>
        <Box w={'100%'} alignSelf={'center'} mt={10} >
          <Image
            source={require('../../../assets/BackgroundImages/easyappointment.png')}
            style={{
              width: '90%',
              height: Globals.windowHeight * 0.45,
              alignSelf: 'center',
            }}
          />
          <Box w={'90%'} alignItems={'center'} alignSelf={'center'} mt={5}>
            <Heading size="lg" color={COLORS.White}>
              Choose Best Chemist
            </Heading>
          </Box>
          <Box
            w={'90%'}
            alignItems={'center'}
            alignSelf={'center'}
            h={100}
            mt={5}>
            <Text size={'xs'} color={COLORS.White} textAlign={'center'}>
              VHA’s partnered Chemists have the Biggest Range & Best Discount
              Prices on all Supplements, Prescription Medicines & Health
              Products
            </Text>
          </Box>
          <Box w={'90%'} alignItems={'center'} alignSelf={'center'} mt={5}>
            <LinearGradient
              style={{borderRadius: 10, marginTop: 20, marginBottom: 5}}
              colors={['#46AA72', '#3FA780', '#38A58D']}>
              <Pressable
                // onPress={handleForgotPasswordPress}
                paddingX={130}
                paddingY={3}>
                <Text color={COLORS.White}>Get Started</Text>
              </Pressable>
            </LinearGradient>
          </Box>
          <Box w={'90%'} alignItems={'center'} alignSelf={'center'} mt={5}>
            <Pressable onPress={handleSkipPress} paddingY={3}>
              <Text color={COLORS.White}>Skip</Text>
            </Pressable>
          </Box>
        </Box>
      </ImageBackground>
    </ScrollView>
  );
};

export default EasyAppointment;

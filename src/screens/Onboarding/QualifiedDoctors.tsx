import {View, ImageBackground, Image} from 'react-native';
import React from 'react';
import {Box, Heading, Pressable, ScrollView, Text} from 'native-base';
import Globals from '../../config/constants.config';
import {COLORS} from '../../config/colors.config';
import LinearGradient from 'react-native-linear-gradient';

type QualifiedDoctorProp = {
  navigation: any;
};

const QualifiedDoctors = ({navigation}: QualifiedDoctorProp) => {

  const handleSkipPress = () =>{
    navigation.navigate("Bestchemist")
  }

  return (
    <ScrollView>
      <ImageBackground
        style={{flex: 1, height: Globals.windowHeight}}
        source={require('../../../assets/BackgroundImages/allscreenbg.png')}>
        <Box w={'100%'} alignSelf={'center'}>
          <Image
            source={require('../../../assets/BackgroundImages/qualifieddoctors.png')}
            style={{
              width: '85%',
              height: Globals.windowHeight * 0.53,
            }}
          />
          <Box w={'90%'} alignItems={'center'} alignSelf={'center'} mt={5}>
            <Heading size="lg" color={COLORS.White}>
              Find Qualified Doctors
            </Heading>
          </Box>
          <Box
            w={'90%'}
            alignItems={'center'}
            alignSelf={'center'}
            h={100}
            mt={5}>
            <Text size={'xs'} color={COLORS.White} textAlign={'center'}>
              VHA conducts third party background checks for the doctors and
              chemist stores before getting them on-board. VHA has its own
              compliance team to monitor and ensure everything is complying with
              the regulations
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
            <Pressable
              onPress={handleSkipPress}
              paddingY={3}>
              <Text color={COLORS.White}>Skip</Text>
            </Pressable>
          </Box>
        </Box>
      </ImageBackground>
    </ScrollView>
  );
};

export default QualifiedDoctors;

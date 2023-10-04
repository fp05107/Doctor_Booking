import {View, ImageBackground, Image} from 'react-native';
import React from 'react';
import {
  Box,
  HStack,
  Heading,
  Input,
  Pressable,
  ScrollView,
  VStack,
  Text,
} from 'native-base';
import Globals from '../../config/constants.config';
import LinearGradient from 'react-native-linear-gradient';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faFacebook, faGoogle} from '@fortawesome/free-brands-svg-icons';
import {COLORS} from '../../config/colors.config';
import styles from '../../styles/Signup.styles';
import GlobalStyles from '../../styles/Global.styles';

type ForgotPasswordProps = {
  navigation: any;
};
const ForgotPassword = ({navigation}: ForgotPasswordProps) => {
  const handleForgotPasswordPress = () => {};

  return (
    <ScrollView>
      <ImageBackground
        style={{flex: 1, height: Globals.windowHeight}}
        source={require('../../../assets/BackgroundImages/allscreenbg.png')}>
        <Box w={'95%'} alignSelf={'center'} mt={10} p={5} alignItems={'center'}>
          <Image
            source={require('../../../assets/BackgroundImages/signupheader.png')}
            style={{
              width: '95%',
              height: Globals.windowHeight * 0.1,
              marginVertical: 10,
            }}
          />
          <Heading mt={10} size="lg" color={COLORS.White}>
            Forgot Password
          </Heading>
          <Box h={100} mt={5}>
            <Text size={'xs'} color={COLORS.White} textAlign={'center'}>
              Enter your email for the verification proccesss, we will send 4
              digits code to your email.
            </Text>
          </Box>
          <VStack w={'100%'} space={5}>
            <Input
              placeholderTextColor={COLORS.InputPlaceholder}
              style={GlobalStyles.inputStyles}
              variant="filled"
              placeholder="Email"
              // value={formData.email}
              // onChangeText={(value: string) => handleChange('email', value)}
            />
          </VStack>
          <LinearGradient
            style={{borderRadius: 10, marginTop: 20, marginBottom: 5}}
            colors={['#46AA72', '#3FA780', '#38A58D']}>
            <Pressable
              onPress={handleForgotPasswordPress}
              paddingX={130}
              paddingY={3}>
              <Text color={COLORS.White}>Continue</Text>
            </Pressable>
          </LinearGradient>
        </Box>
      </ImageBackground>
    </ScrollView>
  );
};

export default ForgotPassword;

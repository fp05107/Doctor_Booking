import React, {useRef, useState} from 'react';
import {StyleSheet, ScrollView, ImageBackground, Image} from 'react-native';

import OTPTextView from 'react-native-otp-textinput';
import Globals from '../../config/constants.config';
import {Box, Pressable, Text} from 'native-base';
import {COLORS} from '../../config/colors.config';
import LinearGradient from 'react-native-linear-gradient';

type VerifyOtpProp = {
  navigation: any;
};

const VerifyOtp = ({navigation}: VerifyOtpProp) => {
  const [otpInput, setOtpInput] = useState<string>('');

  const input = useRef<OTPTextView>(null);
  const handleCellTextChange = async (text: string, i: number) => {};
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
          <Text marginY={5} color={COLORS.White}>
            Enter 4 digit OTP sent to your registered email
          </Text>
          <OTPTextView
            handleTextChange={() => {}}
            containerStyle={styles.textInputContainer}
            textInputStyle={styles.roundedTextInput}
            inputCount={4}
            inputCellLength={1}
          
          />
          <LinearGradient
            style={{borderRadius: 10, marginTop: 20, marginBottom: 5}}
            colors={['#46AA72', '#3FA780', '#38A58D']}>
            <Pressable paddingX={100} paddingY={3}>
              <Text color={COLORS.White}>Verify Otp</Text>
            </Pressable>
          </LinearGradient>
        </Box>
      </ImageBackground>
    </ScrollView>
  );
};

export default VerifyOtp;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 5,
    paddingVertical: 20,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
    color: '#333333',
    marginBottom: 10,
  },
  textInputContainer: {
    marginBottom: 20,
  },
  roundedTextInput: {
    borderRadius: 10,
    borderWidth: 4,
    color: COLORS.White
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
    width: '60%',
    gap: 20,
  },
  textInput: {
    height: 40,
    width: '80%',
    borderColor: '#000',
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    letterSpacing: 5,
    marginBottom: 10,
    textAlign: 'center',
  },
});

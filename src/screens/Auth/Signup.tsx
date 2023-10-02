import {
  View,
  ImageBackground,
  TextInput,
  ScrollView,
  Image,
} from 'react-native';
import React from 'react';
import styles from '../../styles/Signup.styles';
import Globals from '../../config/constants.config';
import {
  Box,
  Heading,
  Text,
  HStack,
  Pressable,
  VStack,
  Input,
  Button,
} from 'native-base';
import {COLORS} from '../../config/colors.config';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faFacebook, faGoogle} from '@fortawesome/free-brands-svg-icons';
import GlobalStyles from '../../styles/Global.styles';
import LinearGradient from 'react-native-linear-gradient';

type SignupNavigationProp = {
  navigation: any;
};

const Signup = ({navigation}: SignupNavigationProp) => {
  return (
    <ScrollView style={{flex: 1}}>
      <ImageBackground
        style={{flex: 1, height: Globals.windowHeight}}
        source={require('../../../assets/BackgroundImages/allscreenbg.png')}>
        <Box
          w={'95%'}
          alignSelf={'center'}
          // borderWidth={3}
          // borderColor={'red.100'}
          mt={10}
          p={5}
          alignItems={'center'}>
          <Heading size="lg" color={COLORS.White}>
            Sign Up
          </Heading>
          <Image
            source={require('../../../assets/BackgroundImages/signupheader.png')}
            style={{
              width: '95%',
              height: Globals.windowHeight * 0.1,
              marginVertical: 10,
            }}
          />
          <Box h={100} mt={5}>
            <Text size={'xs'} color={COLORS.White} textAlign={'center'}>
              VHA is an innovated, automated system and the very first
              blockchain based Virtual Health Assistant that will provide
              immediate medical assistance to the patients 24/7.
            </Text>
          </Box>
          <HStack marginY={5} w={'95%'} justifyContent={'space-between'}>
            <Pressable style={styles.fbGoogleBtn}>
              <FontAwesomeIcon color={COLORS.White} icon={faGoogle} />
              <Text color={COLORS.White}>Facebook</Text>
            </Pressable>
            <Pressable style={styles.fbGoogleBtn}>
              <FontAwesomeIcon color={COLORS.White} icon={faFacebook} />
              <Text color={COLORS.White}>Facebook</Text>
            </Pressable>
          </HStack>
          <VStack w={'100%'} space={5}>
            <Input
              placeholderTextColor={COLORS.InputPlaceholder}
              style={GlobalStyles.inputStyles}
              variant="filled"
              placeholder="Name"
            />
            <Input
              placeholderTextColor={COLORS.InputPlaceholder}
              style={GlobalStyles.inputStyles}
              variant="filled"
              placeholder="Email"
            />
            <Input
              placeholderTextColor={COLORS.InputPlaceholder}
              style={GlobalStyles.inputStyles}
              variant="filled"
              placeholder="Password"
            />
          </VStack>
          <LinearGradient colors={['#46AA72', '#3FA780', '#38A58D']}>
            {/* <Button bgColor={'#46AA72'} w={'80%'} marginY={5} p={3} size="sm"> */}
            <Text> Sign Up</Text>
            {/* </Button> */}
          </LinearGradient>
          <HStack>
            <Text color={COLORS.Secondary}>Have an account?</Text>
            <Pressable>
              <Text color={COLORS.Secondary}> Login</Text>
            </Pressable>
          </HStack>
        </Box>
      </ImageBackground>
    </ScrollView>
  );
};

export default Signup;

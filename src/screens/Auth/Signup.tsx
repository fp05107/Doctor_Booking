import {
  View,
  ImageBackground,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import styles from '../../styles/Signup.styles';
import Globals from '../../config/constants.config';
import {
  Box,
  Image,
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
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import GlobalStyles from '../../styles/Global.styles';

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
            size={'xl'}
            alt="signup"
          />
          <Box h={100}>
            <Text size={'xs'} color={COLORS.White} textAlign={'center'}>
              VHA is an innovated, automated system and the very first
              blockchain based Virtual Health Assistant that will provide
              immediate medical assistance to the patients 24/7.
            </Text>
          </Box>
          <HStack marginY={5} w={'95%'} justifyContent={'space-between'}>
            <Pressable style={styles.fbGoogleBtn}>
              <FontAwesomeIcon color={COLORS.White} icon={faFacebook} />
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
              placeholder="Filled"
            />
            <Input
              placeholderTextColor={COLORS.InputPlaceholder}
              style={GlobalStyles.inputStyles}
              variant="filled"
              placeholder="Filled"
            />
            <Input
              placeholderTextColor={COLORS.InputPlaceholder}
              style={GlobalStyles.inputStyles}
              variant="filled"
              placeholder="Filled"
            />
          </VStack>
          <Button bgColor={'#46AA72'} w={'80%'} marginY={5} p={3} size="sm">
            Sign Up
          </Button>
          <HStack>
            <Text color={COLORS.White}>Have an account?</Text>
            <Pressable>
              <Text color={COLORS.White}> Login</Text>
            </Pressable>
          </HStack>
        </Box>
      </ImageBackground>
    </ScrollView>
  );
};

export default Signup;

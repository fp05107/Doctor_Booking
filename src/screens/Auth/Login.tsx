import {
  View,
  ImageBackground,
  TextInput,
  ScrollView,
  Image,
} from 'react-native';
import React, {useState} from 'react';
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
  StatusBar,
} from 'native-base';
import {COLORS} from '../../config/colors.config';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faFacebook, faGoogle} from '@fortawesome/free-brands-svg-icons';
import GlobalStyles from '../../styles/Global.styles';
import LinearGradient from 'react-native-linear-gradient';

type LoginProps = {
  navigation: any;
};
interface FormData {
  email: string;
  password: string;
}
const Login = ({navigation}: LoginProps) => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
  });
  const handleChange = (name: keyof FormData, value: string) => {
    setFormData({...formData, [name]: value});
  };

  const handleJoinusPress = () => {
    navigation.navigate('SignUp');
  };

  const handleLoginPress = () => {

  }

  const handleForgotPassword = () => {
    navigation.navigate("VerifyOtp");
  }

  return (
    <ScrollView style={{flex: 1}}>
      <StatusBar animated={true} backgroundColor={COLORS.Secondary} />
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
          <Heading size="lg" color={COLORS.White}>
            Welcome Back
          </Heading>
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
              <Text color={COLORS.White}>Google</Text>
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
              placeholder="Email"
              value={formData.email}
              onChangeText={(value: string) => handleChange('email', value)}
            />
            <Input
              placeholderTextColor={COLORS.InputPlaceholder}
              style={GlobalStyles.inputStyles}
              variant="filled"
              placeholder="Password"
              value={formData.password}
              onChangeText={(value: string) => handleChange('password', value)}
            />
          </VStack>
          <LinearGradient
            style={{borderRadius: 10, marginTop: 20, marginBottom: 5}}
            colors={['#46AA72', '#3FA780', '#38A58D']}>
            <Pressable onPress={handleLoginPress} paddingX={130} paddingY={3}>
              <Text color={COLORS.White}>Login</Text>
            </Pressable>
          </LinearGradient>

          <Pressable onPress={handleForgotPassword} >
            <Text color={COLORS.Secondary}> Forgot Password?</Text>
          </Pressable>
          <HStack mt={20}>
            <Text color={COLORS.Secondary}> Don't Have an Account?</Text>
            <Pressable onPress={handleJoinusPress}>
              <Text color={COLORS.Secondary}> Join Us</Text>
            </Pressable>
          </HStack>
        </Box>
      </ImageBackground>
    </ScrollView>
  );
};

export default Login;

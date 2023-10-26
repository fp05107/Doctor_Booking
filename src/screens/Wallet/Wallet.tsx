import {View, ImageBackground, ScrollView} from 'react-native';
import React from 'react';
import Globals from '../../config/constants.config';
import {Box, Heading, Text, Image, Pressable} from 'native-base';
import {COLORS} from '../../config/colors.config';
import LinearGradient from 'react-native-linear-gradient';

type WalletScreenProps = {
  navigation: any;
};

const Wallet = ({navigation}: WalletScreenProps) => {
  return (
    <ScrollView>
      <ImageBackground
        style={{flex: 1, height: Globals.windowHeight}}
        source={require('../../../assets/BackgroundImages/allscreenbg.png')}>
        <Box mt={5} w={'90%'} alignSelf={'center'}>
          <Heading size={'md'} color={COLORS.White}>
            Introducing easy payment gateway
          </Heading>
          <Heading size={'lg'} color={COLORS.Primary}>
            VHA Token
          </Heading>
        </Box>
        <Box mt={5} w={'90%'} alignSelf={'center'} display={'flex'}>
          <Heading size={'2xl'} color={COLORS.White}>
            Zero Fee With
            <Heading size={'2xl'} color={COLORS.Primary}>
              {'  '}VHA Token
            </Heading>
          </Heading>
        </Box>
        <Box w={'85%'} alignSelf={'center'} mt={10}>
          <Text
            color={COLORS.White}
            style={{fontSize: 16}}
            ellipsizeMode={'tail'}>
            VHA will charge 10% commission for all the appointments made through
            VHA, 5% will be distributed to token holders and other 5% will go to
            the development
          </Text>
        </Box>
        <Box w={'90%'} alignSelf={'center'} mt={10}>
          <Image
            size={'2xl'}
            alt="image"
            style={{width: '95%', height: Globals.windowHeight * 0.26}}
            source={require('../../../assets/wallet/vhatoken.png')}
          />
        </Box>
        <Box w={'90%'} alignSelf={'center'} mt={5} >
          <LinearGradient
            style={{borderRadius: 10, marginTop: 20, marginBottom: 5}}
            colors={['#46AA72', '#3FA780', '#38A58D']}>
            <Pressable alignItems={'center'} paddingY={3}>
              <Text color={COLORS.White}>Connect Wallet</Text>
            </Pressable>
          </LinearGradient>

          <Pressable alignItems={'center'} paddingY={3}>
            <Text color={COLORS.White}>Continue without Wallet</Text>
          </Pressable>
        </Box>
      </ImageBackground>
    </ScrollView>
  );
};

export default Wallet;

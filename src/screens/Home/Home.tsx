import {View, ImageBackground} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import {
  Box,
  HStack,
  Heading,
  VStack,
  Text,
  Avatar,
  StatusBar,
  Pressable,
  FlatList,
  Image,
} from 'native-base';
import {COLORS} from '../../config/colors.config';
import Globals from '../../config/constants.config';
import {CommonDisease, commonDiseases} from '../../Data/HomeData';

type HomeNavigationProp = {
  navigation: any;
};

const Home = ({navigation}: HomeNavigationProp) => {
  const handleProfilePress = () => {
    navigation.navigate('Profile');
  };

  const renderDiseases = ({item}: {item: CommonDisease}) => {
    return (
      <Box bg={item.backgroundColor}>
        <Image source={item.icon} alt="image" size={'md'} />
        <Text>{item.name}</Text>
      </Box>
    );
  };

  return (
    <SafeAreaView>
      <StatusBar backgroundColor={COLORS.Secondary} />

      <LinearGradient colors={['#46AA72', '#2DA0A4']}>
        <HStack p={3} justifyContent={'space-between'}>
          <VStack>
            <Text color={COLORS.White}>Hi Olivia Doe </Text>
            <Heading color={COLORS.White}>Welcome To VHA</Heading>
          </VStack>
          <Pressable onPress={handleProfilePress}>
            <Avatar
              bg="green.500"
              size={'lg'}
              source={require('../../../assets/HomeScreenImages/profile.png')}>
              AJ
            </Avatar>
          </Pressable>
        </HStack>
      </LinearGradient>

      {/* <ImageBackground
        style={{flex: 1, height: Globals.windowHeight}}
        source={require('../../../assets/BackgroundImages/allscreenbg.png')}> */}
        <Box w={'95%'} bgColor={'red.100'}>
          <Heading color={COLORS.White}>Common Dieases</Heading>
          <FlatList data={commonDiseases} renderItem={renderDiseases} horizontal />
        </Box>
      {/* </ImageBackground> */}
    </SafeAreaView>
  );
};

export default Home;

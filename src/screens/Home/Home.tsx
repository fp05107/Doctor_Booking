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
  ScrollView,
} from 'native-base';
import {COLORS} from '../../config/colors.config';
import Globals from '../../config/constants.config';
import {
  CommonDisease,
  Doctor,
  Doctors,
  Stores,
  Store,
  commonDiseases,
} from '../../Data/HomeData';
import {Rating, AirbnbRating} from 'react-native-ratings';

type HomeNavigationProp = {
  navigation: any;
};

const Home = ({navigation}: HomeNavigationProp) => {
  const handleProfilePress = () => {
    navigation.navigate('Profile');
  };

  const renderDiseases = ({item}: {item: CommonDisease}) => {
    return (
      <Box
        h={Globals.windowHeight * 0.11}
        w={Globals.windowWidth * 0.19}
        bg={item.backgroundColor}
        p={3}
        m={2}
        borderRadius={5}
        justifyContent={'center'}
        alignItems={'center'}>
        <Image
          source={item.icon}
          alt="image"
          style={{
            height: '60%',
            width: '80%',
          }}
        />
        <Text color={'#FFF'}>{item.name}</Text>
      </Box>
    );
  };

  const renderDoctors = ({item}: {item: Doctor}) => {
    return (
      <Box
        bg={'#222338'}
        alignItems={'center'}
        borderRadius={10}
        m={2}
        h={Globals.windowHeight * 0.16}
        pb={3}
        w={Globals.windowWidth * 0.3}>
        <Avatar source={item.icon} size={'lg'} marginY={2} ></Avatar>
        <Heading size={'xs'} color={COLORS.White}>
          {item.name}
        </Heading>
        <Text size={'xs'} color={COLORS.White}>
          {item.ratePerHour}
        </Text>
      </Box>
    );
  };

  const renderStores = ({item}: {item: Store}) => {
    return (
      <Box
        bg={'#222338'}
        alignItems={'center'}
        borderRadius={10}
        m={2}
        h={Globals.windowHeight * 0.32}
        pb={3}
        w={Globals.windowWidth * 0.5}>
        <Image
          style={{width: '100%', height: '70%'}}
          source={item.image}
          alt="image"
          mb={3}
        />

        <Rating
          type="heart"
          ratingCount={5}
          imageSize={20}
          ratingBackgroundColor={'red'}
          tintColor="rgba(0, 0, 0, 1)"
        />
        <Heading textAlign={'center'} color={COLORS.White} size={'sm'}>
          {item.name}
        </Heading>
        <Text textAlign={'center'} color={COLORS.White} size={'md'}>
          Medical Store
        </Text>
      </Box>
    );
  };

  return (
    <View>
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
      <ScrollView>
        <ImageBackground
          style={{flex: 1, height: Globals.windowHeight}}
          source={require('../../../assets/BackgroundImages/allscreenbg.png')}>
          <Box w={'95%'} borderWidth={1} alignSelf={'center'} mt={3}>
            <Heading size={'md'} color={COLORS.White}>
              Common Dieases
            </Heading>
            <FlatList
              data={commonDiseases}
              renderItem={renderDiseases}
              horizontal
            />
          </Box>
          <Box w={'95%'} borderWidth={1} alignSelf={'center'} mt={3}>
            <Heading size={'md'} color={COLORS.White}>
              Medical Stores
            </Heading>

            <FlatList renderItem={renderStores} data={Stores} horizontal />
          </Box>
          <Box w={'95%'} borderWidth={1} alignSelf={'center'} mt={3}>
            <Heading size={'md'} color={COLORS.White}>
              Qualified Doctors
            </Heading>

            <FlatList renderItem={renderDoctors} data={Doctors} horizontal />
          </Box>
        </ImageBackground>
      </ScrollView>
    </View>
  );
};

export default Home;

import {View} from 'react-native';
import React from 'react';
import {Box, Avatar, VStack, Text, HStack} from 'native-base';
import {StyleSheet} from 'react-native';

const Profile = () => {
  return (
    <View>
      <Box mt={10}>
        <Avatar
          bg="purple.600"
          alignSelf="center"
          size="2xl"
          source={{
            uri: 'https://images.unsplash.com/photo-1510771463146-e89e6e86560e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80',
          }}>
          RB
        </Avatar>
      </Box>
      <VStack
        alignSelf={'center'}
        justifyContent={'center'}
        alignItems={'center'}>
        <Text fontSize="2xl">Subham Sahoo</Text>
        <Text fontSize="md">Website: https://subham-sahoo.vercel.app</Text>
        <Text fontSize="md">Address: Soro, Odisha</Text>
      </VStack>

      <VStack
        width={'90%'}
        alignSelf={'center'}
        borderWidth={StyleSheet.hairlineWidth}
        borderRadius={5}
        marginY={3}
        paddingLeft={5}>
        <Text fontSize="xl">About</Text>
      </VStack>
      <VStack
        width={'90%'}
        alignSelf={'center'}
        borderWidth={StyleSheet.hairlineWidth}
        borderRadius={5}
        marginY={3}
        paddingLeft={5}>
        <Text fontSize="xl">About</Text>
      </VStack>
      <VStack
        width={'90%'}
        alignSelf={'center'}
        borderWidth={StyleSheet.hairlineWidth}
        borderRadius={5}
        marginY={3}
        paddingLeft={5}>
        <Text fontSize="xl">About</Text>
      </VStack>
      <VStack
        width={'90%'}
        alignSelf={'center'}
        borderWidth={StyleSheet.hairlineWidth}
        borderRadius={5}
        marginY={3}
        paddingLeft={5}>
        <Text fontSize="xl">About</Text>
      </VStack>
    </View>
  );
};

export default Profile;

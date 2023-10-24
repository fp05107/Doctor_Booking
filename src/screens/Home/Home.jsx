import {View, Text} from 'react-native';
import React from 'react';
import {FlatList} from 'native-base';
import Post from '../../components/Post';

const Home = () => {
  const renderPosts = () => {
    return <Post />;
  };
  return (
    <View>
      <FlatList renderItem={renderPosts} data={[1, 2, 3, 4]} />
    </View>
  );
};

export default Home;

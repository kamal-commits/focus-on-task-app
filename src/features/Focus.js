import React from 'react';
import { Text, View } from 'react-native';

const Focus = ({ tasks }) => {
  return (
    <View>
      <Text>All Tasks</Text>
      <Text>{tasks}</Text>
    </View>
  );
};

export default Focus;

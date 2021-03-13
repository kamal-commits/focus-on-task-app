import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function CustomHeading({ text }) {
  return (
    <View>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 80,
    marginTop: 20,
  },
});

import React from 'react';
import { StyleSheet, View } from 'react-native';
import CustomButton from '../../components/CustomButton';

export default function Timing({ onTimeChange }) {
  return (
    <View style={styles.main}>
      <CustomButton text={10} handleSubmit={() => onTimeChange(10)} />
      <CustomButton text={20} handleSubmit={() => onTimeChange(20)} />
      <CustomButton text={30} handleSubmit={() => onTimeChange(30)} />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 50,
  },
});

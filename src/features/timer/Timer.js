import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CountDown from '../../components/CountDown';
import CustomButton from '../../components/CustomButton';
import CustomText from '../../components/CustomText';

export default function Timer({ tasks }) {
  const [isStarted, setIsStarted] = useState(false);
  return (
    <View>
      <CountDown isPaused={!isStarted} />
      <CustomText text={`Focuses on :  ${tasks}`} />
      <View style={styles.buttonSection}>
        {isStarted ? (
          <CustomButton
            text="Stop"
            handleSubmit={() => setIsStarted(!isStarted)}
            danger
          />
        ) : (
          <CustomButton
            text="Start"
            handleSubmit={() => setIsStarted(!isStarted)}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonSection: {
    marginTop: 50,
  },
});

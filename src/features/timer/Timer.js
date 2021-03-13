import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import CountDown from '../../components/CountDown';
import CustomButton from '../../components/CustomButton';
import CustomText from '../../components/CustomText';
import Timing from './Timing';

export default function Timer({ tasks }) {
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(0);

  const onProgress = (progress) => setProgress(progress);

  const onTimeChange = (minute) => {
    setMinutes(minute);
    setIsStarted(false);
    setProgress(1);
  };

  return (
    <View>
      <CountDown
        isPaused={!isStarted}
        onProgress={onProgress}
        minutes={minutes}
      />
      <CustomText text={`Focuses on :  ${tasks}`} />
      <View style={{ marginTop: 20 }}>
        <ProgressBar
          color="#FF6666"
          progress={progress}
          style={{ height: 10 }}
        />
      </View>
      <Timing onTimeChange={onTimeChange} />
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
    marginTop: 120,
  },
});

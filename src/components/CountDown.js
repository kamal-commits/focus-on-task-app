import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CustomHeading from './CustomHeading';

const CountDown = ({ isPaused }) => {
  const minutesToMillisecond = (minute) => minute * 1000 * 60;
  const [milliSeconds, setMilliSeconds] = useState(minutesToMillisecond(20));
  const interval = React.useRef();
  const minutes = Math.floor(milliSeconds / 1000 / 60) % 60;
  const seconds = Math.floor(milliSeconds / 1000) % 60;
  const formatTime = (time) => (time < 10 ? `0${time}` : time);

  const countDown = () => {
    setMilliSeconds((time) => {
      if (time === 0) {
        // more stuff do
        return time;
      }
      const timeLeft = time - 1000;
      return timeLeft;
    });
  };
  React.useEffect(() => {
    if (isPaused) {
      return;
    }
    interval.current = setInterval(countDown, 1000);
    return () => clearInterval(interval.current);
  }, [isPaused]);
  return (
    <View style={styles.main}>
      <CustomHeading text={`${formatTime(minutes)}:${formatTime(seconds)}`} />
    </View>
  );
};

export default CountDown;

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#8D3DAF',
    padding: 20,
    borderRadius: 20,
  },
});

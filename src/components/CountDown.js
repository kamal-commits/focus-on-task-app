import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import CustomHeading from './CustomHeading';

const CountDown = ({ isPaused, onProgress, minutes }) => {
  const minutesToMillisecond = (minute) => minute * 1000 * 60;
  const [milliSeconds, setMilliSeconds] = useState(0);
  const interval = React.useRef();
  const minutesFormat = Math.floor(milliSeconds / 1000 / 60) % 60;
  const seconds = Math.floor(milliSeconds / 1000) % 60;
  const formatTime = (time) => (time < 10 ? `0${time}` : time);

  const countDown = () => {
    setMilliSeconds((time) => {
      if (time === 0) {
        return time;
      }
      const timeLeft = time - 1000;
      onProgress(timeLeft / milliSeconds);
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

  React.useEffect(() => {
    if (minutes) {
      setMilliSeconds(minutesToMillisecond(minutes));
    }
  }, [minutes]);
  return (
    <View style={styles.main}>
      <CustomHeading
        text={`${formatTime(minutesFormat)}:${formatTime(seconds)}`}
      />
    </View>
  );
};

export default CountDown;

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#8D3DAF',
    padding: 20,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
    marginTop: 50,
  },
});

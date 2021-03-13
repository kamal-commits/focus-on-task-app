import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import Focus from './src/features/Focus';
import TextField from './src/features/TextField';
import Timer from './src/features/timer/Timer';
import { paddingSizes } from './src/utils/sizes';

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'purple',
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: paddingSizes.lg,
  },
});
const App = () => {
  const [task, setTask] = useState(null);
  console.log(task);
  const [tasks, setTasks] = useState('kamal');
  console.log('TASKS : ', tasks);
  return (
    <View style={styles.main}>
      <View>
        {tasks ? (
          <Timer tasks={tasks} />
        ) : (
          <TextField task={task} setTask={setTask} setTasks={setTasks} />
        )}
      </View>
    </View>
  );
};

export default App;

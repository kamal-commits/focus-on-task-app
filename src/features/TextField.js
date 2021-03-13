import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Button, IconButton, TextInput } from 'react-native-paper';

const styles = StyleSheet.create({
  input: {
    paddingTop: 20,
  },
  label: {
    color: 'white',
    fontSize: 25,
  },
  buttonText: {
    width: 200,
    fontSize: 20,
    textAlign: 'center',
  },
  button: {
    // backgroundColor: 'white',
    // flex: 1,
    width: 100,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 50,
    marginTop: 20,
    // fontSize: 50,
    alignItems: 'center',
    // margin: '0px auto',
  },
});
export default function TextField({ task, setTask, setTasks }) {
  const handleTask = () => {
    setTasks(task);
  };
  return (
    <View>
      <Text style={styles.label}> What Do You Want to focus on ? </Text>
      <View style={styles.input}>
        <TextInput value={task} onChangeText={(text) => setTask(text)} />
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Button mode="contained" style={styles.button} onPress={handleTask}>
          +
        </Button>
      </View>
    </View>
  );
}

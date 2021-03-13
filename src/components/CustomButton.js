import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';

export default function CustomButton({ text, handleSubmit, danger }) {
  return (
    <View>
      {danger ? (
        <Button
          mode="contained"
          onPress={handleSubmit}
          style={styles.dangerButton}
          uppercase={false}
        >
          {text}
        </Button>
      ) : (
        <Button
          mode="contained"
          onPress={handleSubmit}
          style={styles.button}
          uppercase={false}
        >
          {text}
        </Button>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 50,
    padding: 10,
  },
  dangerButton: {
    borderRadius: 50,
    padding: 10,
    backgroundColor: 'red',
  },
});

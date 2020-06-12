import React from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';

export const TodoItem = ({ text }) => {
  return (
    <View style={styles.field}>
      <View style={styles.wrapper}>
        <Text>{text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    borderColor: '#000',
    borderWidth: 1,
    padding: 5,
    borderRadius: 5,
  },
  field: {
    padding: 5,
    borderRadius: 10,
    backgroundColor: '#d9d9d9',
    marginTop: 10,
  },
});

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const Navbar = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Todo</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#000',
    height: 60,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 10,
  },
  title: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '200',
  },
});

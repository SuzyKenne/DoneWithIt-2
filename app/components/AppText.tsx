import { Platform, StyleSheet, Text, View } from 'react-native';
import React, { Children } from 'react';

export default function AppText(Children: any) {
  return <Text style={styles.text}>{Children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'avenir',
  },
});

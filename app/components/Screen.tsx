import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React, { ReactNode } from 'react';
import Constants from 'expo-constants';

interface Props {
  children: ReactNode;
}
export default function Screen({ children }: Props) {
  return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
  },
});

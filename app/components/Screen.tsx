import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React, { ReactNode } from 'react';
import Constants from 'expo-constants';
import { ViewStyle } from 'react-native/Libraries/StyleSheet/StyleSheetTypes';

interface Props {
  children?: ReactNode;
  style?: ViewStyle;
}
export default function Screen({ children, style }: Props) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={style}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
});

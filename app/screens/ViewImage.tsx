import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import colors from '../config/colors';

export default function ViewImage() {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}></View>
      <View style={styles.deleteIcon}></View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require('@/assets/images/chair.jpg')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  closeIcon: {
    backgroundColor: colors.primary,
    flex: 1,
    width: 50,
    height: 50,
    position: 'absolute',
    top: 40,
    left: 30,
  },
  deleteIcon: {
    backgroundColor: colors.secondary,
    flex: 1,
    width: 50,
    height: 50,
    position: 'absolute',
    top: 40,
    right: 30,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

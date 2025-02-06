import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { Key } from 'react';
import colors from '../config/colors';

type colorKeys = keyof typeof colors;

interface Props {
  title: React.ReactNode;
  color: colorKeys;
}

export default function AppButton({ title, color = 'primary' }: Props) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color] }]}
      onPress={() => console.log('Tapped')}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    width: '100%',
    marginVertical: 10,
  },
  text: {
    color: colors.white,
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});

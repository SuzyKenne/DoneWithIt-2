import { StyleSheet, Text, View } from 'react-native';
import React, { ReactNode } from 'react';
import AppText from './AppText/AppText';

interface Props {
  error?: string;
  visible: boolean;
}

export default function ErrorMessage({ error, visible }: Props) {
  if (!visible || !error) return null;
  return <AppText style={styles.error}>{error}</AppText>;
}

const styles = StyleSheet.create({
  error: {
    color: 'red',
  },
});

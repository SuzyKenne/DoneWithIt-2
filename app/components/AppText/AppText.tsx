import {
  Platform,
  StyleSheet,
  Text,
  View,
  StyleProp,
  TextStyle,
} from 'react-native';
import React from 'react';
import styles from './style';

interface Props {
  children: string;
  style?: StyleProp<TextStyle>;
}

const AppText = ({ children, style }: Props) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

export default AppText;

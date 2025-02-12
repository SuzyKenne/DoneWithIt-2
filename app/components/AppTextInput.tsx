import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';

interface Props {
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
}
export default function AppTextInput({ icon }: Props) {
  return (
    <View style={styles.container}>
      {icon && <MaterialCommunityIcons name={icon} />}
      <TextInput style={styles.textInput} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: 'row',
    width: '100%',
    padding: 15,
    marginVertical: 10,
  },
  TextInput: {
    fontSize: 18,
    fontFamily: 
  }
});

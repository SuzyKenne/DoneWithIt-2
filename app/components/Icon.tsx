import { StyleSheet, Text, View, StyleProp, ViewStyle } from 'react-native';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons as iconType } from '@expo/vector-icons';

interface Props {
  name: keyof typeof iconType.glyphMap;
  size?: number;
  backgroundColor?: string;
  iconColor?: string;
  style?: StyleProp<ViewStyle>;
}
export default function Icon({
  name,
  size = 40,
  backgroundColor = '#000',
  iconColor = '#fff',
  style,
}: Props) {
  return (
    <View
      style={[
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor,
          justifyContent: 'center',
          alignItems: 'center',
        },
        style,
      ]}
    >
      <MaterialCommunityIcons name={name} color={iconColor} size={size * 0.5} />
    </View>
  );
}

const styles = StyleSheet.create({});

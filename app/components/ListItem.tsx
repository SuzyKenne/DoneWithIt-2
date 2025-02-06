import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import AppText from './AppText/AppText';
import colors from '../config/colors';

interface Props {
  image: number;
  title: string;
  subtitle: string;
}

export default function ListItem({ image, title, subtitle }: Props) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subtitle}>{subtitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  title: {
    fontWeight: '500',
    fontSize: 20,
  },
  subtitle: {
    color: colors.medium,
    fontSize: 15,
  },
});

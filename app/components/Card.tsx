import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import colors from '../config/colors';
import AppText from './AppText/AppText';

interface Props {
  image: number;
  title: string;
  subtitle: string;
}

export default function Card({ image, title, subtitle }: Props) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subtitle}>{subtitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 250,
  },
  subtitle: {
    color: colors.secondary,
    fontWeight: 'bold',
  },
  title: {
    marginBottom: 7,
  },
  detailsContainer: {
    padding: 20,
  },
});

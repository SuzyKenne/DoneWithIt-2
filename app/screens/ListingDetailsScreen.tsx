import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import AppText from '../components/AppText/AppText';
import colors from '../config/colors';
import ListItem from '../components/ListItem';

export default function ListingDetailsScreen() {
  return (
    <View>
      <Image
        style={styles.image}
        source={require('@/assets/images/redjacket.jpg')}
      />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red jacket for sale</AppText>
        <AppText style={styles.price}>$100</AppText>
        <View style={styles.useContainer}>
          <ListItem
            image={require('@/assets/images/girl.jpeg')}
            title="Suzy Kenne"
            subtitle="5 Listings"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
  },
  price: {
    color: colors.secondary,
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10,
  },
  useContainer: {
    marginVertical: 30,
  },
});

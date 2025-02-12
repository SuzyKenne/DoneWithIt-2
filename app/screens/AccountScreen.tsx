import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Screen from '../components/Screen';
import ListItem from '../components/ListItem';
import colors from '../config/colors';
import Icon from '../components/Icon';
import ListItemSeperator from '../components/ListItemSeperator';

const menuItems = [
  {
    title: 'My Listings',
    icon: {
      name: 'format-list-bulleted',
      backgroundColor: colors.primary,
    },
  },
  {
    title: 'My Messages',
    icon: {
      name: 'email',
      backgroundColor: colors.secondary,
    },
  },
];
export default function AccountScreen() {
  return (
    <Screen style={styles.screen}>
      <ListItem
        title="Kenne suzy"
        subtitle="kennedatewo@gmail.com"
        image={require('@/assets/images/girl.jpeg')}
      />
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeperator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              ImageComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>
      <ListItem
        title="Log Out"
        ImageComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
  container: {
    marginVertical: 20,
  },
});

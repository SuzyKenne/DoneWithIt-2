import {
  StyleSheet,
  Text,
  SafeAreaView,
  Platform,
  View,
  TextInput,
  Switch,
} from 'react-native';
import WelcomeScreen from '../screens/WelcomeScreen';
// import ViewImage from '../screens/ViewImage';

import AppButton from '../components/AppButton';
import Card from '../components/Card';
import ListingDetailsScreen from '../screens/ListingDetailsScreen';
import ViewImage from '../screens/ViewImage';
import MesagesScreen from '../screens/MesagesScreen';
import Screen from '../components/Screen';
import Icon from '../components/Icon';
import ListItem from '../components/ListItem';
import AccountScreen from '../screens/AccountScreen';
import ListingsScreen from '../screens/ListingsScreen';
import styles from '../components/AppText/style';
import { SetStateAction, useState } from 'react';
import AppText from '../components/AppText/AppText';
import AppTextInput from '../components/AppTextInput';
import AppPicker from '../components/AppPicker';
import LoginScreen from '../screens/LoginScreen';

export default function App() {
  return (
    <LoginScreen />

    //

    // <Screen>
    //   <AppTextInput placeholder="Username" icon="email" />
    // </Screen>
    // <Screen>
    //   <ListItem
    //     title="My title"
    //     subtitle="my subtitle"
    //     ImageComponent={<Icon name="email" size={30} backgroundColor="white" />}
    //   />
    //   {/* <Icon name="email" size={50} backgroundColor="red" iconColor="white" /> */}
    // <ListingsScreen />
  );
  // return <ViewImage />;
  // return (
  //   <View
  //     style={{
  //       backgroundColor: '#f8f4f4',
  //       padding: 20,
  //       paddingTop: 100,
  //     }}
  //   >
  //     <Card
  //       title="Red jacket for sale"
  //       subtitle="$100"
  //       image={require('@/assets/images/redjacket.jpg')}
  //     />
  //   </View>
  // );
}

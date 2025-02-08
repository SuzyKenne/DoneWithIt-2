import { StyleSheet, Text, SafeAreaView, Platform, View } from 'react-native';
import WelcomeScreen from '../screens/WelcomeScreen';
// import ViewImage from '../screens/ViewImage';

import AppButton from '../components/AppButton';
import Card from '../components/Card';
import ListingDetailsScreen from '../screens/ListingDetailsScreen';
import ViewImage from '../screens/ViewImage';
import MesagesScreen from '../screens/MesagesScreen';

export default function App() {
  return <MesagesScreen />;
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

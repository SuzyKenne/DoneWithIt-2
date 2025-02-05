import { StyleSheet, Text, SafeAreaView, Platform, View } from 'react-native';
import WelcomeScreen from '../screens/WelcomeScreen';
import ViewImage from '../screens/ViewImage';
import AppText from '../components/AppText';

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <AppText>I love react native</AppText>
    </View>
  );
}

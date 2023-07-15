import { ActivityIndicator, Text, View } from 'react-native';
import { globalStyle } from '../styles/global';

export default function Splash() {
  return (
    <View style={globalStyle.screenContainer}>
      <Text style={globalStyle.title}>Welcome</Text>
      <ActivityIndicator size={'large'} />
    </View>
  );
}

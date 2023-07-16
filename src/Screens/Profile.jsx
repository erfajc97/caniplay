import { Text, View } from 'react-native';
import { globalStyle } from '../styles/global';

export default function Profile() {
  return (
    <View style={globalStyle.screenContainer}>
      <Text style={globalStyle.title}>Profile</Text>
    </View>
  );
}

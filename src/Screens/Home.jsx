import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { globalStyle } from '../styles/global';
import { AntDesign } from '@expo/vector-icons';

export default function Home({ navigation }) {
  return (
    <View style={globalStyle.screenContainer}>
      <Text style={globalStyle.title}> Home Screem </Text>

      <TouchableOpacity
        className="mt-5"
        onPress={() => navigation.navigate('Settings')}
      >
        <AntDesign name="setting" size={54} color="black" />
      </TouchableOpacity>
    </View>
  );
}

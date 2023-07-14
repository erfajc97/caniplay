import { StyleSheet, Text, View } from 'react-native';
import { globalStyle } from '../styles/global';

export default function Settings() {
  return (
    <View style={styles.container}>
      <Text style={globalStyle.title}>Setting</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

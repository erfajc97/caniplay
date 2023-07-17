import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { SafeAreaView, StatusBar } from 'react-native';
import Main from './Main';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
      <Main />
    </SafeAreaView>
  );
}

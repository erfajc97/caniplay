import { SafeAreaView, StatusBar } from 'react-native';
import Main from './Main';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Main />
      <StatusBar barStyle="light-content" />
    </SafeAreaView>
  );
}

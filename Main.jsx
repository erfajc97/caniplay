import RootNavigator from './src/navigation/RootNavigator';
import { Provider } from 'react-redux';
import { store } from './src/app/store';
import 'react-native-gesture-handler';

export default function App() {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
}

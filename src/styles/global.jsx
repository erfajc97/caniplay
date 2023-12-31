import { StyleSheet } from 'react-native';
import { colors } from '../constants/colors';

export const globalStyle = StyleSheet.create({
  screenContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.primary,
  },
});

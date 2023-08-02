import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ScrollView,
} from 'react-native';
import { globalStyle } from '../styles/global';
import { AntDesign } from '@expo/vector-icons';
import { colors } from '../constants/colors';
import { useEffect, useState } from 'react';
import Button from '../Components/Button';
import Data from '../../data.json';
import { useNavigation } from '@react-navigation/native';

export default function Header({ navigation }) {
  return (
    <View className="flex-row justify-start pt-4 px-2 items-center">
      <Image
        className="w-10 h-10 rounded-full "
        source={require('../../assets/logo.png')}
      />
      <Text className="text-fuchsia-50 ml-5 font-extrabold text-2xl">
        Caniplay
      </Text>
    </View>
  );
}

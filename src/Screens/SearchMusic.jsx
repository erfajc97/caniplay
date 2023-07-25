import {
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import { colors } from '../constants/colors';
import { useEffect, useState } from 'react';
import Inputs from '../Components/Inputs';
import Button from '../Components/Button';
import Songs from '../../songs.json';

export default function SearchMusic() {
  return (
    <View style={{ backgroundColor: colors.primary }} className="h-full">
      <Text className="text-center text-4xl mt-5 font-bold text-white">
        Search a Music
      </Text>
      <View className="px-2 flex-row items-center">
        <Inputs
          placeColor={'white'}
          color={`${colors.secundary}`}
          label={'Search your music'}
          colorText={'white'}
        />
        <View className="pt-[10%] ">
          <Button icon={'magnifying-glass'} size={32} />
        </View>
      </View>
      <ScrollView className="mx-2 bg-[#00000053] rounded-xl pl-4  mb-14 ">
        {Songs.songs.map((song, i) => (
          <Text className="text-white flex flex-wrap mb-2  font-semibold text-xl">
            {song}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
}

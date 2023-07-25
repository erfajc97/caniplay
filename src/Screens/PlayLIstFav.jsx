import { Text, View, Image, TouchableOpacity } from 'react-native';
import { colors } from '../constants/colors';
import { useEffect, useState } from 'react';
import Inputs from '../Components/Inputs';
import Button from '../Components/Button';

export default function PlayLIstFav() {
  return (
    <View style={{ backgroundColor: colors.primary }} className="h-full">
      <Text className="text-center text-4xl mt-5 font-bold text-white">
        Your Favorite Songs
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
    </View>
  );
}

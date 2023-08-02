import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react';
import Button from '../Components/Button';
import { colors } from '../constants/colors';
import { Entypo } from '@expo/vector-icons';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

export default function SondDetail({ route }) {
  // const { songData, artName } = route.params;
  const [play, setPlay] = useState(true);
  const [like, setLike] = useState(false);
  const navigation = useNavigation();

  const startMusic = () => {
    setPlay(!play);
  };

  const likeMusic = () => {
    setLike(!like);
  };
  return (
    <View
      className="flex items-center justify-center h-full "
      style={{ backgroundColor: `${colors.primary}` }}
    >
      <Text
        style={{ color: colors.green }}
        className="text-center  text-white text-4xl  "
      >
        C A N I P L A Y
      </Text>
      <View className="flex mt-14 justify-center items-center">
        <Image
          className="w-40 h-40 rounded-full "
          source={require('../../assets/logo.png')}
        />
        {/* <Text className="text-xl mt-4 font-bold text-white">{songData}</Text>
        <Text className="text-white"> {artName}</Text> */}
        <Image
          className="w-[90%] my-6 h-14 rounded-full "
          source={require('../../assets/Section.png')}
        />
      </View>

      <View className="flex-row w-full  mt-2 justify-center items-center">
        <View>
          <TouchableOpacity onPress={() => alert('Back')}>
            <Entypo
              name={'controller-jump-to-start'}
              size={42}
              color={'#f1f1f1'}
            />
          </TouchableOpacity>
        </View>
        <View
          className="mx-8  rounded-full p-4 flex justify-center text-center items-center"
          style={{ borderWidth: 1, backgroundColor: colors.green }}
        >
          {play ? (
            <TouchableOpacity onPress={startMusic}>
              <Entypo name={'controller-play'} size={42} color={'#f1f1f1'} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={startMusic}>
              <Entypo name={'controller-paus'} size={42} color={'#f1f1f1'} />
            </TouchableOpacity>
          )}
        </View>
        <View>
          <TouchableOpacity onPress={() => alert('Next')}>
            <Entypo name={'controller-next'} size={42} color={'#f1f1f1'} />
          </TouchableOpacity>
        </View>
      </View>
      {/* <View className="w-f flex justify-center items-center">
        {like ? (
          <TouchableOpacity onPress={likeMusic}>
            <AntDesign name="hearto" size={34} color={`${colors.secundary}`} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={likeMusic}>
            <AntDesign name="heart" size={34} color={`${colors.secundary}`} />
          </TouchableOpacity>
        )}
      </View> */}
    </View>
  );
}

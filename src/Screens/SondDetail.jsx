import {
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { globalStyle } from '../styles/global';
import Button from '../Components/Button';
import { useDispatch } from 'react-redux';
import { colors } from '../constants/colors';
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';

export default function SondDetail({ route }) {
  const { songData, artName } = route.params;
  const [play, setPlay] = useState(true);
  const [like, setLike] = useState(false);

  const startMusic = () => {
    setPlay(!play);
  };

  const likeMusic = () => {
    setLike(!like);
  };
  return (
    <View
      className="pt-8 h-full px-2"
      style={{ backgroundColor: `${colors.primary}` }}
    >
      <Text className="text-center text-white text-4xl font-bold ">
        Now Playing
      </Text>
      <View className="flex mt-14 justify-center items-center">
        <Image
          className="w-60 h-60 rounded-full "
          source={require('../../assets/logo.png')}
        />
        <Text className="text-xl mt-4 font-bold text-white">{songData}</Text>
        <Text className="text-white"> {artName}</Text>
        <Image
          className="w-[90%] my-6 h-14 rounded-full "
          source={require('../../assets/Section.png')}
        />
      </View>

      <View className="flex-row w-full mt-2 justify-center">
        <View>
          <Button
            icon={'controller-jump-to-start'}
            size={38}
            onPress={() => alert('Back')}
          />
        </View>
        <View className="mx-6 ">
          {play ? (
            <Button icon={'controller-play'} size={38} onPress={startMusic} />
          ) : (
            <Button icon={'controller-paus'} size={38} onPress={startMusic} />
          )}
        </View>
        <View>
          <Button
            icon={'controller-next'}
            size={38}
            onPress={() => alert('Next')}
          />
        </View>
      </View>
      <View className="w-f flex justify-center items-center">
        {like ? (
          <TouchableOpacity onPress={likeMusic}>
            <AntDesign name="hearto" size={34} color={`${colors.secundary}`} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={likeMusic}>
            <AntDesign name="heart" size={34} color={`${colors.secundary}`} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

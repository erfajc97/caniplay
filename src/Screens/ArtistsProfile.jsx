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

export default function ArtistsProfile({ route, navigation }) {
  const { artistData } = route.params;
  return (
    <ScrollView
      className="h-full 0 px-1"
      style={{ backgroundColor: `${colors.primary}` }}
    >
      <View className="flex justify-center items-center mb-14">
        <Text className="text-white font-extrabold text-4xl my-4 ">
          {' '}
          {artistData.name}{' '}
        </Text>
        <Image
          className="w-80 h-80 rounded-2xl mb-4"
          source={{ uri: `${artistData.image}` }}
        />
        <View
          style={{ borderColor: `${colors.secundary}` }}
          className=" rounded-md w-[90%] p-2
          "
        >
          {artistData.songs.map((song, i) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('SongDeatil', {
                  songData: song,
                  artName: artistData.name,
                })
              }
              className="bg-[#00000053] rounded-lg p-2 my-2 flex-row justify-between "
              key={i}
            >
              <Text className="text-white">{song}</Text>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('SongDeatil', {
                    songData: song,
                    artName: artistData.name,
                  })
                }
                className="flex-row justify-center items-center gap-x-2"
              >
                <Text className="text-white">Play</Text>
                <AntDesign
                  name="playcircleo"
                  size={24}
                  color={`${colors.secundary}`}
                />
              </TouchableOpacity>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

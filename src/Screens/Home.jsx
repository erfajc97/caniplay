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
export default function Home({ navigation }) {
  return (
    <View className="h-full" style={styles.bg}>
      <View className="flex-row justify-start pt-4 px-2 items-center">
        <Image
          className="w-10 h-10 rounded-full "
          source={require('../../assets/logo.png')}
        />
        <Text className="text-fuchsia-50 ml-5 font-extrabold text-2xl">
          Caniplay
        </Text>
      </View>
      <View className="flex-row gap-x-3 p-3">
        <TouchableOpacity className=" rounded-full bg-[#0050893b]  flex justify-center items-center p-1">
          <Text className="text-white">Music</Text>
        </TouchableOpacity>
        <TouchableOpacity className=" rounded-full bg-[#0050893b] flex justify-center items-center p-1">
          <Text className="text-white">Podcasts & Shows</Text>
        </TouchableOpacity>
        <TouchableOpacity className=" rounded-full bg-[#0050893b] flex justify-center items-center p-1">
          <Text className="text-white">AudioBooks</Text>
        </TouchableOpacity>
      </View>
      <ScrollView className="mb-12">
        <View className="py-2 px-4">
          <Text className="text-white">Listen to Fav Music</Text>
          <View className="mt-3 items-center flex-row rounded-lg bg-[#8EBCFE]">
            <View>
              <Image
                className=" ml-4 my-2 rounded-lg w-28 h-36"
                source={{ uri: `${Data.artists[1].image}` }}
              />
            </View>
            <View className="ml-14">
              <View>
                <Text className="text-white font-bold text-2xl">
                  {Data.artists[1].songs[0]}
                </Text>
                <Text className="text-white font-semibold text-lg">
                  “{Data.artists[1].name}”
                </Text>
              </View>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('SongDeatil', {
                    songData: Data.artists[1].songs[0],
                    artName: Data.artists[1].name,
                  })
                }
                className="flex-row mt-2 justify-center items-center bg-[#73a3e7ec] p-2 rounded-full"
              >
                <AntDesign name="playcircleo" size={24} color="white" />
                <Text className="text-white ml-2">Play All</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View className="p-2">
          <Text className="text-2xl text-white font-bold">Trending...</Text>
          <View className=" flex-row flex-wrap mt-2 gap-x-5">
            {Data.artists.map(artists => (
              <TouchableOpacity
                key={artists.id}
                onPress={() =>
                  navigation.navigate('ArtistProfile', { artistData: artists })
                }
                className="flex-row rounded-md mb-1 justify-center items-center p-2  bg-[#00000053]"
              >
                <Image
                  className="w-10 h-10 rounded-xl"
                  source={{ uri: `${artists.image}` }}
                />
                <Text className="text-white ml-2 w-28">{artists.songs[1]}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <View className="p-2">
          <Text className="text-2xl  text-white font-bold">
            Recently Played
          </Text>
          <View className="mt-2">
            <FlatList
              horizontal
              data={Data.artists}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('ArtistProfile', { artistData: item })
                  }
                  className="flex rounded-md mr-2 justify-center items-center p-2  bg-[#00000053]"
                >
                  <Image
                    className="w-32 h-32 rounded-xl"
                    source={{ uri: `${item.image}` }}
                  />
                  <Text className="text-white mt-2">{item.name} </Text>
                  <Text className="text-white mt-2">{item.songs[0]} </Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  bg: {
    backgroundColor: colors.primary,
  },
});

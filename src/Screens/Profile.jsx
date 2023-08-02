import { Text, View } from 'react-native';
import { globalStyle } from '../styles/global';
import { colors } from '../constants/colors';
import Button from '../Components/Button';

export default function Profile() {
  return (
    <View className="bg-black" style={globalStyle.screenContainer}>
      <Text style={[globalStyle.title, { color: colors.green }]}>Profile</Text>
      <View className="mt-5">
        <Button
          flex={'row'}
          title={'Songs'}
          icon={'music'}
          size={28}
          colortext={'white'}
          borderColor={colors.green}
          altura={50}
          navegar={'SongDeatil'}
        />
      </View>
    </View>
  );
}

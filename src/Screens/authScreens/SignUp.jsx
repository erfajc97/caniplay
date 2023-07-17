import { Text, View } from 'react-native';
import { globalStyle } from '../../styles/global';
import Inputs from '../../Components/Inputs';
import Button from '../../Components/Button';
import { colors } from '../../constants/colors';

export default function SignUp() {
  return (
    <View style={globalStyle.screenContainer}>
      <Text className="mb-2" style={globalStyle.title}>
        SignUp
      </Text>
      <Inputs label={'Email'} />
      <Inputs label={'Password'} secureTextEntry />
      <Button
        margenT={'8%'}
        width={'90%'}
        altura={45}
        flex={'row'}
        bgBotton={colors.primary}
        title={'Sign Up'}
        redondo={8}
        colortext={colors.ligth}
      />
      <Button
        margenT={'3%'}
        width={'90%'}
        altura={45}
        flex={'row'}
        bgBotton={colors.primary}
        title={'Login'}
        redondo={8}
        navegar={'login'}
        colortext={colors.ligth}
      />
    </View>
  );
}

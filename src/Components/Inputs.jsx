import { TextInput, Text, View, StyleSheet } from 'react-native';
import { colors } from '../constants/colors';

export default function Inputs({
  label,
  value,
  onChangeText,
  secureTextEntry,
  color,
  placeColor,
  colorText,
}) {
  return (
    <View className=" w-[90%]">
      <TextInput
        className={`rounded-xl border-2 p-2 mt-4`}
        placeholder={label}
        placeholderTextColor={placeColor ? placeColor : 'white'}
        style={{ borderColor: color ? color : `${colors.primary}` }}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        color={colorText ? colorText : 'black'}
      />
    </View>
  );
}

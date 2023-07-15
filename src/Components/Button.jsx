import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons';
// import { useNavigation } from '@react-navigation/native';
import { colors } from '../constants/colors';

const Button = ({
  title,
  onPress,
  icon,
  color,
  bgBotton,
  redondo,
  size,
  flex,
  altura,
  navegar,
  width,
  margenT,
}) => {
  // const navigation = useNavigation();

  const navega = () => {
    // navigation.navigate(navegar);
  };
  return (
    <TouchableOpacity
      // onPress={onPress ? onPress : navega}
      style={[
        styles.button,
        {
          backgroundColor: bgBotton,
          borderRadius: redondo,
          flexDirection: flex,
          height: altura,
          width: width,
          marginTop: margenT,
          borderColor: colors.primary,
        },
      ]}
      className="px-2 border-2 "
    >
      <Entypo name={icon} size={size} color={color ? color : '#f1f1f1'} />
      <Text style={styles.text}> {title} </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
    color: colors.ligth,
    marginLeft: 10,
  },
});

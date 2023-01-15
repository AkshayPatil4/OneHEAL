import {
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import { Avatar, Text } from 'react-native-paper';
import { darkGreen, darkGreen050 } from '../sharedStyles';
import { useNavigation } from '@react-navigation/native';

type Props = {
  image: string;
  name: string;
  department: string;
  location: string;
  id?: number;
  styles?: ViewStyle;
};

const Doctor = (props: Props) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={[styles.doctor, props.styles]}
      onPress={() =>
        navigation.navigate('AppointmentStack', {
          screen: 'AppointmentScreen',
          params: {
            department: props.department,
            image: props.image,
            location: props.location,
            name: props.name,
            id: props.id,
          },
        })
      }
    >
      <Avatar.Image source={props.image as ImageSourcePropType} size={56} />
      <View style={styles.doctorTexts}>
        <Text
          variant='labelLarge'
          style={{ color: darkGreen, fontWeight: '600' }}
        >
          {props.name}
        </Text>
        <Text variant='labelSmall' style={{ color: darkGreen, opacity: 0.8 }}>
          {props.department}
        </Text>
        <Text variant='labelSmall' style={{ color: darkGreen, opacity: 0.8 }}>
          {props.location}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Doctor;

const styles = StyleSheet.create({
  doctor: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
    backgroundColor: darkGreen050,
    paddingVertical: 7,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  doctorTexts: {
    marginLeft: 15,
  },
});

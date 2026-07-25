import React, {useContext} from 'react';
import { View, Text } from 'react-native';
import { ThemeContext } from '../../context/ThemeContext'
import styles from '../../assets/css/Profile';

const Profile = () => {
  const {isEnabled, setIsEnabled} = useContext(ThemeContext);
  return (
    <View style={[styles.container, {backgroundColor: isEnabled ? "#5f5f5f" : "#ffffff"}]}>
      <Text style={[styles.text, {color: isEnabled ? "#ffffff" : "#000000"}]}>Profile Screen</Text>
    </View>
  );
};

export default Profile;


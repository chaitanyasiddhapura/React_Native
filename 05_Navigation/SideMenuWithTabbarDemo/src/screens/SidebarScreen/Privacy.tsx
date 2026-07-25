import React, {useContext} from 'react';
import { View, Text } from 'react-native';
import { ThemeContext } from '../../context/ThemeContext'
import styles from '../../assets/css/Privacy';

const Privacy = () => {
  const { isEnabled, toggleSwitch } = useContext(ThemeContext);
  return (
    <View style={[styles.container,{backgroundColor: isEnabled ? "#5f5f5f" : "#ffffff"}]}>
      <Text style={[styles.text, {color: isEnabled ? "#ffffff" : "#000000"}]}>Privacy Screen</Text>
    </View>
  );
};

export default Privacy;


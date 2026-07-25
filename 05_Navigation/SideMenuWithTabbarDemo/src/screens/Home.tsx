import React, {useContext} from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { ThemeContext } from '../context/ThemeContext';

import styles from '../assets/css/Home';

const Home = () => {
  const {isEnabled} = useContext(ThemeContext);

  return (
    <SafeAreaProvider>
    <SafeAreaView style={[styles.safeArea, {backgroundColor: isEnabled ? "#000000" : "white"}]}>
      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
   
        <View style={styles.header}>
          <Text style={[styles.headerText,{color: isEnabled ? "white" : "black"}]}>Welcome Back!</Text>
          <Text style={[styles.subHeaderText,{color: isEnabled ? "white" : "gray"}]}>Check out what's new today</Text>
        </View>

        <View style={styles.featured}>
          <Text style={styles.sectionTitle}>News</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.card}>
              <Image
                source={{ uri: 'https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/rockcms/2023-07/230724-elon-musk-ac-1041p-bc05fb.jpg' }}
                style={styles.cardImage}
              />
              <Text style={styles.cardText}>Elon Musk</Text>
            </View>
            <View style={styles.card}>
              <Image
                source={{ uri: 'https://images.axios.com/EidOUg51g94GmdDiayOLcgmShyI=/0x313:3000x2000/1920x1080/2025/09/17/1758134061934.jpeg' }}
                style={styles.cardImage}
              />
              <Text style={styles.cardText}>Dario Amodei</Text>
            </View>
            <View style={styles.card}>
              <Image
                source={{ uri: 'https://c.files.bbci.co.uk/11aa/live/fd922290-942c-11f0-a173-75b0baa9f7ee.jpg' }}
                style={styles.cardImage}
              />
              <Text style={styles.cardText}>mark zuckerberg</Text>
            </View>
          </ScrollView>
        </View>

      </ScrollView>
    </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Home;

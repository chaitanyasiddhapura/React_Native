import React, { useState } from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  ActionSheetIOS,
  Alert,
  Platform,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';
import styles from './src/assets/css/mainPage';
import { requestCameraPermission, requestGalleryPermission } from './src/utils/permissions';

export default function App() {
  const [selectedImage, setSelectedImage] = useState(null);

  // Open Gallery
  const openImagePicker = async () => {
    const hasPermission = await requestGalleryPermission();
    if (!hasPermission) {
      Alert.alert('Permission denied', 'Please allow access to photos.');
      return;
    }

    launchImageLibrary(
      { mediaType: 'photo', maxWidth: 2000, maxHeight: 2000 },
      (response) => {
        if (response.didCancel) return;
        if (response.errorCode) {
          Alert.alert('Error', response.errorMessage);
          return;
        }
        setSelectedImage(response.assets[0].uri);
      }
    );
  };

  // Open Camera
  const handleCameraLaunch = async () => {
    const hasPermission = await requestCameraPermission();
    if (!hasPermission) {
      Alert.alert('Permission denied', 'Please allow access to the camera.');
      return;
    }

    launchCamera(
      { mediaType: 'photo', maxWidth: 2000, maxHeight: 2000 },
      (response) => {
        if (response.didCancel) return;
        if (response.errorCode) {
          Alert.alert('Error', response.errorMessage);
          return;
        }
        setSelectedImage(response.assets[0].uri);
      }
    );
  };

  // iOS ActionSheet / Android Alert
  const onPress = () => {
    if (Platform.OS === 'ios') {
      ActionSheetIOS.showActionSheetWithOptions(
        {
          options: ['Choose From Gallery', 'Open Camera', 'Cancel'],
          cancelButtonIndex: 2,
        },
        (buttonIndex) => {
          if (buttonIndex === 0) openImagePicker();
          if (buttonIndex === 1) handleCameraLaunch();
        }
      );
    } else {
      Alert.alert('Select Image', 'Choose option', [
        { text: 'Gallery', onPress: openImagePicker },
        { text: 'Camera', onPress: handleCameraLaunch },
        { text: 'Cancel', style: 'cancel' },
      ]);
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#f5f5f5' }}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={styles.container}>
            <TouchableOpacity onPress={onPress}>
              <Image
                source={
                  selectedImage
                    ? { uri: selectedImage }
                    : require('./src/assets/Images/profile.gif')
                }
                style={styles.profileImage}
              />
            </TouchableOpacity>

            <Text style={styles.username}>Chaitanya Siddhapura</Text>

            <Text style={styles.bio}>
              Full Stack Developer | React Native Enthusiast | Open Source Contributor
            </Text>

            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Follow</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Message</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.infoContainer}>
              <View style={styles.infoBox}>
                <Text style={styles.infoNumber}>150</Text>
                <Text style={styles.infoLabel}>Posts</Text>
              </View>

              <View style={styles.infoBox}>
                <Text style={styles.infoNumber}>2.5K</Text>
                <Text style={styles.infoLabel}>Followers</Text>
              </View>

              <View style={styles.infoBox}>
                <Text style={styles.infoNumber}>300</Text>
                <Text style={styles.infoLabel}>Following</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
// src/utils/permissions.js
import { Platform, PermissionsAndroid } from 'react-native';
import { PERMISSIONS, request, RESULTS } from 'react-native-permissions';

// Camera Permission
export const requestCameraPermission = async () => {
  if (Platform.OS === 'ios') {
    const result = await request(PERMISSIONS.IOS.CAMERA);
    return result === RESULTS.GRANTED;
  }

  const granted = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.CAMERA,
    {
      title: 'Camera Permission',
      message: 'App needs access to your camera',
      buttonPositive: 'OK',
    }
  );
  return granted === PermissionsAndroid.RESULTS.GRANTED;
};

// Gallery / Photo Library Permission
export const requestGalleryPermission = async () => {
  if (Platform.OS === 'ios') {
    const result = await request(PERMISSIONS.IOS.PHOTO_LIBRARY);
    return result === RESULTS.GRANTED;
  }

  const permission =
    Platform.Version >= 33
      ? PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES
      : PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE;

  const granted = await PermissionsAndroid.request(permission, {
    title: 'Gallery Permission',
    message: 'App needs access to your photos',
    buttonPositive: 'OK',
  });

  return granted === PermissionsAndroid.RESULTS.GRANTED;
};
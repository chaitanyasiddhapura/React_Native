// Toast.ts
import { NativeModules, Platform } from 'react-native';

const Toast = {
  show(message: string) {
    if (Platform.OS === 'ios') {
      const { ToastMessage } = NativeModules;
      ToastMessage.showToast(); // iOS version
    } else {
      const { NativeToast } = NativeModules;
      NativeToast.showToast(message); // Android version
    }
  },
};

export default Toast;
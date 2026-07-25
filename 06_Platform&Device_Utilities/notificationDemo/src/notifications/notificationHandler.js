import notifee, { EventType } from '@notifee/react-native';
import { navigate } from '../navigations/navigationRef';

export function registerNotificationEvents() {
  notifee.onForegroundEvent(({ type }) => {
    if (type === EventType.PRESS) {
      navigate('PhotoGallery', {
        id: 1,
        name: 'Chaitanya',
      });
    }
  });
}
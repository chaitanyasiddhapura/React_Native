import notifee, {
  AuthorizationStatus,
  TriggerType,
  AndroidImportance,
} from '@notifee/react-native';

export async function requestNotificationPermission() {
  const settings = await notifee.requestPermission();

  console.log(
    settings.authorizationStatus >= AuthorizationStatus.AUTHORIZED
      ? 'Permission granted'
      : 'Permission denied'
  );
}

export async function createChannel() {
  return notifee.createChannel({
    id: 'default',
    name: 'Default Channel',
    importance: AndroidImportance.HIGH,
  });
}

export async function showLocalNotification() {
  const channelId = await createChannel();

  await notifee.displayNotification({
    title: 'Test',
    body: 'CONGRATULATIONS! You have won absolutely nothing.',
    android: {
      channelId,
      smallIcon: 'ic_launcher',
      pressAction: {
        id: 'default',
      },
    },
  });
}

export async function scheduleNotification() {
  const channelId = await createChannel();

  await notifee.createTriggerNotification({
    title: ':(',
    body: 'Motivation not found. Please try again tomorrow.',
    android: {
      channelId,
      smallIcon: 'ic_launcher',
      pressAction: {
        id: 'default',
      },
    },
  },
  {
    type: TriggerType.TIMESTAMP,
    timestamp: Date.now() + 10 * 1000,
  });
}
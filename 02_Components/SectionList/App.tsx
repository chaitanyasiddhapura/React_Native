import React, { useState, useRef, useEffect } from 'react';
import {
  Text,
  SectionList,
  View,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Keyboard,
  StatusBar
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import styles from './src/assets/css/main';

const initialMessages = [
  {
    date: 'Tue Mar 10, 2026',
    data: [
      { id: '1', user: 'You', text: 'Hey!' },
      { id: '2', user: 'Alice', text: 'Hi, how are you?' },
      { id: '3', user: 'You', text: 'I am good! How about you?' },
    ],
  },
  {
    date: 'Mon Mar 9, 2026',
    data: [
      { id: '4', user: 'Bob', text: 'Are you coming tomorrow?' },
      { id: '5', user: 'You', text: 'I am good! How about you?' },
    ],
  },
];

function App() {
  const [messages, setMessages] = useState(initialMessages);
  const [inputField, setInputField] = useState('');
  const sectionListRef = useRef(null);

  const scrollToBottom = (data) => {
    if (!data.length) return;

    const lastSectionIndex = data.length - 1;
    const lastItemIndex = data[lastSectionIndex].data.length - 1;

    sectionListRef.current?.scrollToLocation({
      sectionIndex: lastSectionIndex,
      itemIndex: lastItemIndex,
      animated: true,
    });
  };

  useEffect(() => {
    const keyboardListener = Keyboard.addListener('keyboardDidShow', () => {
      scrollToBottom(messages);
    });

    return () => keyboardListener.remove();
  }, [messages]);

  const handleSend = () => {
    if (!inputField.trim()) return;

    const today = new Date().toDateString();

    const newMessage = {
      id: Date.now().toString(),
      user: 'You',
      text: inputField,
    };

    setMessages((prevMessages) => {
      let updatedMessages;

      const lastSection = prevMessages[prevMessages.length - 1];

      if (lastSection.date === today) {
        updatedMessages = [
          ...prevMessages.slice(0, prevMessages.length - 1),
          { ...lastSection, data: [...lastSection.data, newMessage] },
        ];
      } else {
        updatedMessages = [...prevMessages, { date: today, data: [newMessage] }];
      }

      setTimeout(() => {
        scrollToBottom(updatedMessages);
      }, 100);

      return updatedMessages;
    });

    setInputField('');
  };

  return (

    <SafeAreaProvider>
      
      <View style={{ backgroundColor: '#0078fe' }}>
        <StatusBar barStyle="light-content" backgroundColor="#0078fe" />
        <SafeAreaView edges={['top']} />
      </View>
      
      <View style={styles.header}>
        <Image
          source={require('./src/assets/Images/profile.jpeg')}
          style={styles.avatar}
        />
        <Text style={styles.title}>Chaitanya</Text>
        <Image
          source={require('./src/assets/Images/dots.png')}
          style={styles.icon}
        />
      </View>

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <SafeAreaView style={styles.container} edges={['top']}>
          <SectionList
            ref={sectionListRef}
            sections={messages}
            keyExtractor={(item) => item.id}
            onScrollToIndexFailed={() => {}}
            keyboardShouldPersistTaps="handled"
            contentContainerStyle={{ paddingBottom: 20 }}
            renderSectionHeader={({ section: { date } }) => (
              <Text style={styles.sectionHeader}>{date}</Text>
            )}
            renderItem={({ item }) => {
              const isSender = item.user === 'You';
              return (
                <View
                  style={[
                    styles.messageContainer,
                    isSender ? styles.sender : styles.receiver,
                  ]}
                >
                  <Text style={styles.messageText}>{item.text}</Text>
                </View>
              );
            }}
          />
        </SafeAreaView>

        <View style={styles.bottomTyping}>
          <TextInput
            style={styles.InputText}
            placeholder="Type Your Message"
            returnKeyType="send"
            value={inputField}
            onChangeText={setInputField}
            onSubmitEditing={handleSend}
          />

          <TouchableOpacity style={styles.btn} onPress={handleSend}>
            <Text style={styles.text}>Send</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaProvider>
 
  );
}

export default App;
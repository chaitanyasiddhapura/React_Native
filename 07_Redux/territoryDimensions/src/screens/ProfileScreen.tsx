import React, { useState, useEffect } from 'react';
import {View, Text, Switch,TouchableOpacity, StyleSheet, Modal,TextInput} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setDark, setLight } from '../features/themes/backgroundThemeReducer';
import { Logout } from '../features/auth/userAuthenticationReducer';
import { SafeAreaView } from 'react-native-safe-area-context';

import useAuth from '../hook/auth';

export default function Profile() {
  const dispatch = useDispatch();
  const isDark = useSelector(state => state.theme.isDark);

  const { user, updateUser } = useAuth();

  const [modalVisible, setModalVisible] = useState(false);
  const [tempName, setTempName] = useState(user.name);
  const [tempEmail, setTempEmail] = useState(user.email);

    useEffect(() => {
    setTempName(user.name);
    setTempEmail(user.email);
    }, [user]);

  const colors = {
    background: isDark ? '#0f172a' : '#f1f5f9',
    card: isDark ? '#1e293b' : '#fff',
    text: isDark ? '#fff' : '#0f172a',
    subText: isDark ? '#94a3b8' : '#475569',
    accent: '#38bdf8',
  };

  function toggleTheme() {
    dispatch(isDark ? setLight() : setDark());
  }

  function handleLogout() {
    dispatch(Logout());
  }

  function handleSave() {
    updateUser({ name: tempName, email: tempEmail });
    setModalVisible(false);
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <View style={styles.container}>

        <Text style={[styles.title, { color: colors.text }]}>
        Profile
        </Text>

        <View style={[styles.card, { backgroundColor: colors.card }]}>
          <Text style={[styles.name, { color: colors.text }]}>
            {user.name}
          </Text>
          <Text style={{ color: colors.subText }}>
            {user.email}
          </Text>

          <TouchableOpacity
            style={styles.editBtn}
            onPress={() => setModalVisible(true)}
          >
            <Text style={{ color: '#000', fontWeight: 'bold' }}>
              Edit
            </Text>
          </TouchableOpacity>
        </View>
        
        <View style={[styles.card, { backgroundColor: colors.card }]}>
          <View style={styles.row}>
            <Text style={{ color: colors.text }}>Dark Mode</Text>
            <Switch value={isDark} onValueChange={toggleTheme} />
          </View>
        </View>

        <TouchableOpacity
          style={[styles.logoutBtn]}
          onPress={handleLogout}
        >
          <Text style={{ color: '#fff', fontWeight: 'bold' }}>
            Logout
          </Text>
        </TouchableOpacity>

      </View>

      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={styles.overlay}>
          <View style={[styles.sheet, { backgroundColor: colors.card }]}>
            
            <Text style={[styles.sheetTitle, { color: colors.text }]}>
              Edit Profile
            </Text>

            <TextInput
              style={[styles.input, { color: colors.text }]}
              value={tempName}
              onChangeText={setTempName}
              placeholder="Name"
              placeholderTextColor={colors.subText}
            />

            <TextInput
              style={[styles.input, { color: colors.text }]}
              value={tempEmail}
              onChangeText={setTempEmail}
              placeholder="Email"
              placeholderTextColor={colors.subText}
            />

            <TouchableOpacity
              style={[styles.saveBtn, { backgroundColor: colors.accent }]}
              onPress={handleSave}
            >
              <Text style={{ fontWeight: 'bold' }}>Save</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={{ color: colors.subText, marginTop: 10 }}>
                Cancel
              </Text>
            </TouchableOpacity>

          </View>
        </View>
      </Modal>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  card: {
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
  },

  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  editBtn: {
    marginTop: 10,
    backgroundColor: '#38bdf8',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  logoutBtn: {
    marginTop: 20,
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },

  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },

  sheet: {
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  sheetTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  input: {
    borderBottomWidth: 1,
    marginBottom: 15,
    paddingVertical: 8,
  },

  saveBtn: {
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
});
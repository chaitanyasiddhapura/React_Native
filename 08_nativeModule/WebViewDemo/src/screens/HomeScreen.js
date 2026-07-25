import React from 'react'
import { WebView } from 'react-native-webview';
import styles from '../assets/css/commonStyle'

function HomeScreen(){
  return (
    <WebView 
        source={{ uri: 'https://chaitanyasiddhapura.vercel.app/' }} 
        style={styles} 
    />
  )
}

export default HomeScreen;
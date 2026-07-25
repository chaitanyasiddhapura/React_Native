/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useRef, useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  StatusBar,
  Dimensions,
} from 'react-native';
import Video from 'react-native-video';
import Orientation from 'react-native-orientation-locker';

const App = () => {
  const videoRef = useRef(null);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [paused, setPaused] = useState(false);

const toggleFullScreen = () => {
  if (isFullScreen) {
    Orientation.lockToPortrait();
    StatusBar.setHidden(false);
  } else {
    Orientation.lockToLandscape();
    StatusBar.setHidden(true);
  }
  setIsFullScreen(prev => !prev);
};

  const togglePlayPause = () => {
    setPaused(!paused);
  };

useEffect(() => {
  const orientationListener = (orientation) => {
    if (
      orientation === 'LANDSCAPE-LEFT' ||
      orientation === 'LANDSCAPE-RIGHT'
    ) {
      setIsFullScreen(true);
      StatusBar.setHidden(true);
    } else {
      setIsFullScreen(false);
      StatusBar.setHidden(false);
    }
  };

  Orientation.addOrientationListener(orientationListener);

  return () => {
    Orientation.removeAllListeners(); 
    Orientation.lockToPortrait();
    StatusBar.setHidden(false);
  };
}, []);

  return (
    <View style={{ flex: 1, backgroundColor: '#000' }}>
      <View style={isFullScreen ? styles.fullScreenContainer : styles.container}>
        
        <View
          style={
            isFullScreen
              ? styles.fullScreenVideoWrapper
              : styles.videoWrapper
          }
        >
          <Video
            ref={videoRef}
            source={{
              uri: 'https://www.w3schools.com/html/mov_bbb.mp4',
            }}
            style={styles.video}
            resizeMode="contain"
            paused={paused}
            repeat
          />

          <View style={styles.controlsOverlay}>
            <TouchableOpacity onPress={togglePlayPause} style={styles.controlButton}>
              <Text style={styles.controlText}>
                {paused ? 'Play' : 'Pause'}
              </Text>
            </TouchableOpacity>

            {isFullScreen && (
              <TouchableOpacity
                style={styles.minimizeButton}
                onPress={toggleFullScreen}
              >
                <Text style={styles.controlText}>↙</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>

        {!isFullScreen && (
          <TouchableOpacity style={styles.button} onPress={toggleFullScreen}>
            <Text style={styles.buttonText}>Go Fullscreen</Text>
          </TouchableOpacity>
        )}

      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    top: 60,
  },
  fullScreenContainer: {
    flex: 1,
    backgroundColor: '#000',
  },
  videoWrapper: {
    width: '100%',
    height: 250,
    backgroundColor: '#000',
  },
  fullScreenVideoWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: Dimensions.get('window').height,
    height: Dimensions.get('window').width,
    backgroundColor: '#000',
  },
  video: {
    width: '100%',
    height: '100%',
  },
  controlsOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  controlButton: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  minimizeButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: 'rgba(0,0,0,0.6)',
    padding: 10,
    borderRadius: 5,
  },
  controlText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#333',
    padding: 15,
    margin: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
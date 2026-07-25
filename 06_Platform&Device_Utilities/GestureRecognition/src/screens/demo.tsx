import React, { useRef } from 'react';
import { Animated, View } from 'react-native';
import {
  PanGestureHandler,
  PinchGestureHandler,
  RotationGestureHandler,
} from 'react-native-gesture-handler';

const HomeScreens = () => {
  const pan = useRef(new Animated.ValueXY()).current;
  const scale = useRef(new Animated.Value(1)).current;
  const rotate = useRef(new Animated.Value(0)).current;

  const onPanGestureEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationX: pan.x,
          translationY: pan.y,
        },
      },
    ],
    { useNativeDriver: false }
  );

  const onPinchGestureEvent = Animated.event(
    [
      {
        nativeEvent: {
          scale: scale,
        },
      },
    ],
    { useNativeDriver: false }
  );


  const onRotateGestureEvent = Animated.event(
    [
      {
        nativeEvent: {
          rotation: rotate,
        },
      },
    ],
    { useNativeDriver: false }
  );

  const rotateInterpolate = rotate.interpolate({
    inputRange: [-Math.PI, Math.PI],
    outputRange: ['-180deg', '180deg'],
  });

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      
      <RotationGestureHandler onGestureEvent={onRotateGestureEvent}>
        <Animated.View>
          
          <PinchGestureHandler onGestureEvent={onPinchGestureEvent}>
            <Animated.View>
              
              <PanGestureHandler onGestureEvent={onPanGestureEvent}>
                <Animated.View
                  style={{
                    width: 100,
                    height: 100,
                    backgroundColor: 'white',
                    borderRadius: 10,
                    transform: [
                      { translateX: pan.x },
                      { translateY: pan.y },
                      { scale: scale },
                      { rotate: rotateInterpolate },
                    ],
                  }}
                />
              
              </PanGestureHandler>

            </Animated.View>
          </PinchGestureHandler>

        </Animated.View>
      </RotationGestureHandler>

    </View>
  );
};

export default HomeScreens;
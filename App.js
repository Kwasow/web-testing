import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming
} from 'react-native-reanimated';
import React from 'react';
import {View, Button} from 'react-native';

export default function App() {
  const offset = useSharedValue(0);
  const animatedStyle = useAnimatedStyle(() => {
    'worklet';
    return {
      transform: [{rotate: offset.value + 'deg'}],
    };
  });

  const startingStyle = {
    width: 100,
    height: 50,
    marginTop: 300,
    marginStart: 145,
    borderRadius: 20,
    transform: [{rotate: '45deg'}],
    backgroundColor: '#000000',
  };

  return (
    <View>
      <Animated.View style={[startingStyle, animatedStyle]} />
      <Button
        onPress={() => {
          offset.value = withTiming(offset.value + Math.random() * 360);
        }}
        title="Rotate random"
      />
      <Button
        onPress={() => {
          offset.value = withTiming(offset.value + 360);
        }}
        title="Rotate clockwise 360"
      />
      <Button
        onPress={() => {
          offset.value = withTiming(offset.value - 360);
        }}
        title="Rotate anti-clockwise 360"
      />
      <Button
        onPress={() => {
          offset.value = withTiming(offset.value - (offset.value % 360));
        }}
        title="Reset"
      />
    </View>
  );
}

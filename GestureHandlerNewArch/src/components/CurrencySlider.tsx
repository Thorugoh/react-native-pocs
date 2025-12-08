
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  GestureHandlerRootView,
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import Animated, {
  // runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  // useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {useStateContext, useDispatchContext} from '../State';

const SLIDER_WIDTH = 300;
const KNOB_WIDTH = 30;

export const CurrencySlider = () => {
  const {inputValue} = useStateContext();
  const dispatch = useDispatchContext();
  // const translateX = useSharedValue(0);
  // const isSliding = useSharedValue(false);

  const onGestureEvent = (event) => ({
    onStart: (_, ctx) => {
      // ctx.startX = translateX.value;
      // isSliding.value = true;
    },
    onActive: (event, ctx) => {
      // translateX.value = ctx.startX + event.translationX;
    },
    onEnd: () => {
      // isSliding.value = false;
      // const value = (translateX.value / SLIDER_WIDTH) * 1000;
      // dispatch({type: 'SET_INPUT_VALUE', payload: value});
    },
  });

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{translateX: translateX.value}],
    };
  });

  const animatedKnobStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withSpring(
            (inputValue / 1000) * SLIDER_WIDTH,
            {
              damping: 15,
              stiffness: 90,
            },
          ),
        },
      ],
    };
  });

  return (
    <GestureHandlerRootView>

    <View style={styles.slider}>
      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <View />
        <Animated.View  />
      </PanGestureHandler>
    </View>
    </GestureHandlerRootView>

  );
};

const styles = StyleSheet.create({
  slider: {
    width: SLIDER_WIDTH,
    height: 40,
    backgroundColor: '#ddd',
    justifyContent: 'center',
  },
  knob: {
    width: KNOB_WIDTH,
    height: KNOB_WIDTH,
    backgroundColor: 'blue',
    borderRadius: KNOB_WIDTH / 2,
  },
});

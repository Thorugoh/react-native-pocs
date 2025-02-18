import { StatusBar } from 'expo-status-bar';
import React, { useRef } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import Rive, { Fit, Alignment, RiveRef } from "rive-react-native";

export default function App() {
  const riveRef = useRef<RiveRef>(null);

  function changeAnimation(isTyping: boolean) { 
    riveRef.current?.setInputState("State Machine 1", "Boolean 1", isTyping);
  }

  return (
    <View style={styles.container}>
      <View style={{ width: "100%", height: 400}}>
      <Rive 
        ref={riveRef}
        resourceName='password_input'
        autoplay={true}
        fit={Fit.Cover}
        alignment={Alignment.Center}
      />
      </View>

      <TextInput 

        placeholder='your@email.com' 
        style={styles.input} 
        autoCapitalize='none' 
        textContentType='emailAddress'
      />

      <TextInput 
        onFocus={() => changeAnimation(true)}
        onBlur={() => changeAnimation(false)}
        placeholder='Your Password'
        style={styles.input} 
        secureTextEntry 
        autoCorrect={false}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 32,
    gap: 16,
  },
  input: {
    width: "100%",
    height: 52,
    borderWidth: 2,
    borderColor: "#CECECE",
    borderRadius: 10,
    padding: 16,
  }
});


import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {StateProvider} from './src/State';
import {CurrencyInput} from './src/components/CurrencyInput';
import {CurrencySlider} from './src/components/CurrencySlider';

function App(): JSX.Element {
  return (
    <StateProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <CurrencyInput />
           <CurrencySlider />
        </View>
      </SafeAreaView>
    </StateProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;


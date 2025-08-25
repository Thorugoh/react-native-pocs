import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { CachedImage } from './CachedImage';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Let's go...</Text>
      <StatusBar style="auto" />
      <CachedImage source="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

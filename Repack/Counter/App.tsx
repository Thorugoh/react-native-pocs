import { StatusBar, useColorScheme, View } from 'react-native';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import StudentModule from './StudentModule';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View>
      <StudentModule />
    </View>
  );
}

export default App;

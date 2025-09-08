import { View } from 'react-native';
import StudentModule from './StudentModule';

function App() {
  return (
    <View>
      <StudentModule user={{ name: 'John Doe' }} />
    </View>
  );
}

export default App;

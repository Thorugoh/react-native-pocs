import { View } from 'react-native';
import StudentModule from './StudentModule';

function App() {
  return (
    <View style={{ flex: 1, marginTop: 100, justifyContent: 'center', alignItems: 'center' }}>
      <StudentModule user={{ name: 'John Doe' }} />
    </View>
  );
}

export default App;

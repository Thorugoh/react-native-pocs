/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Script, ScriptManager } from '@callstack/repack/client';


ScriptManager.shared?.addResolver(async (scriptId, caller) => {
  // In dev mode, resolve script location to dev server.
  if(__DEV__) {
    return {
      url: Script.getDevServerURL(scriptId),
      cache: false,
    }
  }

  return {
    url: Script.getRemoteURL(`http://localhost:8080/scripts/${scriptId}`)
  }
})


const StudentModule = React.lazy(() => import("./StudentModule"));

function App(): React.JSX.Element {

  return (
    <View style={styles.sectionContainer}>
        <React.Suspense fallback={<Text>Loading remote module...</Text>}>
          <StudentModule user={{ name: "Test" }} />
        </React.Suspense>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: "100%",
    width: "100%",
    marginTop: 100,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;

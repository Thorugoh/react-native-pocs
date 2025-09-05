/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { Script, ScriptManager } from '@callstack/repack/client';
import {
  StyleSheet,
  Text,
} from 'react-native';

ScriptManager.shared.addResolver(async (scriptId, caller) => {
  if(__DEV__) {
    return {
      url: Script.getDevServerURL(scriptId),
      cache: false,
    }
  }

  return {
    url: Script.getRemoteURL(`https://mycdn.example/assets/${scriptId}`)
  }
})

const TeacherModule = React.lazy(() => import('./TeacherModule'));
const StudentModule = React.lazy(() => import('./StudentModule'));

function App({ role }: {role: string}): React.JSX.Element {
  if(role === "teacher") {
    return (
      <React.Suspense fallback={<Text>Loading...</Text>}>
        <TeacherModule />
      </React.Suspense>
    );
  }

  return (
    <React.Suspense fallback={<Text>Loading...</Text>}>
      <StudentModule />
    </React.Suspense>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
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

import React, { lazy, Suspense, useEffect, useState } from 'react';
import { ActivityIndicator, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import ComponentResolver from "./src/components/ComponentResolver"
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
    url: Script.getRemoteURL(`https://mycdn.example/assets/${scriptId}`)
  }
})


const fetchUserVariant = async (): Promise<"experienceA" | "experienceB"> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('experienceB');
    }, 500);
  });
};

function App(): React.JSX.Element {
  const [variant, setVariant] = useState<"experienceA" | "experienceB">('experienceA'); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadVariant = async () => {
      const userVariant = await fetchUserVariant();
      setVariant(userVariant);
      setLoading(false);
    };

    loadVariant();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" style={{ flex: 1 }} />;
  }

  return (
    <SafeAreaView style={styles.container}>
        <ComponentResolver variant={variant} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  header: {
    padding: 20,
    backgroundColor: '#6200ee',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});

export default App;

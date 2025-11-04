
import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

const Thanksgiving = require("./assets/svgs/thanksgiving.svg");

import { SvgXml } from 'react-native-svg';

function App(): React.JSX.Element {
  const rnsvg = true;

  return (
    <View>
      <SvgXml xml={Thanksgiving} height={115} width={75} />
    </View>
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

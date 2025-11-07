
import { Image } from 'expo-image';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const Thanksgiving = require("./assets/svgs/thanksgiving.svg");
const Globus = require("./assets/svgs/globus.svg");
import { WithLocalSvg } from 'react-native-svg/css';

function App(): React.JSX.Element {
  const rnsvg = true;

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.header}>react-native-svg</Text>
        <Text style={styles.header}>expo-image</Text>
      </View>
      <View style={styles.row}>
        <View style={styles.cell}>
          <WithLocalSvg asset={Thanksgiving} style={{ width: 150, height: 150 }} />
        </View>
        <View style={styles.cell}>
          <Image source={Thanksgiving} style={{ width: 150, height: 150 }} contentFit="contain" />
        </View>
      </View>
       <View style={styles.row}>
        <View style={styles.cell}>
          <WithLocalSvg asset={Globus} style={{ width: 150, height: 150 }} />
        </View>
        <View style={styles.cell}>
          <Image source={Globus} style={{ width: 150, height: 150 }} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 12,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  cell: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    color: 'black',
    fontWeight: '700',
    fontSize: 16,
  },
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

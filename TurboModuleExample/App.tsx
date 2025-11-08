import React from "react";

import NativeLocalStorage from "./specs/NativeLocalStorage";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, StyleSheet, Text, TextInput} from "react-native";

const EMPTY = "<empty>";

export default function App(): React.JSX.Element {
  const [value, setValue] = React.useState<string | null>(null);

  const [editingValue, setEditingValue] = React.useState<string | null>(null);

  React.useEffect(() => {
    const storedValue = NativeLocalStorage?.getItem("myKey");
    setValue(storedValue);
  }, []);

  function saveValue() {
    NativeLocalStorage?.setItem(editingValue ?? EMPTY, 'myKey');
    setValue(editingValue);
  }

  function clearAll() {
    NativeLocalStorage?.clear();
    setValue('');
  }

  function deleteValue() {
    NativeLocalStorage?.removeItem('myKey');
    setValue('');
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text style={styles.text}>
        Current stored value is: {value ?? "No value"}
      </Text>
      <TextInput
        placeholder="Enter the text you want to store"
        onChangeText={setEditingValue}
        style={styles.textInput}  
      />
      <Button title="Save" onPress={saveValue} />
      <Button title="Delete" onPress={deleteValue} />
      <Button title="Clear" onPress={clearAll} />
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  text: {
    margin: 10,
    fontSize: 20,
  },
  textInput: {
    margin: 10,
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    paddingLeft: 5,
    paddingRight: 5,
    borderRadius: 5,
  },
});

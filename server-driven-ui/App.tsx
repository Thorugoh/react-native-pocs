import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { RecursiveComponent } from './recursive-component';

const serverSideProps = [
    {
        "name": "container",
        "component": "view",
        "props": {
            "style": {
                "backgroundColor": "#000",
                "flex": 1,
                "height": "100%",
                "width": "100%",
                "alignItems": "center",
                "justifyContent": "center"
            }
        },
        "children": [
            {
                "name": "circle",
                "component": "touchableOpacity",
                "props": {
                    "style": {
                        "width": 100,
                        "height": 100,
                        "borderRadius": 50,
                        "backgroundColor": "#f6f",
                         "justifyContent": "center",
                    },
                },
                "children": [
                  {
                    "name": "label",
                    "component": "text",
                    "props": {
                      "style": {
                        "color": "#fff",
                        "textAlign": "center",
                      }
                    },
                    "content": "Hello World"
                  }
                ]
            }
        ]
    }
];

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <RecursiveComponent data={serverSideProps} theme="light" />
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

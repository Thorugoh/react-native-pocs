import { Button, View } from 'react-native';
import { StyleSheet, UnistylesRuntime } from 'react-native-unistyles';

export default function App() {
    styles.useVariants({
        color: 'primary',
        size: 'small'
    })

    return (
        <View style={styles.container}>
          <Button title='Change theme' onPress={() => UnistylesRuntime.setTheme('dark')} />
        </View>
    )
}

const styles = StyleSheet.create(theme => ({
    container: {
        flex: 1,
        variants: {
            color: {
                primary: {
                    backgroundColor: theme.colors.primary["100"]
                },
                secondary: {
                    backgroundColor: theme.colors.primary["200"]
                }
            },
            size: {
                small: {
                    width: 100,
                    height: 100
                },
                medium: {
                    width: 200,
                    height: 200
                },
                large: {
                    width: 300,
                    height: 300
                }
            },
            otherGroupName: {
                // other variants
            }
        }
    }
}));

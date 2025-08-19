import { View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles'

type ComponentProps = {
    isPrimary: boolean;
    isDisabled: boolean;
}

export const Component = ({ isPrimary, isDisabled }: ComponentProps) => {
    styles.useVariants({
        color: !isDisabled,
        borderColor: isPrimary
    })

    return (
        <View style={styles.container} />
    )
}

const styles = StyleSheet.create(theme => ({
    container: {
        variants: {
            color: {
                true: {
                    backgroundColor: theme.colors.primary["100"]
                },
                false: {
                    backgroundColor: theme.colors.primary["200"]
                },
                default: {
                    backgroundColor: theme.colors.background
                }
            },
            borderColor: {
                true: {
                    borderColor: theme.colors.primary
                }
            }
        }
    }
})
import { StyleSheet, Text, View } from "react-native";
import { RemoteComponent } from "react-native-remote-ui";


const FallbackComponent = () => {
	return (
		<View>
			<Text>Fallback Component</Text>
		</View>
	);
};

export default function HomeScreen() {
	return (
		<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
			<Text>Home Screen</Text>
			<RemoteComponent
				fallbackComponent={<FallbackComponent />}
				source={{ uri: "http://localhost:8080/remote-home" }}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	titleContainer: {
		flexDirection: "row",
		alignItems: "center",
		gap: 8,
	},
	stepContainer: {
		gap: 8,
		marginBottom: 8,
	},
	reactLogo: {
		height: 178,
		width: 290,
		bottom: 0,
		left: 0,
		position: "absolute",
	},
});

import { StyleSheet } from "react-native-unistyles";

type AppThemes = typeof appThemes;

declare module "react-native-unistyles" {
	export interface UnistylesThemes extends AppThemes {}
}

const lightTheme = {
	name: "light",
	colors: {
		primary: {
			100: "#FFF2E0",
      		200: "#FFE8C9",
      		300: "#FFBE64",
		},
		text: "#222222",
		background: "#FFFFFF",
	},
	gap: (v: number) => v * 8,
};

const darkTheme = {
	name: "dark",
	colors: {
		primary: {
			100: "#E4E9FF",
			200: "#292971",
			300: "#6043FF",
		},
		text: "#222222",
		background: "#FFFFFF",
	},
};

const settings = {
	initialTheme: "light" as const,
};

const appThemes = {
	light: lightTheme,
	dark: darkTheme,
};

StyleSheet.configure({
	themes: appThemes,
	settings,
});
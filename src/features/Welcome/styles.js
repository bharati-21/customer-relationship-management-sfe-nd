import { StyleSheet } from "react-native";

const welcomeStyles = () =>
	StyleSheet.create({
		container: {
			justifyContent: "center",
			alignItems: "center",
			height: "100%",
			width: "100%",
		},
		heading: {
			fontSize: 24,
			fontWeight: "bold",
			alignSelf: "center",
			textAlign: "center",
		},
	});

export { welcomeStyles };

import { StyleSheet } from "react-native";

const customerListStyles = () =>
	StyleSheet.create({
		heading: {
			textAlign: "center",
			fontSize: 24,
			fontWeight: "bold",
		},
		infoContainer: {
			flexDirection: "row",
		},
		boldText: {
			marginRight: 5,
			fontWeight: "bold",
		},
	});

export { customerListStyles };

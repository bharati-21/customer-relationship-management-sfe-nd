import { StyleSheet } from "react-native";

const buttonStyles = (fullWidth, disabled) =>
	StyleSheet.create({
		button: {
			padding: 10,
			backgroundColor: disabled ? "#ccc" : "#333",
			borderRadius: 3,
			marginTop: 10,
			textAlign: "center",
			minWidth: 150,
		},
		buttonContainer: {
			width: fullWidth ? "100%" : "auto",
		},
		buttonText: {
			color: disabled ? "gray" : "#fff",
			textAlign: "center",
		},
	});

export { buttonStyles };

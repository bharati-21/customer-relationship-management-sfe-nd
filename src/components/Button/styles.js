import { StyleSheet } from "react-native";

const buttonStyles = (fullWidth, disabled) =>
	StyleSheet.create({
		button: {
			padding: 10,
			backgroundColor: disabled ? "#ccc" : "#333",
			borderRadius: 3,
			marginTop: 10,
			textAlign: "center",
		},
		buttonContainer: {
			width: fullWidth ? "100%" : "auto",
		},
		buttonText: {
			color: disabled ? "gray" : "#fff",
		},
	});

export { buttonStyles };

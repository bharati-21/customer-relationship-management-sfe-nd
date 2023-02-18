import { StyleSheet } from "react-native";

const userFormStyles = () =>
	StyleSheet.create({
		form: {
			width: "100%",
			display: "flex",
			borderColor: "#333",
			borderWidth: 1,
			borderStyle: "solid",
			padding: 10,
			borderRadius: 3,
		},
		labelWrapper: {
			width: "100%",
			display: "flex",
			justifyContent: "flex-start",
			marginVertical: 10,
			flexDirection: "column",
		},
		labelText: {
			fontWeight: "500",
            marginBottom: 5
		},
		textInput: {
			backgroundColor: "#fafafa",
			padding: 7,
			borderColor: "#333",
			borderWidth: 1,
			borderStyle: "solid",
			fontSize: 14,
			borderRadius: 3,
		},
		errorText: {
			color: "red",
			marginTop: 20,
		},
	});

export { userFormStyles };

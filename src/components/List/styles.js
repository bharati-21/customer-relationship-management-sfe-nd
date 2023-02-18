import { StyleSheet } from "react-native";

const listStyles = () =>
	StyleSheet.create({
		listContainer: {
			display: "flex"
		},
		list: {
			width: "100%",
		},
		item: {
			padding: 10,
            marginVertical: 5,
            borderColor: "#333",
            borderWidth: 1,
            borderStyle: "solid",
			width: "100%",
			borderRadius: 3,
		},
	});

export { listStyles };

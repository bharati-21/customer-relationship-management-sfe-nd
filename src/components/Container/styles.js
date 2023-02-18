import { StyleSheet } from "react-native";

const containerStyles = () =>
	StyleSheet.create({
		container: {
			justifyContent: "center",
			alignItems: "center",
			height: "100%",
			width: "100%",
            maxWidth: 740,
            margin: "auto",
            padding: 20
		},
        scrollView: {
			flexGrow: 1,
			justifyContent: "flex-start",
		},
	});

export { containerStyles };

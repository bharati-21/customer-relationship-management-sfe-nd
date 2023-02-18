import { StyleSheet } from "react-native";

const appContainerStyles = () =>
	StyleSheet.create({
		safeAreaView: {
			flexGrow: 1,
		},
		appContainer: {
			alignSelf: "center",
			height: "100%",
			backgroundColor: "#FAFAFA",
			width: "100%",
		},
	});

export { appContainerStyles };

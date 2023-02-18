import { View } from "react-native";
import { SafeAreaView, ScrollView } from "react-native";
import { appContainerStyles } from "./styles";
import Navigation from "../../navigation";

const AppContainer = () => {
	const styles = appContainerStyles();
	return (
		<SafeAreaView style={styles.safeAreaView}>
			<View style={styles.appContainer}>
				<Navigation />
			</View>
		</SafeAreaView>
	);
};

export default AppContainer;

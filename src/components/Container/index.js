import { ScrollView, View } from "react-native";
import { containerStyles } from "./styles";

const Container = ({ children, enableScroll = true }) => {
	const styles = containerStyles();
	return !enableScroll ? (
		<View style={styles.container}>{children}</View>
	) : (
		<ScrollView contentContainerStyle={styles.scrollView}>
			<View style={styles.container}>{children}</View>
		</ScrollView>
	);
};

export default Container;

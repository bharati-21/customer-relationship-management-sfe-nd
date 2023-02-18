import { ScrollView, View } from "react-native";
import { containerStyles } from "./styles";

const Container = ({ children }) => {
	const styles = containerStyles();
	return <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.container}>{children}</View>
    </ScrollView>;
};

export default Container;

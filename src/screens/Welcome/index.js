import { useNavigation } from "@react-navigation/native";
import { Text } from "react-native";
import { useDispatch } from "react-redux";
import Button from "../../components/Button";
import Container from "../../components/Container";
import { welcomeStyles } from "./styles";
import * as actions from "../../features/Customer/reducers";

const Welcome = () => {
	const styles = welcomeStyles();
	const { navigate } = useNavigation();
	const dispatch = useDispatch();

	const handleClearStorage = () => {
		dispatch(actions.clearStorage());
	};

	const onPress = (screenName) => {
		navigate(screenName);
	};

	return (
		<Container>
			<Text style={styles.heading}>Customer Relationship Management</Text>
			<Button
				buttonText="Click to Continue"
				onPressHandler={() => onPress("RegionsList")}
			/>
			<Button
				buttonText="Clear storage"
				onPressHandler={handleClearStorage}
			/>
			<Button
				buttonText={"Remind Customer"}
				onPressHandler={() => onPress("RemindCustomer")}
			/>
		</Container>
	);
};

export default Welcome;

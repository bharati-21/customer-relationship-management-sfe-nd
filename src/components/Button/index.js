import { Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { buttonStyles } from "./styles";

const Button = ({
	buttonText,
	onPressHandler,
	fullWidth = false,
	disabled = false,
}) => {
	const styles = buttonStyles(fullWidth, disabled);
	return (
		<TouchableOpacity
			style={styles.button}
			containerStyle={styles.buttonContainer}
			onPress={onPressHandler}
			disabled={disabled}
		>
			<Text style={styles.buttonText}>{buttonText}</Text>
		</TouchableOpacity>
	);
};

export default Button;

import { useRoute } from "@react-navigation/native";
import { Text } from "react-native";
import Container from "../../../components/Container";
import UserForm from "../../../components/UserForm";
import { customerStyles } from "../styles";

const EditCustomer = () => {
	const styles = customerStyles();
	const route = useRoute();
	const { customer } = route.params;

	return (
		<Container>
			<Text style={styles.heading}>Edit Customer</Text>
			<UserForm createNew={false} data={customer} />
		</Container>
	);
};

export default EditCustomer;

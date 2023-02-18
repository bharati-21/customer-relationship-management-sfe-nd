import { Text } from "react-native";
import Container from "../../../components/Container";
import UserForm from "../../../components/UserForm";
import { createCustomerStyles } from "./styles";

const CreateCustomer = () => {
	const styles = createCustomerStyles();
	return (
		<Container>
			<Text style={styles.heading}>Create New Customer</Text>
			<UserForm />
		</Container>
	);
};

export default CreateCustomer;

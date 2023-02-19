import { Text } from "react-native";
import Container from "../../../components/Container";
import Form from "../Form";
import { useNewCustomer, useNewCustomerStatus } from "../hooks";
import { createCustomerStyles } from "./styles";

const CreateCustomer = () => {
	const styles = createCustomerStyles();
	const { onSubmit } = useNewCustomer();
	const status = useNewCustomerStatus();

	return (
		<Container>
			<Text style={styles.heading}>Create New Customer</Text>
			<Form handleSubmit={onSubmit} callStatus={status} />
		</Container>
	);
};

export default CreateCustomer;

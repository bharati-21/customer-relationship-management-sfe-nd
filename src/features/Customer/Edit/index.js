import { useRoute } from "@react-navigation/native";
import { Text } from "react-native";
import Container from "../../../components/Container";
import Form from "../Form";
import { useEditCustomer } from "../hooks";
import { customerStyles } from "../styles";

const EditCustomer = () => {
	const styles = customerStyles();

	const route = useRoute();
	const { customerId } = route.params;
	const { status, onSubmit } = useEditCustomer(customerId);

	return (
		<Container>
			<Text style={styles.heading}>Edit Customer</Text>
			<Form
				customerId={customerId}
				callStatus={status}
				handleSubmit={onSubmit}
			/>
		</Container>
	);
};

export default EditCustomer;

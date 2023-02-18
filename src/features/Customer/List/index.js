import { useNavigation, useRoute } from "@react-navigation/native";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";
import Container from "../../../components/Container";
import List from "../../../components/List";
import { getRegions } from "../../../utilities/regions";
import { getUserStates } from "../../../utilities/userStates";
import { customerListStyles } from "./styles";

const styles = customerListStyles();

const CustomerListItem = ({ listItem: customer }) => {
	const status = getUserStates();
	const regions = getRegions();

	const state = status.find((state) => customer.status === state.id).name;
	const region = regions.find((region) => region.id === customer.region).name;

	return (
		<View>
			<View style={styles.infoContainer}>
				<Text style={styles.boldText}>ID:</Text>
				<Text>{customer.id}</Text>
			</View>
			<View style={styles.infoContainer}>
				<Text style={styles.boldText}>Name:</Text>
				<Text>{`${customer.firstName} ${customer.lastName}`}</Text>
			</View>
			<View style={styles.infoContainer}>
				<Text style={styles.boldText}>Status:</Text>
				<Text>{state}</Text>
			</View>
			<View style={styles.infoContainer}>
				<Text style={styles.boldText}>Region:</Text>
				<Text>{region}</Text>
			</View>
		</View>
	);
};

const CustomerList = () => {
	const route = useRoute();
	const region = route.params.region;
	const { navigate } = useNavigation();

	const { customers = [] } = useSelector((state) => state.customer);

	const customersByRegion = customers.filter(
		(customer) => customer.region === region
	);

	const onPressHandler = (customer) => {
		navigate("EditCustomer", {
			customer,
		});
	};

	return (
		<Container>
			{customersByRegion.length ? (
				<List
					data={customersByRegion}
					title="customers"
					ListItemComponent={CustomerListItem}
					onPressHandler={onPressHandler}
				/>
			) : (
				<Text style={styles.heading}>No customers found</Text>
			)}
		</Container>
	);
};

export default CustomerList;

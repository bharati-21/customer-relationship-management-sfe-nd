import { useNavigation, useRoute } from "@react-navigation/native";
import { View, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Container from "../../../components/Container";
import List from "../../../components/List";
import { getRegions } from "../../../utilities/regions";
import { getUserStates } from "../../../utilities/userStates";
import { customerListStyles } from "./styles";
import * as actions from "../reducers";

const styles = customerListStyles();

const CustomerListItem = ({ listItem: customer }) => {
	const status = getUserStates();
	const regions = getRegions();

	const state = status.find((state) => customer.status === state.id).name;
	const region = regions.find((region) => region.id === customer.region).name;

	return (
		<View>
			<View style={styles.infoContainer}>
				<Text style={styles.boldText}>First Name:</Text>
				<Text>{customer.firstName}</Text>
			</View>
			<View style={styles.infoContainer}>
				<Text style={styles.boldText}>Last Name:</Text>
				<Text>{customer.lastName}</Text>
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
	const dispatch = useDispatch();

	const { customers = [] } = useSelector((state) => state.customer);

	const customersByRegion = customers.filter(
		(customer) => customer.region === region
	);

	const onPressHandler = (customer) => {
		dispatch(actions.setEditingCustomerData({ id: customer.id }));
		navigate("EditCustomer", {
			customer,
		});
	};

	return (
		<Container enableScroll={false}>
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

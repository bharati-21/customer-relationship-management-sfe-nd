import { useNavigation, useRoute } from "@react-navigation/native";
import { View, Text } from "react-native";

import Container from "../../../components/Container";
import List from "../../../components/List";
import { getRegions } from "../../../utilities/regions";
import { getUserStates } from "../../../utilities/userStates";
import { customerListStyles } from "./styles";
import { useListCustomers } from "../hooks";

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

const CustomersList = () => {
	const route = useRoute();
	const regionId = route.params.regionId;
	const regionName = route.params.regionName;
	const { navigate } = useNavigation();
	const customers = useListCustomers();

	const customersByRegion = customers.filter(
		(customer) => customer.region === regionId
	);

	const onPressHandler = (customer) => {
		navigate("EditCustomer", {
			customerId: customer.id,
		});
	};

	return (
		<Container enableScroll={false}>
			{customersByRegion.length ? (
				<>
					<Text>Click customer information to edit</Text>
					<List
						data={customersByRegion}
						title="customers"
						ListItemComponent={CustomerListItem}
						onPressHandler={onPressHandler}
					/>
				</>
			) : (
				<Text style={styles.heading}>
					No customers found for region {regionName}
				</Text>
			)}
		</Container>
	);
};

export default CustomersList;

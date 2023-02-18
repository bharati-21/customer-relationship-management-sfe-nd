import { Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { regionsListStyles } from "./styles";
import List from "../../../components/List";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Button from "../../../components/Button";
import { getRegions } from "../../../utilities/regions";
import Container from "../../../components/Container";
import * as actions from "../../Customer/reducers";

const styles = regionsListStyles();

const RegionsList = () => {
	const { navigate } = useNavigation();
	const dispatch = useDispatch();

	const onPressHandler = (value) => {
		navigate("CustomersList", {
			region: value.id,
		});
	};

	useEffect(() => {
		dispatch(actions.loadCustomers());
	}, []);

	const RegionText = ({ listItem }) => <Text>{listItem.name}</Text>;

	return (
		<Container enableScroll={false}>
			<Text style={styles.listHead}>Regions</Text>
			<Text style={styles.listSubHead}>Click to select a region</Text>
			<List
				data={getRegions()}
				onPressHandler={onPressHandler}
				ListItemComponent={RegionText}
			/>
			<Button
				buttonText={"Create New Customer"}
				onPressHandler={() => navigate("CreateCustomer")}
				fullWidth={true}
			/>
		</Container>
	);
};

export default RegionsList;

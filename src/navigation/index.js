import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EditCustomer from "../features/Customer/Edit";
import CustomerList from "../features/Customer/List";
import CreateCustomer from "../features/Customer/New";
import RegionsList from "../features/Regions/List";
import RemindCustomer from "../screens/RemindCustomer";
import Welcome from "../screens/Welcome";
import { navigationRef } from "./NavigationService";

const Navigation = () => {
	const Stack = createNativeStackNavigator();

	return (
		<NavigationContainer ref={navigationRef}>
			<Stack.Navigator
				initialRouteName="Welcome"
				screenOptions={{
					headerTitleAlign: "center",
				}}
			>
				<Stack.Screen name="Welcome" component={Welcome} />
				<Stack.Screen name="RegionsList" component={RegionsList} />
				<Stack.Screen
					name="CreateCustomer"
					component={CreateCustomer}
				/>
				<Stack.Screen name="CustomersList" component={CustomerList} />
				<Stack.Screen name="EditCustomer" component={EditCustomer} />
				<Stack.Screen
					name="RemindCustomer"
					component={RemindCustomer}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Navigation;

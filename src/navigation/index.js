import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreateCustomerScreen from "../screens/CreateCustomerScreen";
import CustomersListScreen from "../screens/CustomersListScreen";
import EditCustomerScreen from "../screens/EditCustomerScreen";
import RegionsListScreen from "../screens/RegionsListScreen";
import RemindCustomerScreen from "../screens/RemindCustomerScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
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
				<Stack.Screen name="Welcome" component={WelcomeScreen} />
				<Stack.Screen
					name="RegionsList"
					component={RegionsListScreen}
				/>
				<Stack.Screen
					name="CreateCustomer"
					component={CreateCustomerScreen}
				/>
				<Stack.Screen
					name="CustomersList"
					component={CustomersListScreen}
				/>
				<Stack.Screen
					name="EditCustomer"
					component={EditCustomerScreen}
				/>
				<Stack.Screen
					name="RemindCustomer"
					component={RemindCustomerScreen}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Navigation;

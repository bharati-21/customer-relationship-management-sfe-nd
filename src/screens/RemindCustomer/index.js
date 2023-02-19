import React, { useEffect } from "react";
import { Keyboard, Text } from "react-native";
import Constants from "expo-constants";
import * as Notifications from "expo-notifications";
import Button from "../../components/Button";
import Container from "../../components/Container";
import { remindCustomerStyles } from "./style";
import { useListCustomers } from "../../features/Customer/hooks";

const customer = {
	firstName: "Jane",
	lastName: "Doe",
	region: "mumbai",
	status: "INACTIVE",
};

const onSubmit = (randomCustomer, seconds) => {
	Keyboard.dismiss();
	const schedulingOptions = {
		content: {
			title: `Don't forget to contact ${randomCustomer.firstName} ${randomCustomer.lastName}`,
			body: "Open the app to contact the customer and get constant feedback!",
			sound: true,
			priority: Notifications.AndroidNotificationPriority.HIGH,
			color: "blue",
		},
		trigger: {
			seconds: seconds,
		},
	};
	Notifications.scheduleNotificationAsync(schedulingOptions)
		.then(() => console.log("Displayed push notification successfully!"))
		.catch((error) => {
			console.log(error.toString());
		});
};

const handleNotification = () => {
	console.warn("Your notification ran, but won`t show up in the app!");
};

const askNotification = async () => {
	const { status } = await Notifications.requestPermissionsAsync();
	if (Constants.isDevice && status === "granted") {
		console.log("Notification permissions granted.");
	}
};

const getRandomIndex = (length) => Math.floor(Math.random() * length);

const RemindCustomer = () => {
	const customers = useListCustomers();
	const randomCustomer =
		customers.length > 0
			? customers[getRandomIndex(customer.length)]
			: customer;

	useEffect(() => {
		askNotification();

		const listener =
			Notifications.addNotificationReceivedListener(handleNotification);
		return () => listener.remove();
	}, []);

	const styles = remindCustomerStyles();

	return (
		<Container>
			<Text style={styles.heading}>
				Press the button to get your reminder to contact customer!
			</Text>

			<Button
				onPressHandler={() => onSubmit(randomCustomer, 5)}
				buttonText="Schedule"
			/>
		</Container>
	);
};

export default RemindCustomer;

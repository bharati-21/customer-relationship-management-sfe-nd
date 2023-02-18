import { useEffect } from "react";
import { Keyboard } from "react-native";
import Constants from "expo-constants";
import * as Notifications from "expo-notifications";

const onShowNotification = () => {
	Keyboard.dismiss();
	const schedulingOptions = {
		content: {
			title: `Don't forget to contact John Doe!
			}`,
			body: "Open the app to connect with your customer and receive constant feedback!",
			sound: true,
			priority: Notifications.AndroidNotificationPriority.HIGH,
			color: "blue",
		},
		trigger: {
			seconds: 5,
		},
	};
	Notifications.scheduleNotificationAsync(schedulingOptions).catch((error) =>
		console.log(
			error ?? "Could not create a notification. Some error occurred!"
		)
	);
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

const useNotification = () => {
	useEffect(() => {
		askNotification();

		const listener =
			Notifications.addNotificationReceivedListener(handleNotification);
		return () => listener.remove();
	}, []);

	return { onShowNotification };
};

export default useNotification;

import { View, Text, TextInput } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getRegions } from "../../utilities/regions";
import { getUserStates } from "../../utilities/userStates";
import Button from "../Button";
import { userFormStyles } from "./styles";
import * as actions from "../../features/Customer/reducers";
import { Picker } from "@react-native-picker/picker";
import useCustomerFormFields from "../../hooks/useFormData";
import { useEffect, useState } from "react";

const styles = userFormStyles();
const UserForm = ({ createNew = true }) => {
	const { fields, setFormField } = useCustomerFormFields();
	const dispatch = useDispatch();

	const [userToBeEdited, setUserToBeEdited] = useState(actions.initialState);
	const { loading = false, error = null } = useSelector(
		(state) => state.customer
	);

	useEffect(() => {
		if (createNew) {
			if (Object.keys(fields).some((field) => field[field] !== "")) {
				dispatch(actions.clearCustomerFormFields());
			}
		}
		if (!createNew) {
			setUserToBeEdited(fields);
		}
	}, []);

	const changeHandler = (field, value) => {
		setFormField(field, value);
	};

	const hasUserSelection = () => {
		const isActive =
			!loading &&
			firstName.trim() &&
			lastName.trim() &&
			region.trim() &&
			status.trim();

		if (createNew) {
			return isActive;
		}

		return (
			isActive &&
			(firstName.trim() !== userToBeEdited.firstName.trim() ||
				lastName.trim() !== userToBeEdited.lastName.trim() ||
				region.trim() !== userToBeEdited.region.trim() ||
				status.trim() !== userToBeEdited.status.trim())
		);
	};

	const handleSubmit = () => {
		if (createNew) {
			dispatch(actions.createNewCustomer());
		} else {
			dispatch(actions.editCustomer());
		}
	};

	const { firstName, lastName, region, status } = fields;

	const ListPicker = ({ field, data, selectedItem }) => {
		return (
			<Picker
				selectedValue={selectedItem}
				onValueChange={(itemValue) => changeHandler(field, itemValue)}
				style={styles.textInput}
			>
				<Picker.Item
					value={""}
					key={"default"}
					label={`Select a ${field}`}
					enabled={false}
				/>
				{data.map((item) => (
					<Picker.Item
						label={item.name}
						key={item.id}
						value={item.id}
					/>
				))}
			</Picker>
		);
	};

	return (
		<View style={styles.form}>
			<View style={styles.labelWrapper}>
				<Text style={styles.labelText}>First Name</Text>
				<TextInput
					type="text"
					placeholder="First Name"
					style={styles.textInput}
					value={firstName}
					onChangeText={(text) => changeHandler("firstName", text)}
				/>
			</View>
			<View style={styles.labelWrapper}>
				<Text style={styles.labelText}>Last Name</Text>
				<TextInput
					type="text"
					placeholder="Last Name"
					style={styles.textInput}
					value={lastName}
					onChangeText={(text) => changeHandler("lastName", text)}
				/>
			</View>

			<View style={styles.labelWrapper}>
				<Text style={styles.labelText}>Region</Text>
				<ListPicker
					field={"region"}
					data={getRegions()}
					selectedItem={region}
				/>
			</View>
			<View style={styles.labelWrapper}>
				<Text style={styles.labelText}>Status</Text>
				<ListPicker
					data={getUserStates()}
					selectedItem={status}
					field={"status"}
				/>
			</View>
			<Button
				buttonText={"Save Customer"}
				fullWidth={true}
				onPressHandler={handleSubmit}
				disabled={!hasUserSelection()}
			/>
			{error && <Text style={styles.errorText}>{error}</Text>}
		</View>
	);
};

export default UserForm;

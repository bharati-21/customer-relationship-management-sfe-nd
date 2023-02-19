import { View, Text, TextInput } from "react-native";
import { Picker } from "@react-native-picker/picker";

import { getRegions } from "../../../utilities/regions";
import { getUserStates } from "../../../utilities/userStates";
import Button from "../../../components/Button";
import { userFormStyles } from "./styles";
import { useCustomerFormFields, useEditCustomerFields } from "../hooks";
import { states } from "../../../Constants";

const styles = userFormStyles();

const Form = ({ handleSubmit, callStatus, customerId = null }) => {
	const { fields, setFormField } = useCustomerFormFields(customerId);
	const editingFields = useEditCustomerFields();
	const { REQUESTING } = states;

	const onSubmit = () => {
		handleSubmit();
	};

	const { firstName, lastName, region, status } = fields;

	const hasUserSelection = () => {
		const isActive =
			callStatus !== REQUESTING &&
			firstName.trim() &&
			lastName.trim() &&
			region.trim() &&
			status.trim();

		if (!customerId) {
			return isActive;
		}

		return (
			isActive &&
			(firstName.trim() !== editingFields.firstName ||
				lastName.trim() !== editingFields.lastName ||
				status.trim() !== editingFields.status.trim() ||
				region.trim() !== editingFields.region.trim())
		);
	};

	const ListPicker = ({ field, data, selectedItem }) => {
		return (
			<Picker
				selectedValue={selectedItem}
				onValueChange={(itemValue) => setFormField(field, itemValue)}
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
					onChangeText={(text) => setFormField("firstName", text)}
				/>
			</View>
			<View style={styles.labelWrapper}>
				<Text style={styles.labelText}>Last Name</Text>
				<TextInput
					type="text"
					placeholder="Last Name"
					style={styles.textInput}
					value={lastName}
					onChangeText={(text) => setFormField("lastName", text)}
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
				onPressHandler={onSubmit}
				disabled={!hasUserSelection()}
			/>
		</View>
	);
};

export default Form;

import { createSlice } from "@reduxjs/toolkit";

const fieldsInitialState = {
	firstName: "",
	lastName: "",
	status: "",
	region: "",
};

const initialState = {
	customers: [],
	error: null,
	loading: false,
	customerForm: {
		fields: fieldsInitialState,
	},
};

const reducers = {
	createNewCustomer: () => {},
	editCustomer: () => {},
	loadCustomers: () => {},
	clearStorage: () => {},
	setCustomerResult: (state, action) => {
		state.customers = action.payload.customers;
		state.error = action.payload.error;
		state.loading = action.payload.loading;
	},
	setCustomerFormField: (state, action) => {
		const {
			payload: { field, value },
		} = action;
		const currentField = state.customerForm.fields;

		const fields = {
			...currentField,
			[field]: value,
		};

		state.customerForm.fields = fields;
	},
	clearCustomerFormFields: (state) => {
		state.customerForm.fields = fieldsInitialState;
	},
	setEditingCustomerData: (state, action) => {
		const {
			payload: { id },
		} = action;
		state.customerForm.fields = state.customers.find(
			(customer) => customer.id === id
		);
	},
};

const slice = createSlice({
	name: "customer",
	initialState,
	reducers,
});

export const {
	createNewCustomer,
	editCustomer,
	loadCustomers,
	setCustomerResult,
	clearStorage,
	setCustomerFormField,
	clearCustomerFormFields,
	setEditingCustomerData,
} = slice.actions;

export { fieldsInitialState as initialState };

export default slice.reducer;

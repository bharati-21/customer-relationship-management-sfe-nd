import { createSlice } from "@reduxjs/toolkit";
import { states } from "../../Constants";
const { PENDING, REQUESTING, SUCCESS, ERROR } = states;

const fieldsInitialState = {
	firstName: "",
	lastName: "",
	status: "",
	region: "",
	id: null,
};

const initialState = {
	list: {
		customers: [],
		status: PENDING,
	},
	create: {
		status: PENDING,
	},
	edit: {
		status: PENDING,
		editingFields: fieldsInitialState,
	},
	form: {
		fields: fieldsInitialState,
	},
	error: {
		message: "",
	},
	clear: {
		status: PENDING,
	},
};

const reducers = {
	loadCustomerList: (state) => {
		state.list.status = REQUESTING;
	},
	loadCustomerListResult: (state, { payload }) => {
		state.list.status = SUCCESS;
		state.list.customers = payload;
	},
	loadCustomerListError: (state, payload) => {
		state.create.status = ERROR;
		state.error.message = payload;
		state.list.customers = initialState.list.customers;
	},
	createCustomer: (state) => {
		state.create.status = REQUESTING;
	},
	createCustomerResult: (state, { payload }) => {
		state.create.status = SUCCESS;
		state.list.customers = payload;
		state.form.fields = initialState.form.fields;
	},
	createCustomerError: (state, payload) => {
		state.create.status = ERROR;
		state.error.message = payload;
		state.form.fields = initialState.form.fields;
	},
	setForm: (state, { payload }) => {
		const customer = state.list.customers.find(
			(customer) => customer.id === payload
		);

		if (customer) {
			state.form.fields = customer;
		} else {
			state.error.message = `Could not find customer with id: ${id}`;
		}
	},
	editCustomer: (state, { payload }) => {
		state.edit.status = REQUESTING;
	},
	editCustomerResult: (state, { payload }) => {
		state.edit.status = SUCCESS;
		state.list.customers = payload;
		state.form.fields = initialState.form.fields;
	},
	editCustomerStatus: (state, { payload }) => {
		state.edit.editingFields = state.list.customers.find(
			(customer) => customer.id === payload
		);
	},
	editCustomerError: (state) => {
		state.edit.status = ERROR;
		state.error.message = payload;
		state.form.fields = initialState.form.fields;
	},
	setFormField: (state, { payload: { field, value } }) => {
		const current = state.form.fields;

		const fields = {
			...current,
			[field]: value,
		};
		state.form.fields = fields;
	},
	clearPreviousEditedForm: (state) => {
		state.form.fields = initialState.form.fields;
		state.edit.editingFields = initialState.edit.editingFields;
		state.edit.status = PENDING;
	},
	clearStorage: (state) => {
		state.clear.status = REQUESTING;
	},
	clearStorageResult: (state) => {
		state.clear.status = SUCCESS;
		state.list = initialState.list;
		state.edit = initialState.edit;
		state.create = initialState.create;
		state.form = initialState.form;
		state.error = initialState.error;
	},
	clearStorageError: (state, payload) => {
		state.error.message = payload;
		state.clear.status = ERROR;
	},
};

const slice = createSlice({
	name: "customer",
	initialState,
	reducers,
});

export const {
	loadCustomerList,
	loadCustomerListResult,
	loadCustomerListError,
	createCustomer,
	createCustomerResult,
	createCustomerError,
	setForm,
	editCustomer,
	editCustomerResult,
	editCustomerStatus,
	editCustomerError,
	setFormField,
	clearPreviousEditedForm,
	clearStorage,
} = slice.actions;

export default slice.reducer;

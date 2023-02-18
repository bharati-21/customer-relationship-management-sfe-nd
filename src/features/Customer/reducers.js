import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	customers: [],
	error: null,
	loading: false,
};

const reducers = {
	createNewCustomer: () => {},
	editExistingCustomer: () => {},
	loadCustomers: () => {},
    clearStorage: () => {},
	setCustomerResult: (state, action) => {
		console.log(action);
		state.customers = action.payload.customers;
		state.error = action.payload.error;
		state.loading = action.payload.loading;
	},
};

const slice = createSlice({
	name: "customer",
	initialState,
	reducers,
});

export const {
	createNewCustomer,
	editExistingCustomer,
	loadCustomers,
	setCustomerResult,
    clearStorage
} = slice.actions;

export default slice.reducer;

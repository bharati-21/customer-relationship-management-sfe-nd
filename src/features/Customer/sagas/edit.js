import { delay, put, select, takeLatest } from "redux-saga/effects";
import { set } from "../../../utilities/async_storage";
import * as actions from "../reducers";
import * as RootNavigation from "../../../navigation/NavigationService";

export function* watchEditCustomer() {
	yield takeLatest(actions.editCustomer.toString(), takeEditCustomer);
}

export function* takeEditCustomer() {
	try {
		const customers = yield select((state) => state.customer.customers);
		const fields = yield select(
			(state) => state.customer.customerForm.fields
		);

		yield put(
			actions.setCustomerResult({
				customers,
				loading: true,
				error: null,
			})
		);
		yield delay(1500);

		const newCustomers = customers.map((customer) =>
			customer.id === fields.id ? { ...customer, ...fields } : customer
		);

		yield set("CUSTOMERS_KEY", newCustomers);
		yield put(
			actions.setCustomerResult({
				customers: newCustomers,
				loading: false,
				error: null,
			})
		);
		alert("Edited customer information successfully!");
		yield put(actions.clearCustomerFormFields());
		RootNavigation.navigate("RegionsList");
	} catch (error) {
		console.log(error);
		yield put(
			actions.setCustomerResult({
				loading: false,
				error: "Failed to create new customer. Please try again later.",
			})
		);
		alert("Failed to edit customer information. Please try again later.");
	}
}

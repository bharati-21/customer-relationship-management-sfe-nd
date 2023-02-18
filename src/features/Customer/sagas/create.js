import { delay, put, select, takeLatest } from "redux-saga/effects";
import { set } from "../../../utilities/async_storage";
import * as actions from "../reducers";
import { v4 as uuid } from "uuid";

export function* watchCreateCustomer() {
	yield takeLatest(actions.createNewCustomer.toString(), takeCreateCustomer);
}

export function* takeCreateCustomer() {
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

		const newCustomers = [
			...customers,
			{
				id: uuid(),
				...fields,
			},
		];
		yield set("CUSTOMERS_KEY", newCustomers);
		yield put(
			actions.setCustomerResult({
				customers: newCustomers,
				loading: false,
				error: null,
			})
		);
		alert("Created new customer successfully!");
		yield put(actions.clearCustomerFormFields());
	} catch (error) {
		console.log(error);
		yield put(
			actions.setCustomerResult({
				loading: false,
				error: "Failed to create new customer. Please try again later.",
			})
		);
		alert("Failed to create new customer. Please try again later.");
	}
}

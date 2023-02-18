import { delay, put, select, takeLatest } from "redux-saga/effects";
import { set } from "../../../utilities/async_storage";
import * as actions from "../reducers";

export function* watchEditCustomer() {
	yield takeLatest(actions.editExistingCustomer.toString(), takeEditCustomer);
}

export function* takeEditCustomer({ payload }) {
	try {
		const customers = yield select((state) => state.customer.customers);
		yield put(
			actions.setCustomerResult({
				customers,
				loading: true,
				error: null,
			})
		);
		yield delay(1500);

		const newCustomers = customers.map((customer) =>
			customer.id === payload.id ? { ...customer, ...payload } : customer
		);

		yield set("CUSTOMERS_KEY", newCustomers);
		yield put(
			actions.setCustomerResult({
				customers: newCustomers,
				loading: false,
				error: null,
			})
		);
	} catch (error) {
		console.log(error);
		yield put(
			actions.setCustomerResult({
				loading: false,
				error: "Failed to create new customer. Please try again later.",
			})
		);
	}
}

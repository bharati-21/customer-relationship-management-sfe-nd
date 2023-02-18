import { delay, put, select, takeLatest } from "redux-saga/effects";
import { get } from "../../../utilities/async_storage";
import * as actions from "../reducers";

export function* watchLoadCustomers() {
	yield takeLatest(actions.loadCustomers.toString(), takeLoadCustomers);
}

export function* takeLoadCustomers() {
	try {
		let customers = yield select((state) => state.customer.customers);
		yield put(
			actions.setCustomerResult({
				customers,
				loading: true,
				error: null,
			})
		);
		customers = yield get("CUSTOMERS_KEY");
		yield delay(1500);

		yield put(
			actions.setCustomerResult({
				customers: customers ?? [],
				loading: false,
				error: null,
			})
		);
	} catch (error) {
		console.log(error);
		yield put(
			actions.setCustomerResult({
				loading: false,
				error: "Failed to load customers. Please try again later.",
			})
		);
	}
}

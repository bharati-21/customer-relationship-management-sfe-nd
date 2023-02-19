import { delay, put, select, takeLatest } from "redux-saga/effects";
import { get } from "../../../utilities/async_storage";
import * as actions from "../reducers";

export function* watchLoadCustomers() {
	yield takeLatest(actions.loadCustomerList.toString(), takeLoadCustomers);
}

export function* takeLoadCustomers() {
	try {
		let customers = yield select((state) => state.customer.customers);
		customers = yield get("CUSTOMERS_KEY");

		yield delay(1500);

		yield put(actions.loadCustomerListResult(customers ?? []));
	} catch (error) {
		console.log(error);
		yield put(actions.loadCustomerListError(error.toString()));
		alert("Failed to load customers list. Please try again later.");
	}
}

import { delay, put, select, takeLatest } from "redux-saga/effects";
import { set } from "../../../utilities/async_storage";
import * as actions from "../reducers";
import * as RootNavigation from "../../../navigation/NavigationService";

export function* watchEditCustomer() {
	yield takeLatest(actions.editCustomer.toString(), takeEditCustomer);
}

export function* takeEditCustomer({ payload }) {
	const customerId = payload;

	try {
		const customers = yield select(
			(state) => state.customer.list.customers
		);
		const fields = yield select((state) => state.customer.form.fields);

		yield delay(1500);

		const result = customers.map((customer) =>
			customer.id === customerId ? fields : customer
		);

		yield set("CUSTOMERS_KEY", result);
		yield put(actions.editCustomerResult(result));

		alert("Edited customer information successfully!");
		RootNavigation.navigate("RegionsList");
	} catch (error) {
		console.log(error);
		yield put(actions.editCustomerError(error.toString()));
		alert("Failed to edit customer information. Please try again later.");
	}
}

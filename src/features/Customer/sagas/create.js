import { delay, put, select, takeLatest } from "redux-saga/effects";
import { set } from "../../../utilities/async_storage";
import * as actions from "../reducers";
import { v4 as uuid } from "uuid";
import * as RootNavigation from "../../../navigation/NavigationService";

export function* watchCreateCustomer() {
	yield takeLatest(actions.createCustomer.toString(), takeCreateCustomer);
}

export function* takeCreateCustomer() {
	try {
		const customers = yield select(
			(state) => state.customer.list.customers
		);
		const fields = yield select((state) => state.customer.form.fields);

		const newCustomer = {
			id: uuid(),
			...fields,
		};

		yield delay(1500);

		const result = [...customers, newCustomer];

		yield set("CUSTOMERS_KEY", result);
		yield put(actions.createCustomerResult(result));

		alert("Created new customer successfully!");
		RootNavigation.navigate("RegionsList");
	} catch (error) {
		console.log(error);
		yield put(actions.createCustomerError(error.toString()));
		alert("Failed to create new customer. Please try again later.");
	}
}

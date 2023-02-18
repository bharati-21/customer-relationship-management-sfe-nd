import { all } from "redux-saga/effects";
import { watchCreateCustomer } from "./create";
import { watchLoadCustomers } from "./load";
import { watchEditCustomer } from "./edit";

export default function* customer() {
	yield all([
		watchLoadCustomers(),
		watchEditCustomer(),
		watchCreateCustomer(),
	]);
}

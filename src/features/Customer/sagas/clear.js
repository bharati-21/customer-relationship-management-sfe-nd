import { delay, put, select, takeLatest } from "redux-saga/effects";
import { clear } from "../../../utilities/async_storage";
import * as actions from "../reducers";
import { v4 as uuid } from "uuid";

export function* watchClearStorage() {
	yield takeLatest(actions.clearStorage.toString(), takeClearStorage);
}

export function* takeClearStorage() {
	try {
		yield delay(1500);

		yield clear();
	} catch (error) {
		console.log(error);
	}
}
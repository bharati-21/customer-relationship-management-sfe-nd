import { combineReducers } from "@reduxjs/toolkit";
import customer from "../features/Customer/reducers";

const rootReducer = combineReducers({
	customer,
});

export default rootReducer;

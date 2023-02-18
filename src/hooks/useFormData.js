import { useDispatch, useSelector } from "react-redux";
import * as actions from "../features/Customer/reducers";

const useCustomerFormFields = () => {
	const dispatch = useDispatch();

	const {
		customerForm: { fields },
	} = useSelector((state) => state.customer);

	return {
		fields,
		setFormField: (field, value) => {
			return dispatch(actions.setCustomerFormField({ field, value }));
		},
	};
};

export default useCustomerFormFields;

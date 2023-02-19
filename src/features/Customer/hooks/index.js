import { useDispatch, useSelector } from "react-redux";
import * as actions from "../reducers";
import { states } from "../../../Constants";
import { useEffect } from "react";

export const useCustomerFormFields = (customerId = null) => {
	const { PENDING, SUCCESS } = states;
	const dispatch = useDispatch();

	const status = useSelector((state) => state.customer.edit.status);
	const fields = useSelector((state) => state.customer.form.fields);

	useEffect(() => {
		// clear previous successfull edit status
		if (customerId && status === SUCCESS) {
			dispatch(actions.clearPreviousEditedForm());
		}
		// fill new edit information
		else if (customerId && status === PENDING) {
			dispatch(actions.editCustomerStatus(customerId));
			dispatch(actions.setForm(customerId));
		}
		// clear form to create new customer
		else if (!customerId) {
			dispatch(actions.clearPreviousEditedForm());
		}
	}, [customerId, status]);

	return {
		fields,
		setFormField: (field, value) => {
			return dispatch(actions.setFormField({ field, value }));
		},
	};
};

export const useNewCustomer = () => {
	const dispatch = useDispatch();

	return {
		onSubmit: () => {
			dispatch(actions.createCustomer());
		},
	};
};

export const useNewCustomerStatus = () => {
	return useSelector((state) => state.customer.create.status);
};

export const useEditCustomerStatus = () => {
	return useSelector((state) => state.customer.edit.status);
};

export const useEditCustomerFields = () => {
	return useSelector((state) => state.customer.edit.editingFields);
};

export const useEditCustomer = (customerId) => {
	const dispatch = useDispatch();
	const status = useEditCustomerStatus();

	return {
		status,
		onSubmit: () => {
			dispatch(actions.editCustomer(customerId));
		},
	};
};

export const useListCustomers = () => {
	return useSelector((state) => state.customer.list.customers);
};

export const clearPreviousEditedForm = () => {};

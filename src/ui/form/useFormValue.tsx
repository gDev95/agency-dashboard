import { getFormValues } from "redux-form";
import { useSelector } from "react-redux";
import { get } from "lodash";

export function useFormValue(
	formName: string,
	fieldName: string,
	isNested = false
): any {
	const formSelector = getFormValues(formName);
	const value: any = useSelector(formSelector);
	if (isNested) {
		return get(value, fieldName);
	}

	return value[fieldName];
}

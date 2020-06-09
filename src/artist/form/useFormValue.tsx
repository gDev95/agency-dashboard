import { getFormValues } from "redux-form";
import { useSelector } from "react-redux";

export function useFormValue(formName: string, fieldName: string): any {
	const formSelector = getFormValues(formName);
	const value: any = useSelector(formSelector);
	return value[fieldName];
}

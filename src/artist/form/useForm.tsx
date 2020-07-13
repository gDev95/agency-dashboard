import { getFormValues } from "redux-form";
import { useSelector } from "react-redux";

export function useForm(formName: string) {
	const formSelector = getFormValues(formName);
	const value: any = useSelector(formSelector);
	return value;
}

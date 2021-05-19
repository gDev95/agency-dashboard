import { getFormValues } from "redux-form";
import { useSelector } from "react-redux";
import get from "lodash/get";

export function useFormValue(formName: string, fieldName: string, isNested = false): any {
    const formSelector = getFormValues(formName);
    console.log(formSelector);
    const value: any = useSelector(formSelector);
    console.log(value);
    if (isNested) {
        return get(value, fieldName);
    }

    return value[fieldName];
}

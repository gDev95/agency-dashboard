import React, { ComponentType } from "react";
import { WrappedFieldProps } from "redux-form";
import { FormHelperText, TextFieldProps } from "@material-ui/core";
import styled from "styled-components";

const StyledErrorText = styled(FormHelperText)`
    color: red !important;
`;

interface CustomProps extends WrappedFieldProps {
    isRequired?: boolean;
    multiline?: boolean;
    hideError?: boolean;
}
export function formPropsAdapter(InputComponent: ComponentType<TextFieldProps>) {
    return function FormPropsAdapter({
        input,
        meta,
        isRequired = false,

        hideError = false,
        ...otherProps
    }: CustomProps) {
        return (
            <div {...otherProps}>
                <InputComponent {...otherProps} {...input} key={input.name} helperText={isRequired && "Required*"} />
                {!hideError && meta.touched && meta.error && <StyledErrorText>{meta.error}</StyledErrorText>}
            </div>
        );
    };
}

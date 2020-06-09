import React, { ComponentType } from "react";
import { WrappedFieldProps } from "redux-form";
import { FormHelperText, TextFieldProps } from "@material-ui/core";
import styled from "styled-components";

const StyledErrorText = styled(FormHelperText)`
	color: red !important;
`;
interface CustomProps extends WrappedFieldProps {
	isRequired?: boolean;
}
export function formPropsAdapter(
	InputComponent: ComponentType<TextFieldProps>
) {
	return function FormPropsAdapter({
		input,
		meta,
		isRequired = false,
		...otherProps
	}: CustomProps) {
		console.log("REQUIRED ", isRequired);
		return (
			<>
				<InputComponent
					{...otherProps}
					{...input}
					key={input.name}
					helperText={isRequired && !meta.touched && "Required*"}
				/>
				{meta.touched && meta.error && (
					<StyledErrorText>{meta.error}</StyledErrorText>
				)}
			</>
		);
	};
}

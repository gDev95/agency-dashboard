import React, { useState, useRef, ComponentType } from "react";
import { Button, FormHelperText } from "@material-ui/core";
import ReportIcon from "@material-ui/icons/Report";
import CheckIcon from "@material-ui/icons/Check";
import styled from "styled-components";
import { ImageUploadHelper } from "../../helper";
import { useDispatch, useSelector } from "react-redux";
import { uploadImageStartAction, uploadImageFinishAction } from "../actions";
import { WrappedFieldInputProps, WrappedFieldMetaProps } from "redux-form";
import { useFormValue } from "./useFormValue";

const StyledErrorText = styled(FormHelperText)`
	color: red !important;
`;

interface PropTypes {
	input: WrappedFieldInputProps;
	meta: WrappedFieldMetaProps;
	buttonLabel: string;
	formName: string;
	isRequired: boolean;
}

export const ImageUploadInput = ({
	buttonLabel: label,
	input,
	meta,
	formName,
}: PropTypes) => {
	const dispatch = useDispatch();

	const handleImageChange = (
		event: React.ChangeEvent<HTMLInputElement>,
		fileInput: WrappedFieldInputProps
	) => {
		dispatch(uploadImageStartAction());
		const imageData = event.target.files ? event.target.files[0] : null;
		const imageName = "-image-" + Date.now();
		const imageUploader = new ImageUploadHelper();

		if (!imageData) {
			dispatch(uploadImageFinishAction());
			return;
		}

		imageUploader.upload(
			imageName,
			imageData,
			(url: string) => {
				dispatch(uploadImageFinishAction());
				fileInput.onChange(imageData.name);
			},
			(error) => {
				console.error(error);
				fileInput.onChange(null);
				dispatch(uploadImageFinishAction());
			}
		);
	};
	const isUploaded = useFormValue(formName, input.name);
	const inputRef = useRef(null);
	return (
		<>
			<input
				ref={inputRef}
				onChange={(event) => handleImageChange(event, input)}
				key={input.name}
				type="file"
				accept="image/*"
				style={{ display: "none" }}
			/>

			<Button
				color={meta.touched && meta.error ? "secondary" : "primary"}
				variant="contained"
				component="span"
				// @ts-ignore
				onClick={() => inputRef.current.click()}
			>
				{meta.touched && meta.error && <ReportIcon />}
				{isUploaded ? (
					<>
						<CheckIcon /> <span>Successfully uploaded</span>
					</>
				) : (
					label
				)}
			</Button>

			{meta.touched && meta.error && (
				<StyledErrorText>{meta.error}</StyledErrorText>
			)}
		</>
	);
};

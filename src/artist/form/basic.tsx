import React from "react";

import { Button, TextField, Typography } from "@material-ui/core";
import { validateBasicInformation as validate } from "./validate";
import {
	UploadingProgress,
	FormGroupHeader,
	ImageUploader,
	TextFieldWrapper,
} from "./styled";
import { Field, reduxForm, InjectedFormProps } from "redux-form";
import { formPropsAdapter } from "./formPropsAdapter";
import { ImageUploadInput } from "./imageUploadInput";
import { useSelector } from "react-redux";
import { AppState } from "../../store";
import styled from "styled-components";

const ImageUploadWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: column;
	height: 150px;
	padding: 30px;
`;

const StyledTypography = styled(Typography)`
	align-self: flex-start;
`;

interface CustomPropTypes {
	profileImageUrl?: string;
	coverImageUrl?: string;
	logoUrl?: string;
	name?: string;
	description?: string;
	handleNext: () => void;
	handleBack: () => void;
}

const INITIAL_STATE = {
	name: "",
	description: "",
	logoUrl: "",
	coverImageUrl: "",
	profileImageUrl: "",
};
const AdaptedTextField = formPropsAdapter(TextField);
const RawBasicInformationForm = (props: any) => {
	const isUploading = useSelector(
		(state: AppState) => state.artist.isImageUploading
	);

	return (
		<>
			{isUploading && <UploadingProgress />}
			<FormGroupHeader variant="h6" gutterBottom={true}>
				Basic Information
			</FormGroupHeader>
			<ImageUploadWrapper>
				<StyledTypography>Required*</StyledTypography>
				<Field
					name="profileImageUrl"
					buttonLabel="Upload Profile Image"
					component={ImageUploadInput}
					formName="basicInformation"
					isRequired={true}
				/>
				<Field
					name="coverImageUrl"
					buttonLabel="Upload Cover Image"
					component={ImageUploadInput}
					formName="basicInformation"
					isRequired={true}
				/>
				<Field
					name="logoUrl"
					buttonLabel="Upload Logo"
					component={ImageUploadInput}
					formName="basicInformation"
					isRequired={true}
				/>
			</ImageUploadWrapper>

			<TextFieldWrapper>
				<Field
					isRequired={true}
					name="name"
					component={AdaptedTextField}
					label="Name"
					placeHolder="Name of Artist"
				/>
				<Field
					name="description"
					isRequired={true}
					component={AdaptedTextField}
					label="Description"
					placeHolder="Describe the artist"
				/>
			</TextFieldWrapper>
			<div>
				<Button disabled={true} onClick={props.handleBack}>
					Back
				</Button>

				<Button
					variant="contained"
					color="primary"
					disabled={!props.valid}
					onClick={props.handleNext}
				>
					Next
				</Button>
			</div>
		</>
	);
};

export const BasicInformationForm = reduxForm<{}, CustomPropTypes>({
	destroyOnUnmount: false,
	forceUnregisterOnUnmount: true,
	form: "basicInformation",
	touchOnChange: true,
	validate,
	initialValues: INITIAL_STATE,
})(RawBasicInformationForm);

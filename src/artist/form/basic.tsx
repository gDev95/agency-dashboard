import React, { useEffect } from "react";

import { Button, TextField, Typography } from "@material-ui/core";
import { validateBasicInformation as validate } from "./validate";
import {
	UploadingProgress,
	FormGroupHeader,
	TextFieldWrapper,
	ButtonWrapper,
} from "./styled";
import { Field, reduxForm, change } from "redux-form";
import { ImageUploadInput, formPropsAdapter } from "../../ui/form";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../../store";
import styled from "styled-components";

import { ArtistBasicInformation } from "../artist.model";

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
	basicInformation: ArtistBasicInformation;
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

	const { basicInformation } = props;
	const dispatch = useDispatch();
	useEffect(() => {
		if (basicInformation) {
			Object.keys(basicInformation).map((key) =>
				dispatch(change("basicInformation", key, basicInformation[key]))
			);
		}
	}, [basicInformation]);
	return (
		<>
			{isUploading && <UploadingProgress />}
			<FormGroupHeader variant="h6" gutterBottom={true}>
				Basic Information
			</FormGroupHeader>
			<ImageUploadWrapper>
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
					placeholder="Name of Artist"
				/>
				<Field
					name="description"
					isRequired={true}
					component={AdaptedTextField}
					placeholder="Description"
					multiline={true}
				/>
			</TextFieldWrapper>
			<ButtonWrapper>
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
			</ButtonWrapper>
		</>
	);
};

export const BasicInformationForm = reduxForm<{}, any>({
	destroyOnUnmount: false,
	forceUnregisterOnUnmount: true,
	enableReinitialize: true,
	form: "basicInformation",
	touchOnChange: true,
	validate,
	initialValues: INITIAL_STATE,
})(RawBasicInformationForm);

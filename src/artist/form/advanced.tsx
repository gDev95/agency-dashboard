import React, { useEffect } from "react";

import { Button } from "@material-ui/core";

import { validateAdvancedInformation as validate } from "./validate";

import { FormGroupHeader, UploadingProgress, ButtonWrapper } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { reduxForm, FieldArray, change } from "redux-form";
import { AppState } from "../../store";
import { ArtistLabels } from "./labels";
import { ArtistSetup } from "./setup";
import { TextFieldArray } from "../../ui/form";

const INITIAL_STATE = {
	labels: [],
	setup: {},
	hospitality: [],
};

export const RawAdvancedInformationForm = (props: any) => {
	const isUploading = useSelector(
		(state: AppState) => state.artist.isImageUploading
	);
	const { advancedInformation } = props;
	const dispatch = useDispatch();

	useEffect(() => {
		if (advancedInformation) {
			Object.keys(advancedInformation).map((key) =>
				dispatch(change("advancedInformation", key, advancedInformation[key]))
			);
		}
	}, [advancedInformation]);
	return (
		<>
			{isUploading && <UploadingProgress />}
			<FormGroupHeader variant="h6">Advanced Information</FormGroupHeader>
			<FormGroupHeader variant="subtitle1">Labels</FormGroupHeader>
			<FieldArray name="labels" component={ArtistLabels} />
			<FormGroupHeader variant="subtitle1">Setup</FormGroupHeader>
			<ArtistSetup />
			<FormGroupHeader variant="subtitle1">Hospitality</FormGroupHeader>
			<FieldArray
				name="hospitality"
				label="Hospitality"
				component={TextFieldArray}
			/>
			<ButtonWrapper>
				<Button onClick={props.handleBack}>Back</Button>

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

export const AdvancedInformationForm = reduxForm<{}, any>({
	destroyOnUnmount: false,
	forceUnregisterOnUnmount: true,
	form: "advancedInformation",
	touchOnChange: true,
	validate,
	initialValues: INITIAL_STATE,
})(RawAdvancedInformationForm);

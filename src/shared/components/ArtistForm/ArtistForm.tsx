import React, { useState, useEffect } from "react";
import { Paper } from "@material-ui/core";

import {
	SocialMediaLinks,
	ArtistBasicInformation,
	ArtistAdvancedInformation
} from "../../models/Artist/Artist.model";

import Form from "./styled-components/Form";

import AdvancedInformatioFormGroup from "./AdvancedInformationFormGroup/AdvancedInformationFormGroup";
import BasicInformationFormGroup from "./BasicInformationFormGroup/BasicInformationFormGroup";
import FormStepper from "../FormStepper/form-stepper";
import { getProperties } from "../../helper/props";
import { ArtistStateKeyHelper } from "../../helper/AristStateKeyHelper/aritst-state-key.helper";
import SocialMediaFormGroup from "./SocialMediaLinksFormGroup/SocialMediaLinksFormGroup";
import FormValidator from "../../helper/FormValidator.helper";

interface ArtistState {
	basicInformation: ArtistBasicInformation;
	advancedInformation: ArtistAdvancedInformation;
	socialMediaLinks: SocialMediaLinks;
}

interface Props {
	basicInformation?: ArtistBasicInformation;
	advancedInformation?: ArtistAdvancedInformation;
	socialMediaLinks?: SocialMediaLinks;
	submitButtonLabel: string;
	hasReset?: boolean;
	error?: boolean;
	onFormSubmit(
		basicInformation: ArtistBasicInformation,
		advancedInformation: ArtistAdvancedInformation,
		socialMediaLinks: SocialMediaLinks
	): void;
}

const INITIAL_STATE = {
	basicInformation: {
		name: "",
		description: "",
		logoUrl: "",
		coverImageUrl: "",
		profileImageUrl: ""
	},
	advancedInformation: {
		labels: [{ link: "", logoUrl: "" }],
		rider: {
			equipment: [""],
			equipmentImageUrl: ""
		},
		hospitality: [""]
	},
	socialMediaLinks: {
		facebook: "",
		instagram: "",
		beatport: "",
		residentAdvisor: "",
		soundCloud: ""
	}
};

const ArtistForm = (props: Props) => {
	const {
		basicInformation,
		advancedInformation,
		socialMediaLinks,
		submitButtonLabel,
		onFormSubmit,
		hasReset = true,
		error
	} = props;

	const [activeStep, setActiveStep] = React.useState(0);

	const [formErrors, setFormErrors] = useState<Set<string>>(new Set());
	const [artistValues, setArtistValues] = useState<ArtistState>(INITIAL_STATE);

	const [disabledButton, setDisabledButton] = useState<boolean>(false);

	const validator = new FormValidator();

	useEffect(() => {
		if (basicInformation && socialMediaLinks && advancedInformation) {
			console.log(
				"We got information",
				basicInformation && socialMediaLinks && advancedInformation
			);
			setArtistValues({
				basicInformation,
				advancedInformation,
				socialMediaLinks
			});
		}
	}, [basicInformation, advancedInformation, socialMediaLinks]);

	const handleFormChange = (primaryProperty: keyof ArtistState) => (
		nestedProperty: string,
		value: any
	): void => {
		disabledButton && setDisabledButton(false);
		setArtistValues({
			...artistValues,
			[primaryProperty]: {
				...artistValues[primaryProperty],
				[nestedProperty]: value
			}
		});
	};

	const validateStep = (type: keyof ArtistState) => {
		Object.entries(getProperties(artistValues, type)).forEach(
			formGroupEntry => {
				const key = formGroupEntry[0];
				const value = formGroupEntry[1];
				validator.errors = formErrors;
				validator.validate(key, value);
				setFormErrors(new Set(validator.errors));
			}
		);
	};

	const handleFormSubmit = () => {
		validateStep("socialMediaLinks");
		formErrors.size === 0 &&
			onFormSubmit(
				artistValues.basicInformation,
				artistValues.advancedInformation,
				artistValues.socialMediaLinks
			) &&
			setActiveStep(3);
	};

	const handleNext = () => {
		validateStep(ArtistStateKeyHelper.getKeyByIndex(activeStep));
		formErrors.size !== 0 && setDisabledButton(true);
		formErrors.size === 0 &&
			setActiveStep(prevActiveStep => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep(prevActiveStep => prevActiveStep - 1);
	};

	const handleReset = () => {
		setArtistValues(INITIAL_STATE);
		setActiveStep(0);
	};

	return (
		<Paper>
			<Form autoComplete="off">
				<FormStepper
					handleNext={handleNext}
					handleBack={handleBack}
					handleReset={handleReset}
					hasReset={hasReset}
					disableButton={disabledButton}
					step={activeStep}
					error={error}
					formComponents={[
						<BasicInformationFormGroup
							key="basicInformation"
							{...artistValues.basicInformation}
							formErrors={formErrors}
							onChange={handleFormChange("basicInformation")}
						/>,
						<AdvancedInformatioFormGroup
							key="advancedInformation"
							{...artistValues.advancedInformation}
							formErrors={formErrors}
							onChange={handleFormChange("advancedInformation")}
						/>,
						<SocialMediaFormGroup
							key="socialMediaLinks"
							{...artistValues.socialMediaLinks}
							formErrors={formErrors}
							onChange={handleFormChange("socialMediaLinks")}
						/>
					]}
					submitButtonLabel={submitButtonLabel}
					handleFormSubmit={handleFormSubmit}
				/>
			</Form>
		</Paper>
	);
};

export default ArtistForm;

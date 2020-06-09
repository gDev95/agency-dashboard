import React, { useState, useEffect } from "react";
import { Paper } from "@material-ui/core";

import FormStepper from "./formStepper";

import {
	SocialMediaLinks,
	ArtistAdvancedInformation,
	ArtistBasicInformation,
} from "../artist.model";

import { BasicInformationForm } from "./basic";
import { SocialMediaFormGroup } from "./socialMedia";
import { AdvancedInformatioFormGroup } from "./advanced";

import { FormRoot } from "./styled";

interface ArtistState {
	basicInformation: ArtistBasicInformation;
	advancedInformation: ArtistAdvancedInformation;
	socialMediaLinks: SocialMediaLinks;
}

interface Props {
	submitButtonLabel: string;
	hasReset?: boolean;

	onFormSubmit: () => unknown;
}

const INITIAL_STATE = {
	basicInformation: {
		name: "",
		description: "",
		logoUrl: "",
		coverImageUrl: "",
		profileImageUrl: "",
	},
	advancedInformation: {
		labels: [{ link: "", logoUrl: "" }],
		rider: {
			equipment: [""],
			equipmentImageUrl: "",
		},
		hospitality: [""],
	},
	socialMediaLinks: {
		facebook: "",
		instagram: "",
		beatport: "",
		residentAdvisor: "",
		soundCloud: "",
	},
};

export const ArtistForm = (props: Props) => {
	const { submitButtonLabel, hasReset = false, onFormSubmit } = props;

	const [activeStep, setActiveStep] = React.useState(0);

	const [disabledButton, setDisabledButton] = useState<boolean>(false);

	return (
		<Paper>
			<FormRoot autoComplete="off">
				<FormStepper
					hasReset={hasReset}
					submitButtonLabel={submitButtonLabel}
					handleFormSubmit={onFormSubmit}
				/>
			</FormRoot>
		</Paper>
	);
};

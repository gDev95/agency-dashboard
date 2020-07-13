import { FormErrors } from "redux-form";
import {
	ArtistAdvancedInformation,
	ArtistBasicInformation,
	Label,
	Setup,
} from "../artist.model";

export const validateBasicInformation = (
	values: ArtistBasicInformation
): FormErrors<ArtistBasicInformation> => {
	const errors: FormErrors<ArtistBasicInformation> = {};

	if (isStringEmpty(values.name)) {
		errors.name = "A name is required!";
	}

	if (isStringEmpty(values.description)) {
		errors.description = "A description is required!";
	}

	if (isStringEmpty(values.coverImageUrl)) {
		errors.coverImageUrl = "A Cover is required!";
	}

	if (isStringEmpty(values.profileImageUrl)) {
		errors.profileImageUrl = "A Profile Image is required!";
	}

	if (isStringEmpty(values.logoUrl)) {
		errors.logoUrl = "A Logo is required!";
	}

	return errors;
};

export const validateAdvancedInformation = (
	values: ArtistAdvancedInformation
) => {
	const errors: any = {};
	errors.labels = validateLabels(values.labels);
	errors.setup = validateSetup(values.setup);
	errors.hospitality = validateHospitality(values.hospitality);

	return errors;
};

function validateLabels(labels: Label[]) {
	if (isListEmpty(labels)) {
		return { _error: "At least one Label should be added" };
	}

	const invalidLabels: string[] = [];
	labels.forEach((label, index) => {
		if (!isLabelValid(label)) {
			invalidLabels.push("Label #" + (index + 1));
		}
	});

	if (invalidLabels.length > 0) {
		return {
			_error:
				"At least one or more Labels where invalid: " +
				invalidLabels.toString(),
		};
	}
}

function validateSetup(setup: Setup) {
	if (!setup) {
		return { _error: "No Setup added, please consider adding a setup" };
	}
	if (isListEmpty(setup.equipment)) {
		return {
			equipment: { _error: "At least one piece of equipment should be added" },
		};
	}

	const invalidEquipment: string[] = [];
	setup.equipment.forEach((item, index) => {
		if (isStringEmpty(item)) {
			invalidEquipment.push("Equipment #" + (index + 1));
		}
	});

	if (invalidEquipment.length > 0) {
		return {
			equipment: {
				_error:
					"At least one or more Hospitality where invalid: " +
					invalidEquipment.toString(),
			},
		};
	}

	if (isStringEmpty(setup.equipmentImageUrl)) {
		return {
			equipmentImageUrl:
				"Missing image of equipment, please upload a photo of your setup",
		};
	}
}

function validateHospitality(hospitality: string[]) {
	if (isListEmpty(hospitality)) {
		return { _error: "At least one item of hospitality should be added" };
	}

	const invalidItems: string[] = [];
	hospitality.forEach((item, index) => {
		if (isStringEmpty(item)) {
			invalidItems.push("Hospitality #" + (index + 1));
		}
	});

	if (invalidItems.length > 0) {
		return {
			_error:
				"At least one or more Hospitality where invalid: " +
				invalidItems.toString(),
		};
	}
}

/** Generic Validation */

function isListEmpty(list: any[]) {
	if (list && list.length) {
		return list.length === 0;
	}

	return true;
}

function isLabelValid(label: Label) {
	return !isStringEmpty(label.link) && !isStringEmpty(label.logoUrl);
}

function isStringEmpty(str: string) {
	if (str) {
		return str.trim().length === 0;
	}
	return true;
}

import { FormErrors } from "redux-form";
import {
	ArtistAdvancedInformation,
	SocialMediaLinks,
	ArtistBasicInformation,
} from "../artist.model";

export const validateBasicInformation = (
	values: ArtistBasicInformation
): FormErrors<ArtistBasicInformation> => {
	const errors: FormErrors<ArtistBasicInformation> = {};

	if (values?.name?.length === 0) {
		errors.name = "A name is required!";
	}

	if (values?.description?.length === 0) {
		errors.description = "A description is required!";
	}

	if (values?.coverImageUrl?.length === 0) {
		errors.coverImageUrl = "A Cover Image is required!";
	}

	if (values?.profileImageUrl?.length === 0) {
		errors.profileImageUrl = "A Cover Image is required!";
	}

	if (values?.logoUrl?.length === 0) {
		errors.logoUrl = "A Cover Image is required!";
	}

	return errors;
};

export const validateAdvancedInformation = (
	values: ArtistAdvancedInformation
): FormErrors<ArtistAdvancedInformation> => {
	const errors: FormErrors<ArtistAdvancedInformation> = {};

	return errors;
};

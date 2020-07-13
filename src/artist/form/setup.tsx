import React from "react";
import { Field, FieldArray } from "redux-form";
import { ImageUploadInput } from "./imageUploadInput";
import styled from "styled-components";
import { TextFieldArray } from "./TextFieldArray";

const StyledRoot = styled.div`
	display: flex;
	flex-direction: column;
`;

export const ArtistSetup = () => {
	return (
		<StyledRoot>
			<FieldArray
				name="setup.equipment"
				label="Equipment"
				component={TextFieldArray}
			/>
			<Field
				name={`setup.equipmentImageUrl`}
				buttonLabel="Upload Image of Equipment"
				component={ImageUploadInput}
				isNested={true}
				formName="advancedInformation"
				isRequired={true}
			/>
		</StyledRoot>
	);
};

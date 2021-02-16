import React from "react";
import { Field, FieldArray } from "redux-form";
import styled from "styled-components";

import { ImageUploadInput, TextFieldArray } from "../../ui/form";

const StyledRoot = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ArtistSetup = () => {
    return (
        <StyledRoot>
            <FieldArray name="setup.equipment" label="Equipment" component={TextFieldArray} />
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

import { Button, Paper } from "@material-ui/core";
import React from "react";
import { Field, reduxForm } from "redux-form";
import styled from "styled-components";

import { TextFieldWrapper } from "../artist/form/styled";
import { AdaptedTextField, ImageUploadInput } from "../ui/form";

const StyledRoot = styled(Paper)`
    padding: 16px;
    max-width: 600px;
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const SaveButton = styled(Button)`
    margin-top: 16px;
`;
const INITIAL_FORM_VALUES = {
    link: "",
    imageUrl: "",
    content: "",
    title: "",
};

const RawNewsForm = () => {
    return (
        <StyledRoot>
            <TextFieldWrapper>
                <Field name="title" component={AdaptedTextField} label="News Title" />
            </TextFieldWrapper>
            <TextFieldWrapper>
                <Field name="link" component={AdaptedTextField} label="External Link" />
            </TextFieldWrapper>
            <TextFieldWrapper>
                <Field name="content" component={AdaptedTextField} label="News Content" multiline={true} rows={6} />
            </TextFieldWrapper>
            <Field name="imageUrl" component={ImageUploadInput} buttonLabel="Image" formName="news" isRequired={false} />

            <SaveButton variant="contained" color="secondary">
                Save
            </SaveButton>
        </StyledRoot>
    );
};

export const NewsForm = reduxForm<{}, any>({
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    enableReinitialize: true,
    form: "news",
    touchOnChange: true,
    initialValues: INITIAL_FORM_VALUES,
})(RawNewsForm);

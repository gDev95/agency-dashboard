import React, { useRef } from "react";
import { Button, FormHelperText } from "@material-ui/core";
import ReportIcon from "@material-ui/icons/Report";
import CheckIcon from "@material-ui/icons/Check";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { WrappedFieldInputProps, WrappedFieldMetaProps } from "redux-form";

import { ImageUploadHelper } from "../../helper";
import { uploadImageStartAction, uploadImageFinishAction } from "../../artist/actions";

import { useFormValue } from "./useFormValue";

const StyledErrorText = styled(FormHelperText)`
    color: red !important;
`;

interface PropTypes {
    input: WrappedFieldInputProps;
    meta: WrappedFieldMetaProps;
    buttonLabel: string;
    formName: string;
    isRequired: boolean;
    isNested?: boolean;
}

export const ImageUploadInput = ({ buttonLabel: label, input, meta, formName, isNested = false }: PropTypes) => {
    const dispatch = useDispatch();

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>, fileInput: WrappedFieldInputProps) => {
        dispatch(uploadImageStartAction());
        const imageData = event.target.files ? event.target.files[0] : null;
        const imageName = "-image-" + Date.now();
        const imageUploader = new ImageUploadHelper();

        if (!imageData) {
            dispatch(uploadImageFinishAction());
            return;
        }

        imageUploader.upload(
            imageName,
            imageData,
            (url: string) => {
                dispatch(uploadImageFinishAction());
                fileInput.onChange(url);
            },
            () => {
                fileInput.onChange(null);
                dispatch(uploadImageFinishAction());
                throw new Error("An error occured during the upload please try again");
            }
        );
    };

    const isUploaded = useFormValue(formName, input.name, isNested);

    const inputRef = useRef(null);
    return (
        <>
            <input
                ref={inputRef}
                onChange={(event) => handleImageChange(event, input)}
                key={input.name}
                type="file"
                accept="image/*"
                style={{ display: "none" }}
            />

            <Button
                color={meta.touched && meta.error ? "secondary" : "primary"}
                variant="contained"
                component="span"
                // @ts-ignore
                onClick={() => inputRef.current.click()}
            >
                {meta.touched && meta.error && <ReportIcon />}
                {isUploaded ? (
                    <>
                        <CheckIcon /> <span>Successfully uploaded</span>
                    </>
                ) : (
                    label
                )}
            </Button>

            {meta.error && <StyledErrorText>{meta.error}</StyledErrorText>}
        </>
    );
};

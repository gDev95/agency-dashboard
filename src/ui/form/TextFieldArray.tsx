import React from "react";
import { IconButton, Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import { Field, WrappedFieldArrayProps } from "redux-form";
import styled from "styled-components";

import { ErrorText } from "../../artist/form/styled";

import { AdaptedTextField } from "./AdaptedTextField";

const StyledList = styled.li`
    list-style: none;
    display: flex;
    align-items: center;
    width: 100%;
`;

const StyledAdaptedTextField = styled(AdaptedTextField)`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

interface Props extends WrappedFieldArrayProps {
    label: string;
}

export const TextFieldArray = ({ fields, meta, label }: Props) => {
    return (
        <>
            <ul>
                {fields.map((field: any, index: number) => {
                    return (
                        <StyledList key={`${field}`}>
                            <Field
                                name={field}
                                hideError={true}
                                isRequired={true}
                                component={StyledAdaptedTextField}
                                placeholder={`Enter ${label}`}
                            />
                            <IconButton onClick={() => fields.remove(index)}>
                                <DeleteIcon />
                            </IconButton>
                        </StyledList>
                    );
                })}
            </ul>

            <Button onClick={() => fields.push("")}>
                <AddIcon /> Add {label}
            </Button>
            {meta.error && <ErrorText>{meta.error}</ErrorText>}
        </>
    );
};

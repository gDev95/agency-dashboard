import React from 'react';
import { IconButton, Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import { Field, WrappedFieldArrayProps } from 'redux-form';
import styled from 'styled-components';

import { AdaptedTextField, ImageUploadInput } from '../../ui/form';

import { ErrorText } from './styled';

const StyledList = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const ArtistLabels = ({ fields, meta }: WrappedFieldArrayProps) => {
  return (
    <>
      <ul>
        {fields.map((label: string, index: number) => {
          return (
            <StyledList key={`${label}.link`}>
              <Field
                name={`${label}.link`}
                isRequired={true}
                hideError={true}
                component={AdaptedTextField}
                label="Link"
                placeholder="Drop the link to the homepage"
              />
              <Field
                name={`${label}.logoUrl`}
                buttonLabel="Logo"
                component={ImageUploadInput}
                key={index}
                formName="advancedInformation"
                isNested={true}
                isRequired={true}
              />
              <IconButton onClick={() => fields.remove(index)}>
                <DeleteIcon />
              </IconButton>
            </StyledList>
          );
        })}
      </ul>
      <Button onClick={() => fields.push({})}>
        <AddIcon /> Add Label
      </Button>
      {meta.error && <ErrorText>{meta.error}</ErrorText>}
    </>
  );
};

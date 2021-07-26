import React, { useEffect } from 'react';
import { Button, TextField, Tooltip, Typography } from '@material-ui/core';
import { Field, reduxForm, change } from 'redux-form';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import { ImageUploadInput, formPropsAdapter } from '../../ui/form';
import { selectIsImageUploading } from '../selectors';

import { UploadingProgress, FormGroupHeader, TextFieldWrapper, ButtonWrapper } from './styled';
import { validateBasicInformation as validate } from './validate';

const ImageUploadWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  height: 150px;
  padding: 30px;
`;

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const INITIAL_STATE = {
  name: '',
  description: '',
  logoUrl: '',
  coverImageUrl: '',
  profileImageUrl: '',
  isDraft: false,
};
const AdaptedTextField = formPropsAdapter(TextField);

const RawBasicInformationForm = (props: any) => {
  const isUploading = useSelector(selectIsImageUploading);

  const { basicInformation } = props;
  const dispatch = useDispatch();
  useEffect(() => {
    if (basicInformation) {
      Object.keys(basicInformation).map((key) => dispatch(change('basicInformation', key, basicInformation[key])));
    }
  }, [basicInformation, dispatch]);

  return (
    <>
      {isUploading && <UploadingProgress />}
      <FormGroupHeader variant="h6" gutterBottom={true}>
        Basic Information
      </FormGroupHeader>
      <ImageUploadWrapper>
        <Field
          name="profileImageUrl"
          buttonLabel="Profile Image"
          component={ImageUploadInput}
          formName="basicInformation"
          isRequired={true}
        />
        <Field
          name="coverImageUrl"
          buttonLabel="Cover Image"
          component={ImageUploadInput}
          formName="basicInformation"
          isRequired={true}
        />
        <Field
          name="logoUrl"
          buttonLabel="Logo"
          component={ImageUploadInput}
          formName="basicInformation"
          isRequired={true}
        />
      </ImageUploadWrapper>

      <TextFieldWrapper>
        <Field isRequired={true} name="name" component={AdaptedTextField} placeholder="Name of Artist" />
        <Field
          name="description"
          isRequired={true}
          component={AdaptedTextField}
          placeholder="Description"
          multiline={true}
        />
      </TextFieldWrapper>
      <CheckboxWrapper>
        <Field name="isDraft" id="draft" component="input" type="checkbox" isRequired={true} />
        <Tooltip title="If checked, the artist will not show up on the website" aria-label="draft">
          <Typography>Draft Mode</Typography>
        </Tooltip>
      </CheckboxWrapper>
      <ButtonWrapper>
        <Button disabled={true} onClick={props.handleBack}>
          Back
        </Button>

        <Button variant="contained" color="primary" disabled={!props.valid} onClick={props.handleNext}>
          Next
        </Button>
      </ButtonWrapper>
    </>
  );
};

export const BasicInformationForm = reduxForm<{}, any>({
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  enableReinitialize: true,
  form: 'basicInformation',
  touchOnChange: true,
  validate,
  initialValues: INITIAL_STATE,
})(RawBasicInformationForm);

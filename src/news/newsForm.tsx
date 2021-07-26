import { Button, Paper } from '@material-ui/core';
import React from 'react';
import { useDispatch } from 'react-redux';
import { ConfigProps, Field, reduxForm } from 'redux-form';
import styled from 'styled-components';

import { TextFieldWrapper } from '../artist/form/styled';
import { showNotificationAction } from '../notifications';
import { AdaptedTextField, ImageUploadInput, useForm } from '../ui/form';

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
  externalLink: null,
  imageUrl: '',
  videoLink: '',
  title: '',
};

type PropsType = {
  onSubmit: (variables: { news: any }) => void;
} & ConfigProps;

const RawNewsForm = ({ onSubmit }: PropsType) => {
  const dispatch = useDispatch();
  const news = useForm('news');
  const onSave = async () => {
    try {
      await onSubmit(news);
      dispatch(showNotificationAction('Successfully saved news post'));
    } catch (error) {
      dispatch(showNotificationAction('Saving news post failed'));
    }
  };
  return (
    <StyledRoot>
      <TextFieldWrapper>
        <Field name="title" component={AdaptedTextField} label="News Title" />
      </TextFieldWrapper>
      <TextFieldWrapper>
        <Field name="videoLink" component={AdaptedTextField} label="Video Link" isRequired={false} />
        <Field name="externalLink" component={AdaptedTextField} label="External Link" isRequired={false} />
      </TextFieldWrapper>

      <Field name="imageUrl" component={ImageUploadInput} buttonLabel="Image" formName="news" isRequired={false} />

      <SaveButton onClick={onSave} variant="contained" color="secondary">
        Save
      </SaveButton>
    </StyledRoot>
  );
};

export const NewsForm = reduxForm<{}, any>({
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  enableReinitialize: true,
  form: 'news',
  touchOnChange: true,
  initialValues: INITIAL_FORM_VALUES,
})(RawNewsForm);

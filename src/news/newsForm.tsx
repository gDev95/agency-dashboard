import { Button, Paper } from '@material-ui/core';
import { ArrowLeft } from '@material-ui/icons';
import React from 'react';
import ReactPlayer from 'react-player';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { Field, FormErrors, reduxForm } from 'redux-form';
import styled from 'styled-components';

import { TextFieldWrapper, UploadingProgress } from '../artist/form/styled';
import { selectIsImageUploading } from '../artist/selectors';
import { showNotificationAction } from '../notifications';
import { AdaptedTextField, ImageUploadInput, useForm } from '../ui/form';

function isStringEmpty(str: string) {
  if (str) {
    return str.trim().length === 0;
  }
  return true;
}

export const validate = (values: any): FormErrors<any> => {
  console.log('Values', values);
  const errors: any = {};

  if (isStringEmpty(values.title)) {
    console.log('set error for title');
    errors.title = 'A title is required!';
  }
  console.log('errors', errors);
  return errors;
};

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

const StyledPreview = styled.div`
  width: 100%;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const INITIAL_FORM_VALUES = {
  externalLink: null,
  imageUrl: null,
  videoLink: null,
  title: '',
};

const RawNewsForm = ({ onSubmit, valid }: any) => {
  const isUploading = useSelector(selectIsImageUploading);
  const history = useHistory();
  const dispatch = useDispatch();
  const news = useForm('news');
  const onSave = async () => {
    try {
      console.log('news', news);
      await onSubmit(news);
      dispatch(showNotificationAction('Successfully saved news post'));
      history.push('/dashboard');
    } catch (error) {
      dispatch(showNotificationAction('Saving news post failed'));
    }
  };
  return (
    <StyledRoot>
      {isUploading && <UploadingProgress />}
      <TextFieldWrapper>
        <Field name="title" component={AdaptedTextField} label="News Title" required={true} />
      </TextFieldWrapper>
      <TextFieldWrapper>
        <Field name="videoLink" component={AdaptedTextField} label="Video Link" isRequired={false} />
        <Field name="externalLink" component={AdaptedTextField} label="External Link" isRequired={false} />
      </TextFieldWrapper>

      <Field name="imageUrl" component={ImageUploadInput} buttonLabel="Image" formName="news" isRequired={false} />

      <StyledPreview>
        {news.videoLink && <ReactPlayer url={news.videoLink} width="400px" height="200px" />}
        {news.imageUrl && <img src={news.imageUrl} width="400px" height="200px" />}
      </StyledPreview>
      <SaveButton onClick={onSave} disabled={!valid} variant="contained" color="secondary">
        Save
      </SaveButton>
      <Button href="/dashboard">
        <ArrowLeft />
        Return to Dashboard
      </Button>
    </StyledRoot>
  );
};

export const NewsForm = reduxForm<{}, any>({
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  enableReinitialize: true,
  form: 'news',
  validate,
  touchOnChange: true,
  initialValues: INITIAL_FORM_VALUES,
})(RawNewsForm);

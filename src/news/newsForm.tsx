import { Button, Paper } from '@material-ui/core';
import { ArrowLeft } from '@material-ui/icons';
import React from 'react';
import ReactPlayer from 'react-player';
import { useDispatch, useSelector } from 'react-redux';
import { ConfigProps, Field, reduxForm } from 'redux-form';
import styled from 'styled-components';

import { TextFieldWrapper, UploadingProgress } from '../artist/form/styled';
import { selectIsImageUploading } from '../artist/selectors';
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
  imageUrl: '',
  videoLink: '',
  title: '',
};

type PropsType = {
  onSubmit: (variables: { news: any }) => void;
} & ConfigProps;

const RawNewsForm = ({ onSubmit }: PropsType) => {
  const isUploading = useSelector(selectIsImageUploading);
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
      {isUploading && <UploadingProgress />}
      <TextFieldWrapper>
        <Field name="title" component={AdaptedTextField} label="News Title" />
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
      <SaveButton onClick={onSave} variant="contained" color="secondary">
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
  touchOnChange: true,
  initialValues: INITIAL_FORM_VALUES,
})(RawNewsForm);

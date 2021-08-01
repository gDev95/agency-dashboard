import React, { useRef } from 'react';
import { Button, FormHelperText } from '@material-ui/core';
import ReportIcon from '@material-ui/icons/Report';
import CheckIcon from '@material-ui/icons/Check';
import PublishIcon from '@material-ui/icons/Publish';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { WrappedFieldInputProps, WrappedFieldMetaProps } from 'redux-form';

import { ImageUploadHelper } from '../../helper';
import { uploadImageStartAction, uploadImageFinishAction, uploadImageCancelAction } from '../../artist/actions';
import { truncateFileName } from '../../helper/truncateFileName';
import { AppStateType } from '../../store';
import { selectUploadedImage } from '../../artist/selectors';

import { useFormValue } from './useFormValue';

const StyledErrorText = styled(FormHelperText)`
  color: red !important;
`;

const StyledRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface PropTypes {
  key?: string;
  input: WrappedFieldInputProps;
  meta: WrappedFieldMetaProps;
  buttonLabel: string;
  formName: string;
  isRequired: boolean;
  isNested?: boolean;
}

export const ImageUploadInput = ({ key, buttonLabel: label, input, meta, formName, isNested = false }: PropTypes) => {
  const dispatch = useDispatch();
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>, fileInput: WrappedFieldInputProps) => {
    if (!event.target.files) {
      throw new Error('Expected file to be selected but it is not');
    }

    const imageData = event.target.files[0];
    const newImageName = 'image-' + Date.now();
    const imageUploader = new ImageUploadHelper();

    dispatch(uploadImageStartAction(key ? input.name + key : input.name, imageData.name));
    imageUploader.upload(
      newImageName,
      imageData,
      (url: string) => {
        dispatch(uploadImageFinishAction());
        fileInput.onChange(url);
      },
      (error) => {
        fileInput.onChange(null);
        dispatch(uploadImageCancelAction(input.name + key));
        throw error;
        return;
      },
    );
  };
  const uploadedImage = useSelector((state: AppStateType) =>
    selectUploadedImage(state, key ? input.name + key : input.name),
  );
  const isUploaded = useFormValue(formName, input.name, isNested);

  const inputRef = useRef(null);
  return (
    <StyledRoot>
      <input
        ref={inputRef}
        onChange={(event) => handleImageChange(event, input)}
        key={input.name}
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
      />

      <Button
        color={meta.touched && meta.error ? 'secondary' : 'primary'}
        variant="contained"
        component="span"
        // @ts-ignore
        onClick={() => inputRef.current.click()}
      >
        {meta.touched && meta.error && <ReportIcon />}
        {isUploaded && uploadedImage ? (
          <>
            <CheckIcon /> <span>{truncateFileName(uploadedImage.fileName)}</span>
          </>
        ) : (
          <>
            <PublishIcon /> <span>{label}</span>
          </>
        )}
      </Button>

      {meta.error && <StyledErrorText>{meta.error}</StyledErrorText>}
    </StyledRoot>
  );
};

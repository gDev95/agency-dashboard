import {
  UPLOAD_IMAGE_START,
  UPLOAD_IMAGE_FINISH,
  UploadImageFinishActionType,
  UploadImageStartActionType,
  RESET_UPLOADED_IMAGES,
  ResetUploadedImagesActionType,
  UploadImageCancelActionType,
  UPLOAD_IMAGE_CANCEL,
  ADD_ARTIST_START,
  ADD_ARTIST_FINISH,
  ADD_ARTIST_ERROR,
  AddArtistStartActionType,
  AddArtistFinishActionType,
  AddArtistErrorActionType,
} from './actions';

export type ArtistStateType = {
  isImageUploading: boolean;
  uploadedImages: { id: string; fileName: string }[];
  isAddingArtist: boolean;
  error: boolean;
};

const initialState: ArtistStateType = {
  isImageUploading: false,
  uploadedImages: [],
  isAddingArtist: false,
  error: false,
};

export function artistReducer(
  state = initialState,
  action:
    | UploadImageFinishActionType
    | UploadImageCancelActionType
    | UploadImageStartActionType
    | ResetUploadedImagesActionType
    | AddArtistStartActionType
    | AddArtistFinishActionType
    | AddArtistErrorActionType,
) {
  switch (action.type) {
    case UPLOAD_IMAGE_START:
      const filteredUploadedImages = state.uploadedImages.filter((image) => image.id !== action.payload.id);

      return {
        ...state,
        isImageUploading: true,
        uploadedImages: [...filteredUploadedImages, { id: action.payload.id, fileName: action.payload.fileName }],
      };
    case UPLOAD_IMAGE_CANCEL:
      return {
        ...state,
        isImageUploading: false,
        uploadedImages: [...state.uploadedImages.filter((image) => image.id !== action.payload.id)],
      };
    case UPLOAD_IMAGE_FINISH:
      return { ...state, isImageUploading: false };
    case RESET_UPLOADED_IMAGES:
      return { ...state, uploadedImages: [] };
    case ADD_ARTIST_START:
      return { ...state, isAddingArtist: true };
    case ADD_ARTIST_FINISH:
      return { ...state, isAddingArtist: false };
    case ADD_ARTIST_ERROR:
      return { ...state, isAddingArtist: false, error: true };
    default:
      return state;
  }
}

import { AppStateType } from '../store';

export function selectArtistError(state: AppStateType) {
  return state.artist.error;
}

export function selectIsImageUploading(state: AppStateType) {
  return state.artist.isImageUploading;
}

type ImageType = {
  id: string;
  fileName: string;
};
export function selectUploadedImage(state: AppStateType, id: string) {
  return state.artist.uploadedImages.find((image: ImageType) => image.id === id);
}

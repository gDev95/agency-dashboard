import { ArtistStateType } from "./reducer";

export function selectArtistError(state: ArtistStateType) {
    return state.error;
}

export function selectIsImageUploading(state: ArtistStateType) {
    return state.isImageUploading;
}

export function selectUploadedImage(state: ArtistStateType, id: string) {
    return state.uploadedImages.find((image: any) => image.id === id);
}

export const ADD_ARTIST_START = "ADD_ARTIST_START";
export const ADD_ARTIST_FINISH = "ADD_ARTIST_FINISH";
export const ADD_ARTIST_ERROR = "ADD_ARTIST_ERROR";

export type AddArtistStartActionType = {
    type: "ADD_ARTIST_START";
};

export type AddArtistFinishActionType = {
    type: "ADD_ARTIST_FINISH";
};

export type AddArtistErrorActionType = {
    type: "ADD_ARTIST_ERROR";
};

export const addArtistStartAction = (): AddArtistStartActionType => ({
    type: ADD_ARTIST_START,
});

export const addArtistFinishAction = (): AddArtistFinishActionType => ({
    type: ADD_ARTIST_FINISH,
});

export const addArtistErrorAction = (): AddArtistErrorActionType => ({
    type: ADD_ARTIST_ERROR,
});

export const UPLOAD_IMAGE_START = "UPLOAD_IMAGE_START";
export const UPLOAD_IMAGE_FINISH = "UPLOAD_IMAGE_FINISH";
export const UPLOAD_IMAGE_CANCEL = "UPLOAD_IMAGE_CANCEL";
export const RESET_UPLOADED_IMAGES = "RESET_UPLOADED_IMAGES";

export type UploadImageStartActionType = {
    type: "UPLOAD_IMAGE_START";
    payload: { id: string; fileName: string };
};

export type UploadImageFinishActionType = {
    type: "UPLOAD_IMAGE_FINISH";
};

export type UploadImageCancelActionType = {
    type: "UPLOAD_IMAGE_CANCEL";
    payload: { id: string };
};

export type ResetUploadedImagesActionType = {
    type: "RESET_UPLOADED_IMAGES";
};

export const uploadImageStartAction = (id: string, fileName: string): UploadImageStartActionType => ({
    type: UPLOAD_IMAGE_START,
    payload: { id, fileName },
});

export const uploadImageFinishAction = (): UploadImageFinishActionType => ({
    type: UPLOAD_IMAGE_FINISH,
});

export const uploadImageCancelAction = (id: string): UploadImageCancelActionType => ({
    type: UPLOAD_IMAGE_CANCEL,
    payload: { id },
});

export const resetUploadedImagesAction = (): ResetUploadedImagesActionType => ({
    type: RESET_UPLOADED_IMAGES,
});

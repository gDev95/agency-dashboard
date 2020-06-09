export const UPLOAD_IMAGE_START = "UPLOAD_IMAGE_START";
export const UPLOAD_IMAGE_FINISH = "UPLOAD_IMAGE_FINISH";
export const ADD_ARTIST_START = "ADD_ARTIST_START";
export const ADD_ARTIST_FINISH = "ADD_ARTIST_FINISH";
export const ADD_ARTIST_ERROR = "ADD_ARTIST_ERROR";

export interface UploadImageStartAction {
	type: "UPLOAD_IMAGE_START";
}

export interface UploadImageFinishAction {
	type: "UPLOAD_IMAGE_FINISH";
}

export interface AddArtistStartAction {
	type: "ADD_ARTIST_START";
}

export interface AddArtistFinishAction {
	type: "ADD_ARTIST_FINISH";
}

export interface AddArtistErrorAction {
	type: "ADD_ARTIST_ERROR";
}

export const uploadImageStartAction = (): UploadImageStartAction => ({
	type: UPLOAD_IMAGE_START,
});

export const uploadImageFinishAction = (): UploadImageFinishAction => ({
	type: UPLOAD_IMAGE_FINISH,
});

export const AddArtistStartAction = (): AddArtistStartAction => ({
	type: ADD_ARTIST_START,
});

export const AddArtistFinishAction = (): AddArtistFinishAction => ({
	type: ADD_ARTIST_FINISH,
});

export const AddArtistErrorAction = (): AddArtistErrorAction => ({
	type: ADD_ARTIST_ERROR,
});

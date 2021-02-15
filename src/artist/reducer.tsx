import {
    UPLOAD_IMAGE_START,
    UPLOAD_IMAGE_FINISH,
    UploadImageFinishAction,
    UploadImageStartAction,
    AddArtistErrorAction,
    AddArtistFinishAction,
    ADD_ARTIST_ERROR,
    ADD_ARTIST_FINISH,
    ADD_ARTIST_START,
    AddArtistStartAction,
} from "./actions";

export interface ArtistState {
    isImageUploading: boolean;
    isAddingArtist: boolean;
    error: boolean;
}

const initialState: ArtistState = {
    isImageUploading: false,
    isAddingArtist: false,
    error: false,
};

export function artistReducer(
    state = initialState,
    action: UploadImageStartAction | UploadImageFinishAction | AddArtistStartAction | AddArtistFinishAction | AddArtistErrorAction
) {
    switch (action.type) {
        case UPLOAD_IMAGE_START:
            return { ...state, isImageUploading: true };
        case UPLOAD_IMAGE_FINISH:
            return { ...state, isImageUploading: false };
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

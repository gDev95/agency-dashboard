import { createStore, combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import { authenticationReducer, AuthenticationStateType } from "./login";
import { artistReducer, ArtistStateType } from "./artist";
import { NotificationStateType, notificationReducer } from "./notifications";

export type AppStateType = {
    artist: ArtistStateType;
    auth: AuthenticationStateType;
    notification: NotificationStateType;
    form: any; // Get type for redux-form state
};

const rootReducer = combineReducers({
    auth: authenticationReducer,
    form: formReducer,
    artist: artistReducer,
    notification: notificationReducer,
});

export const store = createStore(
    rootReducer,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

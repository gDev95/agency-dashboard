import { createStore, combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { authenticationReducer } from "./reducers/reducer";

import { AuthenticationState } from "../login/actions";

export interface AppState {
	auth: AuthenticationState;
	form: any; // Get type for redux-form state
}

const rootReducer = combineReducers({
	auth: authenticationReducer,
	form: formReducer
});

export default createStore(
	rootReducer,
	(window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
		(window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

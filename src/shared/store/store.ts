import { createStore } from "redux";

import { authenticationReducer } from "../reducers/reducer";

export default createStore(
	authenticationReducer,
	(window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
		(window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

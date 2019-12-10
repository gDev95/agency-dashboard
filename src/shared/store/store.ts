import { createStore } from "redux";

import { authenticationReducer } from "../reducers/reducer";

export default createStore(authenticationReducer);

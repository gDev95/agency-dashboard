import {
	AuthenticationState,
	AuthenticationStartAction,
	AuthenticationSuccessAction,
	AuthenticationFailureAction,
	AUTHENTICATION_START,
	AUTHENTICATION_SUCCESS,
	AUTHENTICATION_FAILURE
} from "../actions/actions";

const initialState: AuthenticationState = {
	userName: "",
	isAuthenticated: false,
	isLoading: false,
	error: null
};

export function authenticationReducer(
	state = initialState,
	action:
		| AuthenticationStartAction
		| AuthenticationSuccessAction
		| AuthenticationFailureAction
) {
	switch (action.type) {
		case AUTHENTICATION_START:
			return { ...state, isLoading: true };
		case AUTHENTICATION_SUCCESS:
			return {
				...state,
				isLoading: false,
				isAuthenticated: true,
				userName: action.payload.userName
			};
		case AUTHENTICATION_FAILURE:
			return {
				...state,
				isLoading: false,
				error: action.payload.error
			};
		default:
			return state;
	}
}

export const AUTHENTICATION_START = "AUTHENTICATION_START";
export const AUTHENTICATION_SUCCESS = "AUTHENTICATION_SUCCESS";
export const AUTHENTICATION_FAILURE = "AUTHENTICATION_FAILURE";

export interface AuthenticationStartAction {
	type: typeof AUTHENTICATION_START;
	payload: {};
}

export interface AuthenticationSuccessAction {
	type: typeof AUTHENTICATION_SUCCESS;
	payload: {};
}

export interface AuthenticationFailureAction {
	type: typeof AUTHENTICATION_FAILURE;
	payload: { error: any };
}

export interface AuthenticationState {
	isAuthenticated: boolean;
	isLoading: boolean;
	error?: any;
}

export function authenticationStartAction(): AuthenticationStartAction {
	return { type: AUTHENTICATION_START, payload: {} };
}

export function authenticationSuccessAction(): AuthenticationSuccessAction {
	return { type: AUTHENTICATION_SUCCESS, payload: {} };
}

export function authenticationFailureAction(
	error: any
): AuthenticationFailureAction {
	return { type: AUTHENTICATION_FAILURE, payload: { error } };
}

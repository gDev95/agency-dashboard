import { AuthenticationState } from "../login";

export function selectIsAuthenticated(state: AuthenticationState) {
	return state.isAuthenticated;
}

export function selectIsLoggingIn(state: AuthenticationState) {
	return state.isLoading;
}

export function selectErrorsInAuthentication(state: AuthenticationState) {
	return state.error;
}

import { AuthenticationStateType } from "../login";

export function selectIsAuthenticated(state: AuthenticationStateType) {
    return state.isAuthenticated;
}

export function selectIsLoggingIn(state: AuthenticationStateType) {
    return state.isLoading;
}

export function selectErrorsInAuthentication(state: AuthenticationStateType) {
    return state.error;
}

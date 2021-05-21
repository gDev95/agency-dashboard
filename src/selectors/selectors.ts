import { AppStateType } from "../store";

export function selectIsAuthenticated(state: AppStateType) {
    return state.auth.isAuthenticated;
}

export function selectIsLoggingIn(state: AppStateType) {
    return state.auth.isLoading;
}

export function selectErrorsInAuthentication(state: AppStateType) {
    return state.auth.error;
}

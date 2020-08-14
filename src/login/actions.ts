export const AUTHENTICATION_START = "AUTHENTICATION_START";
export const AUTHENTICATION_SUCCESS = "AUTHENTICATION_SUCCESS";
export const AUTHENTICATION_FAILURE = "AUTHENTICATION_FAILURE";

export interface AuthenticationStartAction {
    type: "AUTHENTICATION_START";
}

export interface AuthenticationSuccessAction {
    type: "AUTHENTICATION_SUCCESS";
}

export interface AuthenticationFailureAction {
    type: "AUTHENTICATION_FAILURE";
    payload: { error: any };
}

export function authenticationStartAction(): AuthenticationStartAction {
    return { type: AUTHENTICATION_START };
}

export function authenticationSuccessAction(): AuthenticationSuccessAction {
    return { type: AUTHENTICATION_SUCCESS };
}

export function authenticationFailureAction(error: any): AuthenticationFailureAction {
    return { type: AUTHENTICATION_FAILURE, payload: { error } };
}

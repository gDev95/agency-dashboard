import {
    AuthenticationStartAction,
    AuthenticationSuccessAction,
    AuthenticationFailureAction,
    AUTHENTICATION_START,
    AUTHENTICATION_SUCCESS,
    AUTHENTICATION_FAILURE,
} from "./actions";

export interface AuthenticationState {
    isAuthenticated: boolean;
    isLoading: boolean;
    error?: any;
}

const initialState: AuthenticationState = {
    isAuthenticated: false,
    isLoading: false,
    error: null,
};

export function authenticationReducer(
    state = initialState,
    action: AuthenticationStartAction | AuthenticationSuccessAction | AuthenticationFailureAction
) {
    switch (action.type) {
        case AUTHENTICATION_START:
            return { ...state, isLoading: true };
        case AUTHENTICATION_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isAuthenticated: true,
            };
        case AUTHENTICATION_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload.error,
            };
        default:
            return state;
    }
}

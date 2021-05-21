import { ShowNotificationActionType, SHOW_NOTIFICATION, DELETE_NOTIFICATION, DeleteNotificationActionType } from "./actions";

export type NotificationStateType = {
    showNotification: boolean;
    message: string | null;
};

const initialState: NotificationStateType = {
    message: null,
    showNotification: false,
};

export function notificationReducer(state = initialState, action: ShowNotificationActionType | DeleteNotificationActionType) {
    switch (action.type) {
        case SHOW_NOTIFICATION:
            return { ...state, message: action.payload.message, showNotification: true };
        case DELETE_NOTIFICATION:
            return { ...state, message: null, showNotification: false };
        default:
            return state;
    }
}

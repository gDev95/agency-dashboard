export const SHOW_NOTIFICATION = "SHOW_NOTIFICATION";

export const DELETE_NOTIFICATION = "DELETE_NOTIFICATION";

export type ShowNotificationActionType = {
    type: "SHOW_NOTIFICATION";
    payload: {
        message: string;
    };
};

export type DeleteNotificationActionType = {
    type: "DELETE_NOTIFICATION";
};

export const showNotificationAction = (message: string): ShowNotificationActionType => ({
    type: SHOW_NOTIFICATION,
    payload: {
        message,
    },
});

export const deleteNotificationAction = (): DeleteNotificationActionType => ({
    type: DELETE_NOTIFICATION,
});

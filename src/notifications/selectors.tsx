import { AppStateType } from '../store';

export function selectNotification(state: AppStateType) {
  return state.notification;
}

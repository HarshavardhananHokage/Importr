import * as api from '../api';

export const DEFAULT_ACTION = 'DEFAULT_ACTION';
export const FILE_SELECTED_ACTION = 'FILE_SELECTED_ACTION';
export const UPDATE_BIRTHDAY_LIST = 'UPDATE_BIRTHDAY_LIST';
export const SYNC_WITH_GOOGLE = 'SYNC_WITH_GOOGLE';
export const AUTH_WITH_GOOGLE = 'AUTH_WITH_GOOGLE';

export function updateFileSelected(fileName) {
    return { type: FILE_SELECTED_ACTION, payload: fileName}
}

export function updateBirthdayList(birList) {
    return { type: UPDATE_BIRTHDAY_LIST, payload: birList}
}

export function syncWithGoogle() {
    return function (dispatch, getState) {
        let { birthdays } = getState();
        return api.syncWithGoogle(birthdays).then((data) => {
            dispatch({ type: SYNC_WITH_GOOGLE, payload: "success" });
        }).catch((data) => {
            dispatch({ type: SYNC_WITH_GOOGLE, payload: "failure" });
        })
    }
}

export function authWithGoogle () {
    return { type: AUTH_WITH_GOOGLE, payload: true }
}
export const DEFAULT_ACTION = 'DEFAULT_ACTION';
export const FILE_SELECTED_ACTION = 'FILE_SELECTED_ACTION';
export const UPDATE_BIRTHDAY_LIST = 'UPDATE_BIRTHDAY_LIST';

export function updateFileSelected(fileName) {
    return { type: FILE_SELECTED_ACTION, payload: fileName}
}

export function updateBirthdayList(birList) {
    return { type: UPDATE_BIRTHDAY_LIST, payload: birList}
}
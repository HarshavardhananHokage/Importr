import * as actions from './action';

const initialState = {
    file: null,
    birthdays: [],
    isAuthenticated: false,
    isUploadSuccess: null
}

function rootReducer (state = initialState, action) {
    switch(action.type) {
        case actions.FILE_SELECTED_ACTION:
            let fileName = action.payload;
            return Object.assign({}, state, { file: fileName });
        case actions.UPDATE_BIRTHDAY_LIST:
            let birList = action.payload;
            return Object.assign({}, state, { birthdays: birList });
        case actions.SYNC_WITH_GOOGLE:
            let syncStatus = action.payload === "success" ? true: false;
            return Object.assign({}, state, { isUploadSuccess: syncStatus });
        default:
            return state;
    }
}

export default rootReducer;
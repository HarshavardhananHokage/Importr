import * as actions from './action';

const initialState = {
    file: null,
    birthdays: []
}

function rootReducer (state = initialState, action) {
    switch(action.type) {
        case actions.FILE_SELECTED_ACTION:
            let fileName = action.payload;
            return Object.assign({}, state, { file: fileName });
        case actions.UPDATE_BIRTHDAY_LIST:
            let birList = action.payload;
            return Object.assign({}, state, { birthdays: birList });
        default:
            return state;
    }
}

export default rootReducer;
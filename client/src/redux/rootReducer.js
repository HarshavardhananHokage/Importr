import * as actions from './action';

const initialState = {
    birthdays: []
}

function rootReducer (state = initialState, action) {
    switch(action.type) {
        default:
            return state;
    }
}

export default rootReducer;
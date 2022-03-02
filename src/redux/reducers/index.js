import { combineReducers } from "redux";
import {SET_CREDIT_LIMIT} from '../types'

const setCardLimit = (state = {}, action) => {
    console.log('cardLimit reducer ===>', action);
    switch (action.type) {
        case SET_CREDIT_LIMIT:
            return {
                ...state,
                cardLimit: action.payload
            };
        default:
            return state;
    }
};

const appReducer = combineReducers({
    setCardLimitReducer : setCardLimit
});


export const rootReducer = (state, action) => {
	return appReducer(state, action);
};
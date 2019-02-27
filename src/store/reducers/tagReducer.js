import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    tags: null,
    loading: true
}


const getTags = (state, action) => {

    return updateObject(state, {
        tags: action.tags,
        loading: false
    });
}

const tagReducer = (state=initialState, action) => {
    switch (action.type) {
        case actionTypes.TAGS_SUCCESS: return getTags(state, action);
        default:
            return state;
    }
}

export default tagReducer;
import { combineReducers } from 'redux';
import PostData from '../data/posts';

function comments(state = [], action) {
    console.log('COMMENT reducer activated');

    switch (action.type) {
        case 'ADD_COMMENT':
            return [...state, action.comment];
        default:
            return state;
    }
}

function posts(state = PostData, action) {
    console.log(action.index);
    console.log('POST reducer activated');

    switch (action.type) {
        case 'REMOVER':
            return [...state.slice(0, action.index), ...state.slice(action.index + 1)];
        case 'ADD':
            return [...state, action.post];
        default:
            return state;
    }
}

const rootReducer = combineReducers({ posts, comments });
//export default postReducer;
export default rootReducer;

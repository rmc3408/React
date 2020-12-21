import { combineReducers } from 'redux';
import PostData from '../data/posts';

function comments(state = {}, action) {
    console.log('COMMENT reducer activated');
    switch (action.type) {
        case 'ADD_COMMENT':
        if (!state[action.postId]) { // if there is no value
            return { ...state, [action.postId]: [action.comment] };
            // specify id as property of an object using []. 
            //action.postId is not an array.action.comment is an array!
            }
            return { ...state, [action.postId]: [...state[action.postId], action.comment] };
        
        case 'LOAD_COMMENTS':
            return action.comments;
        default:
            return state;
    }
}

function posts(state = PostData, action) {
    //console.log(action.index);
    console.log('POST reducer activated');

    switch (action.type) {
        case 'REMOVER':
            return [...state.slice(0, action.index), ...state.slice(action.index + 1)];
        case 'ADD':
            return [...state, action.post];
        case 'LOAD_POST':
            return action.posts;
        default:
            return state;
    }
}

const rootReducer = combineReducers({ posts, comments });

export default rootReducer;

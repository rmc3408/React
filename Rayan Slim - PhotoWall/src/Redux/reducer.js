import PostData from '../data/posts';

const postReducer = function posts(state = PostData, action) {
    console.log(action.index);

    switch (action.type) {
        case 'REMOVER':
            return [...state.slice(0, action.index), ...state.slice(action.index + 1)];
        case 'ADD':
            return 1
        default:
            return state;
    }
};

export default postReducer;

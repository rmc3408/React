import { database } from '../database/config';

export function startAddingPost(post) {
    return (dispatch => {
        return database.ref('posts').update({ [post.id]: post }).then(() => {
            dispatch(addPost(post)).catch(error => {
                console.log(error);
            });
        });
     });
}

//remove in the App.js
// removePhoto(postRemoved) {
//   console.log(postRemoved.description);
//   this.setState(state => ({
//     posts: state.posts.filter(p => p !== postRemoved)
//   }));

export function removePost(index) {
    return {
        type: 'REMOVER',
        index // or just index: theIndex
    };
}

//adding post
// addPhotoUpdate(postUpdated) {
//   this.setState(state => ({
//     posts: state.posts.concat([postUpdated])
//   }));
// }
export function addPost(post) {
    return {
        type: 'ADD',
        post
    };
}

export function addComment(com, id) {
    return {
        type: 'ADD_COMMENT',
        comment: com,
        postId: id
    };
}



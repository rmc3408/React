import { database } from '../database/config';

export function startLoadingPost() {
  return (dispatch) => {
    return database
      .ref('posts')
      .once('value')
      .then((snapshot) => {
        let posts = [];
        snapshot.forEach((childSnapshot) => {
          posts.push(childSnapshot.val());
        });
        dispatch(loadPosts(posts));
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function loadPosts(posts) {
  return {
    type: 'LOAD_POSTS',
    posts,
  };
}

export function startRemovingPost(index, id) {
  return (dispatch) => {
    return database
      .ref(`posts/${id}`)
      .remove()
      .then(() => {
        dispatch(removePost(index));
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
export function startAddingPost(post) {
  return (dispatch) => {
    return database
      .ref('posts')
      .update({ [post.id]: post })
      .then(() => {
        dispatch(addPost(post));
      })
      .catch((error) => {
        console.log(error);
      });
  };
}   
  
export function startAddingComment(comment, postId) {
  return (dispatch) => {
    return database
      .ref(`comments/${postId}`)
      .push(comment)
      .then(() => {
        dispatch(addComment(comment, postId));
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
export function startLoadingComments() {
  return (dispatch) => {
    return database
      .ref('comments')
      .once('value')
      .then((snapshot) => {
        let comments = {};
        snapshot.forEach((childSnapshot) => {
          comments[childSnapshot.key] = Object.values(childSnapshot.val());
        });
        dispatch(loadComments(comments));
      });
  };
}

export function removePost(index) {
  return {
    type: 'REMOVER',
    index, // or just index: theIndex
  };
}

//remove in the App.js
// removePhoto(postRemoved) {
//   console.log(postRemoved.description);
//   this.setState(state => ({
//     posts: state.posts.filter(p => p !== postRemoved)
//   }));

//adding post
// addPhotoUpdate(postUpdated) {
//   this.setState(state => ({
//     posts: state.posts.concat([postUpdated])
//   }));
// }
export function addPost(post) {
  return {
    type: 'ADD',
    post,
  };
}

export function addComment(com, id) {
  return {
    type: 'ADD_COMMENT',
    comment: com,
    postId: id,
  };
}
export function loadComments(comments) {
  return {
    type: 'LOAD_COMMENTS',
    comments,
  };
}

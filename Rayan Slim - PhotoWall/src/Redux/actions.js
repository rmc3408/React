import { database } from '../database/config';


export function loadPosts(posts) {
  return {
    type: 'LOAD_POST',
    posts,
  };
}

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
      });
      
  };
}

export function removePost(index) {
  return {
    type: 'REMOVER',
    index, // or just index: theIndex
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


export function addPost(post) {
  return {
    type: 'ADD',
    post,
  };
}

export function startAddingPost(post) {
  return (dispatch) => {
    return database
      .ref('posts')
      .update({ [post.id]: post })
      .then(() => {
        dispatch(addPost(post));
      });
      
  };
}   

export function addComment(com, id) {
  return {
    type: 'ADD_COMMENT',
    comment: com,
    postId: id,
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

export function loadComments(comments) {
  return {
    type: 'LOAD_COMMENTS',
    comments,
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

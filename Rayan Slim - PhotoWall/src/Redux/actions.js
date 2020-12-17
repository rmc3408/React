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
export function addPost(thePost) {
    return {
        type: 'ADD',
        post : thePost
    };
}

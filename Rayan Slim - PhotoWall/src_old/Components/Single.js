import React, { Component } from 'react';
import Photo from './Photo';

class Single extends Component {
    render() {
        //console.log(this.props.match.params.id); // MATCH is the propreties for params
        const { match, posts } = this.props;
        //const id = this.props.posts;
        const id = match.params.id;
        const selectedPost = posts.find(p => p.id === id);
        console.log(selectedPost);

        return (<div>
            <Photo post={selectedPost} />
        </div>);
    }
}
export default Single;

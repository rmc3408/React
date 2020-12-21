import React, { Component } from 'react';
import Photo from './Photo';
import Comments from './Comments';

class Single extends Component {
    render() {
        console.log('single component');
        const { match, posts } = this.props;
        const id = Number(match.params.id);
        //console.log(match);
        //console.log(posts);
        //console.log(post);
        //console.log(id);
        const post = posts.find(p => p.id === id);

        const commentS = this.props.comments[match.params.id] || [];
        const index = this.props.posts.findIndex(p => p.id === id);

        return (
            <div className="single-photo">
                <Photo posted={post} {...this.props} index={index} />
                <Comments startAddingComment={this.props.startAddingComment} comments={commentS} id={id} />
                
            </div>
        );
    }
}
export default Single;

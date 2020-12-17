import React, {Component} from 'react';
import Photo from './Photo';
import Comments from './Comments';

class Single extends Component {
    render() {
        const { match, posts } = this.props;
        // turn id into number to perform boolean check on the same type
        const id = Number(match.params.id);
        console.log(match);
        console.log(posts);
        console.log(id);
        const post = posts.find(p => p.id === id);
        console.log(post);

        const commentS = this.props.comments;

        return (
            <div className="single-photo">
                <Photo posted={post} />
                <Comments addComment={this.props.addComment} comments={commentS} />
                
            </div>
        );
    }
}
export default Single;

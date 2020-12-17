import React, { Component } from 'react'; 

class Comments extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        //console.log(event.target.elements.comment.value);
        const comment = event.target.elements.comment.value;
        this.props.addComment(comment); // call the addComment method from the props that are passed dwn 
        
    }

    render() {
        //console.log(this.props.comments);
        return (
            <div className="comment">
                {this.props.comments
                    .map((comm, index) => {
                        return <p key={index}> {comm} </p>;
                    })
                }
                <form className="comment-form" onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="comment" name="comment" />
                    <input type="submit" hidden />
                </form>
            </div>
        );
    }
}

export default Comments;
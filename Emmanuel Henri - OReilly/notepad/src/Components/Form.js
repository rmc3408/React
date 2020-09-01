import React from 'react';

class Form extends React.Component{
    handleChange(event) {
        this.props.handleChange(event);
    }
    handleSubmit(event) {
        this.props.handleSubmit(event);
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.props.handleSubmit}>
                    <label>Title: </label>
                    <input
                        name="currentTitle"
                        type='text'
                        value={this.props.currentTitle}
                        onChange={this.props.handleChange}
                    /> 
                    <label>Body: </label>
                    <textarea
                        name="currentDetails"
                        type='text'
                        value={this.props.currentDetails}
                        onChange={this.props.handleChange}
                    /> 
                    <input type='submit' value='Add Note' />
                </Form>
            </div>
        );
    };

}

export default Form;

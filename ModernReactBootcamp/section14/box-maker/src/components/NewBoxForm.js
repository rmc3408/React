import React, { Component } from 'react'


class NewBoxForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            height: '',
            width: '',
            backgroundColor: '' 
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleInput(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        });

    }
    handleSubmit(evt) {
        evt.preventDefault();
        this.props.addBox(this.state);
        this.setState({
            height: '',
            width: '',
            backgroundColor: '' 
        });

    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}> 
                <label htmlFor='height'>Height</label>
                <input type="text" id="height" name="height" 
                        value={this.state.height}
                        onChange={this.handleInput}
                    />

                <label htmlFor='width'>Width</label>
                <input type="text" id="width" name="width" 
                        value={this.state.width}
                        onChange={this.handleInput}
                    />

                <label htmlFor='bColor'>Background Color </label>
                <input type="text" id="bColor" name="backgroundColor" 
                        value={this.state.backgroundColor}
                        onChange={this.handleInput}
                    />
                    <button> Add new Box </button>
                </form>
            </div>
        )
    }
}

export default NewBoxForm;
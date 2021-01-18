import React, { Component } from 'react';


class ShopListForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            qty: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);

    }
    
    handleSubmit(evt) {
        evt.preventDefault(); //avoid reload page with POST method
        console.log(`the food is ${this.state.name} and quantity is ${this.state.qty}`);
        this.props.onAddItems(this.state);
        this.setState({
            name: '',
            qty: '',
        });
    }
    handleInput(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }



    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}> 
                    
                    <label htmlFor="fName">Food Name</label>
                    <input type="text" id='fName' name="name" //id = label, name = event
                        value={this.state.name}
                        onChange={this.handleInput}
                    />

                    <label htmlFor="quantity">Quantity</label>
                    <input type="text" id='quantity' name="qty" //id = label, name = event
                        value={this.state.qty}
                        onChange={this.handleInput}
                    />

                    <button>Add new item</button>
                </form>
            </div>
        )
    }
}

export default ShopListForm;

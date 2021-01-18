import React, { Component } from 'react';
import ShopListForm from './ShopListForm';

class ShopList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                { name: 'Onions', qty: 2 },
                { name: 'Cocoa', qty: 10 },
                { name: 'Tomatoes', qty: 5 }
            ]
        };
        this.addItems = this.addItems.bind(this);
        
    }
    
    createList() {
        return this.state.items.map((p , idx) => <li key={idx}>Item: {p.name} - Quantity: {p.qty}</li>);
    }

    addItems(theItem) {
        this.setState(curSt => ({
            items: [...curSt.items, theItem]
        }));
    }



    render() {
        return (
            <div>
                <h2>Shopping List</h2>
                <ol className="w3-ol">
                    {this.createList()}
                </ol>
                <ShopListForm onAddItems={this.addItems} />
                
            </div>
        )
    }
}

export default ShopList;

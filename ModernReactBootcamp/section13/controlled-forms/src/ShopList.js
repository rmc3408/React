import React, { Component } from 'react';
import ShopListForm from './ShopListForm';
import { v4 as uuidv4 } from 'uuid';

class ShopList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                { id: uuidv4(), name: 'Onions', qty: 2 },
                { id: uuidv4(), name: 'Cocoa', qty: 10 },
                { id: uuidv4(), name: 'Tomatoes', qty: 5 }
            ]
        };
        this.addItems = this.addItems.bind(this);
        
    }
    
    createList() {
        return this.state.items.map(p => <li key={p.id}>Item: {p.name} - Quantity: {p.qty}</li>);
    }

    addItems(theItem) {
        let itemWithAppendID = { ...theItem, id: uuidv4() };
        this.setState(curSt => ({
            items: [...curSt.items, itemWithAppendID]
        }));
    }



    render() {
        return (
            <div>
                <h2>Shopping List</h2>
                <ul className="w3-ul">
                    {this.createList()}
                </ul>
                <ShopListForm onAddItems={this.addItems} />
                
            </div>
        )
    }
}

export default ShopList;

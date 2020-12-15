//import PropType from 'prop-types';
import React, { Component } from 'react';


class AddPhoto extends Component {
    render() {
        return (<div> 
            <h2> PhotoWall </h2>
            <h5> Upload your picture</h5>
            <div className="forma"> 
                <form>
                    <input type="text" placeholder="link.." />
                    <input type="text" placeholder="description" />
                </form>
            </div>
          </div>)
    }
}
export default AddPhoto;

import PropType from 'prop-types';
import { Link } from 'react-router-dom';
import React from 'react';
import Photo from './Photo';

function Photowall(props) {
    return (
        <div>
        <Link className="plusIcon" to="/AddPhoto"> + </Link>
        <div className="photogrid">
                {props.posts
                    .sort((a, b) => a.id - b.id)
                    .map((post, index) =>
                        <Photo posted={post} key={index} {...props} index={index} />)}
            </div>
        </div>
    );
}

//Validation process
Photowall.propTypes = {
    posts: PropType.array.isRequired
};

export default Photowall;

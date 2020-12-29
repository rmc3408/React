import React from 'react';
import './Header.css';
import Link from '../Link/Link';



function Header(props) {
    console.log(props);
    return (
        <header className="App-header">
            <img src={props.image} className='App-logo' alt='logo' />
            <span className='title'><Link url="https://github.com/rmc3408" title='Github Portfolio' /></span>
        </header>
    )
}

export default Header;